/**
 * TOUCH-CONTROLS.JS - Mobile Touch-Steuerung
 * Virtual Joystick und Touch-Buttons für Mobilgeräte
 */

export class TouchControls {
    constructor() {
        this.enabled = false;
        this.joystick = null;
        this.buttons = new Map();
        this.touchData = {
            joystickTouch: null,
            yaw: 0,
            pitch: 0,
        };
    }

    /**
     * Initialisiert Touch-Steuerung
     */
    init() {
        if (!('ontouchstart' in window)) {
            console.log('Touch nicht unterstützt - Skip Touch-Controls');
            return;
        }

        this.enabled = true;
        this.createJoystick();
        this.createButtons();
        this.attachListeners();
    }

    /**
     * Erstellt Virtual Joystick
     */
    createJoystick() {
        const container = document.createElement('div');
        container.id = 'virtual-joystick';
        container.style.cssText = `
      position: fixed;
      left: 20px;
      bottom: 20px;
      width: 140px;
      height: 140px;
      background: radial-gradient(circle, rgba(96, 165, 250, 0.2), transparent 70%);
      border: 2px solid rgba(96, 165, 250, 0.4);
      border-radius: 50%;
      z-index: 100;
      touch-action: none;
      display: none;
    `;

        const stick = document.createElement('div');
        stick.id = 'joystick-stick';
        stick.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60px;
      height: 60px;
      background: radial-gradient(circle, #60a5fa, #3b82f6);
      border: 3px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      pointer-events: none;
    `;

        container.appendChild(stick);
        document.body.appendChild(container);
        this.joystick = { container, stick };
    }

    /**
     * Erstellt Touch-Buttons
     */
    createButtons() {
        const buttonConfigs = [
            { id: 'boost', label: 'Boost', right: '20px', bottom: '20px', color: '#22c55e' },
            { id: 'camera', label: 'Cam', right: '20px', bottom: '180px', color: '#60a5fa' },
            { id: 'item1', label: '1', right: '180px', bottom: '20px', color: '#f59e0b' },
            { id: 'item2', label: '2', right: '180px', bottom: '90px', color: '#f59e0b' },
            { id: 'drop', label: 'Drop', right: '180px', bottom: '160px', color: '#ef4444' },
        ];

        buttonConfigs.forEach(config => {
            const btn = document.createElement('button');
            btn.id = `touch-${config.id}`;
            btn.textContent = config.label;
            btn.style.cssText = `
        position: fixed;
        right: ${config.right};
        bottom: ${config.bottom};
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: ${config.color};
        color: white;
        font-weight: bold;
        font-size: 14px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 100;
        touch-action: none;
        display: none;
        opacity: 0.8;
        transition: opacity 0.15s, transform 0.1s;
      `;

            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                btn.style.transform = 'scale(0.9)';
                btn.style.opacity = '1';
                this.handleButtonPress(config.id);
            });

            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                btn.style.transform = 'scale(1)';
                btn.style.opacity = '0.8';
                this.handleButtonRelease(config.id);
            });

            document.body.appendChild(btn);
            this.buttons.set(config.id, btn);
        });
    }

    /**
     * Zeigt/versteckt Touch-Steuerung
     */
    show() {
        if (this.joystick) {
            this.joystick.container.style.display = 'block';
        }
        this.buttons.forEach(btn => btn.style.display = 'block');
    }

    hide() {
        if (this.joystick) {
            this.joystick.container.style.display = 'none';
        }
        this.buttons.forEach(btn => btn.style.display = 'none');
    }

    /**
     * Event-Listener für Joystick
     */
    attachListeners() {
        if (!this.joystick) return;

        const container = this.joystick.container;
        const stick = this.joystick.stick;
        const maxDist = 40;

        const handleJoystickMove = (touch) => {
            const rect = container.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const dx = touch.clientX - rect.left - centerX;
            const dy = touch.clientY - rect.top - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const clamped = Math.min(dist, maxDist);
            const angle = Math.atan2(dy, dx);

            const moveX = Math.cos(angle) * clamped;
            const moveY = Math.sin(angle) * clamped;

            stick.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;

            this.touchData.yaw = moveX / maxDist;
            this.touchData.pitch = -moveY / maxDist;
        };

        container.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (e.touches.length > 0) {
                this.touchData.joystickTouch = e.touches[0].identifier;
                handleJoystickMove(e.touches[0]);
            }
        });

        container.addEventListener('touchmove', (e) => {
            e.preventDefault();
            for (let i = 0; i < e.touches.length; i++) {
                if (e.touches[i].identifier === this.touchData.joystickTouch) {
                    handleJoystickMove(e.touches[i]);
                    break;
                }
            }
        });

        container.addEventListener('touchend', (e) => {
            e.preventDefault();
            stick.style.transform = 'translate(-50%, -50%)';
            this.touchData.yaw = 0;
            this.touchData.pitch = 0;
            this.touchData.joystickTouch = null;
        });
    }

    /**
     * Button-Handler
     */
    handleButtonPress(id) {
        const event = new CustomEvent('virtualbuttondown', { detail: { button: id } });
        window.dispatchEvent(event);
    }

    handleButtonRelease(id) {
        const event = new CustomEvent('virtualbuttonup', { detail: { button: id } });
        window.dispatchEvent(event);
    }

    /**
     * Gibt aktuelle Joystick-Position zurück
     */
    getInput() {
        return {
            yaw: this.touchData.yaw,
            pitch: this.touchData.pitch,
        };
    }

    /**
     * Cleanup
     */
    dispose() {
        if (this.joystick) {
            this.joystick.container.remove();
        }
        this.buttons.forEach(btn => btn.remove());
        this.buttons.clear();
    }
}
