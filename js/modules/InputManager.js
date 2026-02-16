import { CONFIG } from './Config.js';

export class InputManager {
    constructor() {
        this.keyBindings = {
            1: {
                up: "KeyW", down: "KeyS", left: "KeyA", right: "KeyD", rollL: "KeyQ", rollR: "KeyE",
                boost: "ShiftLeft", shoot: "CapsLock", cycle: "Tab", useSelf: "Digit1", drop: "KeyG",
                cam: "KeyC"
            },
            2: {
                up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight", rollL: "KeyN", rollR: "KeyM",
                boost: "ShiftRight", shoot: "Enter", cycle: "ControlRight", useSelf: "Digit0", drop: "KeyH",
                cam: "KeyV"
            }
        };

        this.listeningBtn = null;
        this.held = new Set();
        this.pressed = new Set();
        this.init();
    }

    init() {
        // UI Binding
        const btns = document.querySelectorAll(".keyBind");
        btns.forEach(btn => {
            const p = btn.dataset.player;
            const a = btn.dataset.action;
            if (this.keyBindings[p] && this.keyBindings[p][a]) {
                btn.textContent = this.keyCodeToDisplayName(this.keyBindings[p][a]);
            }
            btn.addEventListener("click", () => {
                if (this.listeningBtn) {
                    this.listeningBtn.classList.remove("listening");
                    // If we were listening, cancel that previous listen action visually
                    const prevP = this.listeningBtn.dataset.player;
                    const prevA = this.listeningBtn.dataset.action;
                    this.listeningBtn.textContent = this.keyCodeToDisplayName(this.keyBindings[prevP][prevA]);
                }
                this.listeningBtn = btn;
                btn.classList.add("listening");
                btn.textContent = "...";
            });
        });

        // Global Key Listener
        window.addEventListener("keydown", (e) => this.handleKeyDown(e));
        window.addEventListener("keyup", (e) => this.handleKeyUp(e));
    }

    handleKeyDown(e) {
        if (this.listeningBtn) {
            e.preventDefault();
            e.stopPropagation();
            const player = parseInt(this.listeningBtn.dataset.player);
            const action = this.listeningBtn.dataset.action;

            if (this.keyBindings[player]) {
                this.keyBindings[player][action] = e.code;
            }

            this.listeningBtn.textContent = this.keyCodeToDisplayName(e.code);
            this.listeningBtn.classList.remove("listening");
            this.listeningBtn = null;
            // saveSettings(); // TODO: Implement settings persistence
            return;
        }

        if (["ArrowUp", "ArrowDown"].includes(e.code) && document.activeElement === document.body) {
            e.preventDefault();
        }

        if (!this.held.has(e.code)) {
            this.pressed.add(e.code);
        }
        this.held.add(e.code);
    }

    handleKeyUp(e) {
        this.held.delete(e.code);
    }

    update() {
        this.pressed.clear();
    }

    isKeyDown(code) {
        return this.held.has(code);
    }

    isKeyPressed(code) {
        return this.pressed.has(code);
    }

    getKeysFor(playerId) {
        return this.keyBindings[playerId];
    }

    keyCodeToDisplayName(code) {
        if (!code) return "???";
        if (code.startsWith("Key")) return code.slice(3);
        if (code.startsWith("Digit")) return code.slice(5);
        if (code === "ArrowUp") return "↑";
        if (code === "ArrowDown") return "↓";
        if (code === "ArrowLeft") return "←";
        if (code === "ArrowRight") return "→";
        if (code === "ShiftLeft") return "Shift";
        if (code === "ShiftRight") return "ShiftR";
        if (code === "ControlLeft") return "Ctrl";
        if (code === "ControlRight") return "CtrlR";
        if (code === "CapsLock") return "CapsL";
        if (code === "Tab") return "Tab";
        if (code === "Enter") return "Enter";
        if (code === "Space") return "Space";
        if (code === "Backspace") return "BSP";
        return code;
    }
}
