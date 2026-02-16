/* ============================================
   HUD.js - Fighter Jet Head-Up Display
   ============================================ */
import * as THREE from 'three';
import { CONFIG } from './Config.js';

export class HUD {
    constructor(elementId, playerIndex) {
        this.container = document.getElementById(elementId);
        this.playerIndex = playerIndex;

        // Elements
        this.horizon = this.container.querySelector('.hud-horizon');
        this.pitchLadder = this.container.querySelector('.hud-pitch-ladder');
        this.speedValue = this.container.querySelector('#' + (playerIndex === 0 ? 'p1' : 'p2') + '-hud-speed');
        this.altValue = this.container.querySelector('#' + (playerIndex === 0 ? 'p1' : 'p2') + '-hud-alt');
        this.headingValue = this.container.querySelector('#' + (playerIndex === 0 ? 'p1' : 'p2') + '-hud-heading');
        this.lockReticle = this.container.querySelector('.hud-lock-reticle');
        this.lockDist = this.lockReticle.querySelector('.lock-dist');

        // Tapes (Scales)
        this.speedScale = this.container.querySelector('#' + (playerIndex === 0 ? 'p1' : 'p2') + '-hud-speed-scale');
        this.altScale = this.container.querySelector('#' + (playerIndex === 0 ? 'p1' : 'p2') + '-hud-alt-scale');
        this.headingScale = this.container.querySelector('#' + (playerIndex === 0 ? 'p1' : 'p2') + '-hud-heading-scale');

        this._createPitchLadder();
        this._createTapeScales();

        this.visible = false;

        // Temp vectors
        this._vec = new THREE.Vector3();
    }

    _createPitchLadder() {
        // Create lines for -90 to +90 degrees
        for (let i = -18; i <= 18; i++) { // Every 5 degrees
            if (i === 0) continue; // Skip 0 (horizon)
            const deg = i * 5;
            const line = document.createElement('div');
            line.className = 'pitch-line';
            line.dataset.deg = deg;
            line.style.top = `${-deg * 8}px`; // 8px per degree
            line.style.width = `${120 - Math.abs(deg) * 0.5}px`; // Narrower at poles
            if (deg < 0) {
                line.style.borderTopStyle = 'dashed';
            }
            this.pitchLadder.appendChild(line);
        }
    }

    _createTapeScales() {
        // Simple lines for speed/alt
        this._fillScale(this.speedScale, 0, 100, 10, 'px', 20); // 20px step
        this._fillScale(this.altScale, 0, 200, 10, 'px', 20);

        // Compass for heading: N, E, S, W
        const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        for (let i = 0; i <= 360; i += 15) {
            const tick = document.createElement('div');
            tick.style.position = 'absolute';
            tick.style.left = `${i * 4}px`; // 4px per degree
            tick.style.height = i % 90 === 0 ? '10px' : '5px';
            tick.style.borderLeft = '1px solid #0f0';
            tick.style.bottom = '0';

            if (i % 45 === 0) {
                const label = document.createElement('div');
                label.textContent = dirs[(i / 45) % 8];
                label.style.position = 'absolute';
                label.style.left = '-10px';
                label.style.top = '-15px';
                label.style.fontSize = '10px';
                tick.appendChild(label);
            }
            this.headingScale.appendChild(tick);
        }
    }

    _fillScale(container, min, max, step, unit, pxPerStep) {
        for (let v = min; v <= max; v += step) {
            const tick = document.createElement('div');
            tick.style.position = 'absolute';
            tick.style.top = `${-(v * (pxPerStep / step))}px`;
            tick.style.right = '0';
            tick.style.width = '8px';
            tick.style.borderTop = '1px solid #0f0';

            if (v % (step * 2) === 0) {
                const label = document.createElement('div');
                label.textContent = v;
                label.style.position = 'absolute';
                label.style.right = '12px';
                label.style.top = '-6px';
                label.style.fontSize = '9px';
                tick.appendChild(label);
            }
            container.appendChild(tick);
        }
    }

    setVisibility(visible) {
        if (this.visible !== visible) {
            this.visible = visible;
            if (visible) {
                this.container.classList.remove('hidden');
            } else {
                this.container.classList.add('hidden');
            }
        }
    }

    update(player, dt, entityManager) {
        if (!player || !player.alive) {
            this.setVisibility(false);
            return;
        }

        // Only show in specific camera modes (e.g. FIRST_PERSON)
        // Check game logic or pass camera mode
        const camMode = CONFIG.CAMERA.MODES[player.cameraMode];
        if (camMode !== 'FIRST_PERSON') {
            this.setVisibility(false);
            return;
        }

        this.setVisibility(true);

        // 1. Attitude (Roll & Pitch)
        // Three.js Euler Order YXZ means: Y=Yaw, X=Pitch, Z=Roll
        const euler = new THREE.Euler().setFromQuaternion(player.quaternion, 'YXZ');
        const pitchDeg = THREE.MathUtils.radToDeg(euler.x);
        const rollDeg = THREE.MathUtils.radToDeg(euler.z);
        const yawDeg = THREE.MathUtils.radToDeg(euler.y); // Heading

        // Rotate Horizon
        this.horizon.style.transform = `translate(-50%, -50%) rotate(${-rollDeg}deg)`;

        // Move Pitch Ladder
        // 8px per degree pitch
        // Also rotate the ladder to stay aligned with horizon logic
        this.pitchLadder.style.transform = `translate(-50%, -50%) rotate(${-rollDeg}deg) translateY(${pitchDeg * 8}px)`;

        // 2. Speed & Alt
        const speed = Math.round(player.speed * 10); // Scale up a bit
        const alt = Math.round(player.position.y);

        this.speedValue.textContent = speed;
        this.altValue.textContent = alt;

        // Move Scales (center current value)
        // Using pixel steps defined in creation
        this.speedScale.style.transform = `translateY(0) translateY(${speed * 2}px)`; // 2px per unit (20px per 10 units)
        this.altScale.style.transform = `translateY(0) translateY(${alt * 2}px)`;

        // 3. Heading
        let heading = -yawDeg;
        if (heading < 0) heading += 360;
        heading = heading % 360;
        const headingInt = Math.round(heading);

        this.headingValue.textContent = headingInt.toString().padStart(3, '0');
        // 4px per degree, centered at 50% (offset 360/2 * 4 ?)
        // Simply shift: -heading * 4px
        // But we want 0 (North) centered.
        // Let's just shift text track.
        this.headingScale.style.transform = `translateX(-50%) translateX(${-heading * 4}px)`;

        // 4. Lock-On Reticle
        const target = entityManager.getLockOnTarget(player.index);
        if (target && target.alive) {
            // Project 3D pos to 2D screen
            // We need camera! Passed via context? 
            // Better: We just simulate it or get screen pos if we have camera access.
            // Since this class doesn't have direct camera access easily without re-architecture,
            // we will fetch camera from renderer if available.

            // Access Renderer instance via global or pass it?
            // Passing via update args is best.
            // NOTE: For now assuming centered lock if strict angle, but proper projection is needed.
            // Let's grab camera from renderer properly.

            this.lockReticle.classList.remove('hidden');
            const dist = Math.round(player.position.distanceTo(target.position));
            this.lockDist.textContent = dist + 'm';

            // Getting screen position requires camera matrix
            // This is tricky without reference.
            // Let's assume we can get it from renderer.
            const camera = entityManager.renderer.cameras[player.index];
            if (camera) {
                this._vec.copy(target.position);
                this._vec.project(camera); // -1 to 1

                const x = (this._vec.x * .5 + .5) * this.container.clientWidth;
                const y = (-(this._vec.y * .5) + .5) * this.container.clientHeight;

                // Check if behind
                if (this._vec.z < 1) {
                    this.lockReticle.style.left = `${x}px`;
                    this.lockReticle.style.top = `${y}px`;
                } else {
                    this.lockReticle.classList.add('hidden'); // Behind camera
                }
            }

        } else {
            this.lockReticle.classList.add('hidden');
        }
    }
}
