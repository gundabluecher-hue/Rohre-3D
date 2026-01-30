/**
 * PROJECTILE-EFFECTS.JS - Visuelle Effekte für Projektile
 * Mündungsfeuer, Glow, Trails, etc.
 */

import { rand } from '../core/utils.js';

/**
 * Erstellt ein verbessertes Projektil-Mesh mit Glow und Icon
 */
export function createEnhancedProjectile(color, icon, size = 8) {
    const group = new THREE.Group();

    const colorObj = new THREE.Color(color);

    // === HAUPT-KUGEL ===
    const sphereGeo = new THREE.SphereGeometry(size, 16, 16);
    const sphereMat = new THREE.MeshStandardMaterial({
        color: colorObj,
        emissive: colorObj.clone(),
        emissiveIntensity: 2.5,
        metalness: 0.4,
        roughness: 0.2
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.castShadow = false; // Projektile werfen keinen Schatten (Performance)
    group.add(sphere);

    // === GLOW-EFFEKT (Äußere Hülle) ===
    const glowGeo = new THREE.SphereGeometry(size * 1.8, 12, 12);
    const glowMat = new THREE.MeshBasicMaterial({
        color: colorObj,
        transparent: true,
        opacity: 0.35,
        side: THREE.BackSide,
        depthWrite: false
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    group.add(glow);

    // === INNER GLOW (Front-Side) ===
    const innerGlowGeo = new THREE.SphereGeometry(size * 1.4, 12, 12);
    const innerGlowMat = new THREE.MeshBasicMaterial({
        color: colorObj,
        transparent: true,
        opacity: 0.25,
        depthWrite: false
    });
    const innerGlow = new THREE.Mesh(innerGlowGeo, innerGlowMat);
    group.add(innerGlow);

    // === ICON als Sprite (optional) ===
    if (icon) {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');

        // Hintergrund
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.arc(64, 64, 55, 0, Math.PI * 2);
        ctx.fill();

        // Icon
        ctx.font = 'bold 80px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(icon, 64, 64);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            depthWrite: false
        });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.scale.setScalar(size * 2.5);
        group.add(sprite);

        group.userData.sprite = sprite; // Für Billboard-Rotation
    }

    return group;
}

/**
 * Mündungsfeuer-Effekt
 */
export function spawnMuzzleFlash(scene, position, color, duration = 0.15) {
    const colorObj = new THREE.Color(color);

    // === FLASH-SPHERE ===
    const flashGeo = new THREE.SphereGeometry(8, 12, 12);
    const flashMat = new THREE.MeshBasicMaterial({
        color: colorObj,
        transparent: true,
        opacity: 1,
        depthWrite: false
    });
    const flash = new THREE.Mesh(flashGeo, flashMat);
    flash.position.copy(position);
    scene.add(flash);

    // === GLOW-RING ===
    const ringGeo = new THREE.RingGeometry(6, 12, 16);
    const ringMat = new THREE.MeshBasicMaterial({
        color: colorObj,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
        depthWrite: false
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(position);
    scene.add(ring);

    // Animation
    const startTime = performance.now();
    const animate = () => {
        const elapsed = (performance.now() - startTime) / 1000;
        const t = elapsed / duration;

        if (t >= 1) {
            scene.remove(flash);
            scene.remove(ring);
            flash.geometry.dispose();
            flash.material.dispose();
            ring.geometry.dispose();
            ring.material.dispose();
            return;
        }

        // Fade-out
        const alpha = 1 - t;
        flash.material.opacity = alpha;
        ring.material.opacity = alpha * 0.8;

        // Grow
        const scale = 1 + t * 4;
        flash.scale.setScalar(scale);
        ring.scale.setScalar(scale);

        requestAnimationFrame(animate);
    };

    animate();
}

/**
 * Projektil-Trail-Effekt (Rauch hinter Projektil)
 */
export class ProjectileTrail {
    constructor(particlePool, color) {
        this.particlePool = particlePool;
        this.color = color;
        this.lastSpawnTime = 0;
        this.spawnInterval = 0.05; // Alle 50ms ein Partikel
    }

    /**
     * Update (aufrufen pro Frame)
     */
    update(position, deltaTime) {
        this.lastSpawnTime += deltaTime;

        if (this.lastSpawnTime >= this.spawnInterval) {
            this.spawnParticle(position);
            this.lastSpawnTime = 0;
        }
    }

    /**
     * Spawnt ein Trail-Partikel
     */
    spawnParticle(position) {
        if (!this.particlePool) return;

        const vel = new THREE.Vector3(
            rand(-10, 10),
            rand(-10, 10),
            rand(-10, 10)
        );

        this.particlePool.spawn(
            position.clone(),
            vel,
            this.color,
            rand(0.3, 0.6), // Kurze Lebensdauer
            rand(3, 6)      // Kleine Größe
        );
    }
}

/**
 * Treffer-Effekt (Burst + Visual Feedback)
 */
export function spawnHitEffect(scene, particlePool, position, color, target) {
    // Partikel-Burst
    if (particlePool) {
        particlePool.spawnBurst(
            position,
            25,              // Anzahl
            color,           // Farbe
            220,             // Geschwindigkeit
            0.8,             // Lebensdauer
            5                // Größe
        );
    }

    // Flash-Ring
    const ringGeo = new THREE.RingGeometry(5, 15, 20);
    const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
        depthWrite: false
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(position);

    // Random Rotation
    ring.rotation.set(
        rand(0, Math.PI * 2),
        rand(0, Math.PI * 2),
        rand(0, Math.PI * 2)
    );

    scene.add(ring);

    // Animate
    const startTime = performance.now();
    const duration = 0.4;

    const animate = () => {
        const t = (performance.now() - startTime) / 1000 / duration;

        if (t >= 1) {
            scene.remove(ring);
            ring.geometry.dispose();
            ring.material.dispose();
            return;
        }

        ring.material.opacity = 1 - t;
        ring.scale.setScalar(1 + t * 3);

        requestAnimationFrame(animate);
    };

    animate();
}

/**
 * Power-Up sammeln Effekt
 */
export function spawnCollectEffect(scene, particlePool, position, color) {
    if (!particlePool) return;

    // Spirale nach oben
    for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 4;
        const radius = 10 + i * 2;

        const vel = new THREE.Vector3(
            Math.cos(angle) * radius,
            150 + i * 5,
            Math.sin(angle) * radius
        );

        particlePool.spawn(
            position.clone(),
            vel,
            color,
            1.2,
            4
        );
    }
}
