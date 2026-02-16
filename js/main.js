
import * as THREE from 'three';
import { CONFIG, POWER_TYPES } from './modules/Config.js';
import { InputManager } from './modules/InputManager.js';
import { Renderer } from './modules/Renderer.js';
import { Arena } from './modules/Arena.js';
import { EntityManager } from './modules/EntityManager.js';
import { GameLoop } from './modules/GameLoop.js';

// Global State
const state = {
  phase: "idle", // idle, running, paused
  roundTime: 0,
  scores: { p1: 0, p2: 0 },
  nextPowerSpawnAt: 0
};

// Modules
const input = new InputManager();
const renderer = new Renderer();
const arena = new Arena(renderer.scene);
const entities = new EntityManager(renderer.scene);

// Link Arena to Entities
entities.setArena(arena);

// UI Elements
const ui = {
  overlay: document.getElementById("overlay"),
  btnStart: document.getElementById("btnStart"),
  btnPause: document.getElementById("btnPause"),
  btnOverlayPrimary: document.getElementById("btnOverlayPrimary"),
  scoreText: document.getElementById("scoreText"),
  timerText: document.getElementById("timerText"),
  statusText: document.getElementById("statusText"),
  selMap: document.getElementById("selMap"),
  selPlayers: document.getElementById("selPlayers"),
  chkBot: document.getElementById("chkBot"), // P2 Bot
  chkBot1: document.getElementById("chkBot1"), // P1 Bot
  numExtraBots: document.getElementById("numExtraBots"),

  // HUDs
  hud: document.getElementById("ui") // Main menu
};

// Helper: Show Overlay
function showOverlay(title, desc, mode) {
  const titleEl = ui.overlay.querySelector(".title");
  const descEl = ui.overlay.querySelector(".desc");
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.innerHTML = desc;
  ui.overlay.style.display = "flex";

  // Configure buttons for mode
  ui.btnOverlayPrimary.onclick = () => {
    if (mode === "start") startRound();
    else if (mode === "pause") togglePause();
    else ui.overlay.style.display = "none";
  };

  if (mode === "start") ui.btnOverlayPrimary.textContent = "Runde starten";
  else if (mode === "pause") ui.btnOverlayPrimary.textContent = "Weiter";
  else ui.btnOverlayPrimary.textContent = "OK";
}

// Game Logic
function startRound() {
  ui.overlay.style.display = "none";
  state.phase = "running";
  state.roundTime = 0;
  state.nextPowerSpawnAt = 2.0;

  // Setup Map
  const mapId = ui.selMap ? ui.selMap.value : "basic";
  arena.buildMap(mapId);

  // Setup Players
  const pCount = parseInt(ui.selPlayers?.value || "1");
  const useBot2 = ui.chkBot?.checked;

  entities.initPlayers(pCount, useBot2);

  // Bot 1?
  if (entities.players[0] && ui.chkBot1?.checked) {
    entities.players[0].isBot = true;
  }

  // Reset Entities
  entities.reset();
  entities.resetPlayers(arena.spawnMarker ? arena.spawnMarker.position : new THREE.Vector3(0, 40, 0));

  // Force input reset
  input.update();

  loop.start();
  updateUIPhase();
}

function togglePause() {
  if (state.phase === "running") {
    state.phase = "paused";
    showOverlay("Pause", "Spiel pausiert", "pause");
  } else if (state.phase === "paused") {
    state.phase = "running";
    ui.overlay.style.display = "none";
  }
}

function endRound(reason) {
  state.phase = "idle"; // Or "inspect"
  showOverlay("Runde vorbei", reason, "start");
  // Update Score ...
}

function updateUIPhase() {
  if (state.phase === "running") {
    ui.hud.style.display = "none";
    ui.statusText.textContent = "Läuft";
  } else {
    ui.hud.style.display = "block";
    ui.statusText.textContent = state.phase === "paused" ? "Pausiert" : "Bereit";
  }
}

// Fixed Step Update
function step(dt) {
  if (state.phase !== "running") return;

  // Process input
  // We should call input.update() at the END of step to clear pressed flags for next frame
  // BUT we have fixed step loop. Render loop is separate.
  // Input state is polled.
  // If step runs multiple times per frame, input doesn't change.
  // If input.update() clears pressed, subsequent steps in same frame won't see it?
  // Pressed should persist for one Frame? Or one Step?
  // InputManager updates on events. Pressed set persists until cleared.
  // Clearing should happen once per frame (in render loop?) or once per step?
  // If we want deterministic steps, we need inputs per step.
  // For now, let's clear it at end of step OR start of step.
  // But GameLoop accumulates time.
  // Let's call input update in loop?
  // Actually, InputManager is frame-based (browser events).
  // Let's clear at the START of a requested AnimationFrame?
  // GameLoop.js calls loop(currentTime).
  // Maybe GameLoop should accept onFrameStart callback?
  // Safe bet: clear pressed at end of step. Input resolution is high enough.
  // However, if multiple steps run, the 2nd step won't see the press if cleared in 1st.
  // So clearing should happen once per monitor refresh, e.g. in render or top of loop.
  // I'll put it in render().

  state.roundTime += dt;

  // Spawns
  if (state.roundTime > state.nextPowerSpawnAt) {
    entities.spawnPower();
    state.nextPowerSpawnAt = state.roundTime + (Math.random() * 2 + 2); // Random interval
  }

  // Updates
  entities.updatePlayers(dt, input);
  entities.updatePowers(dt);
  entities.updateProjectiles(dt);
  entities.updateParticles(dt);

  // Win Check
  const win = entities.checkWinCondition();
  if (win.gameOver) {
    endRound(win.reason);
  }

  // Timer UI
  const m = Math.floor(state.roundTime / 60);
  const s = Math.floor(state.roundTime % 60);
  ui.timerText.textContent = `${m.toString().padStart(2, 0)}:${s.toString().padStart(2, 0)}`;
}

// Render
function render() {
  // Clear Input Pressed flags for next frame
  // Note: Render runs once per RAF.
  // Steps run potentially multiple times or 0 times.
  // If steps run, they use input.
  // If we clear here, steps in next frame get fresh start.
  input.update();

  const pCount = entities.players.length;
  // Update cameras
  entities.players.forEach(p => {
    if (!p.alive) return;
    const cam = p.id === 1 ? renderer.camera : renderer.camera2;
    renderer.updateCamera(p, cam, "first"); // Force 1st person for now
    // Update Crosshair visibility?
    const ch = document.getElementById(`crosshair-${p.id}`);
    if (ch) ch.style.display = state.phase === "running" ? "block" : "none";

    // Update Inventory UI
    const invHud = document.getElementById(`inventoryHud-${p.id}`);
    if (invHud) {
      invHud.style.display = state.phase === "running" ? "flex" : "none";
      const slotsHtml = p.inventory.map((item, idx) => {
        const t = POWER_TYPES.find(pt => pt.id === item.typeId);
        const color = t ? t.color : '#fff';
        const isSel = p.selectedSlot === idx;
        return `<div class="slot ${isSel ? 'selected' : ''}" style="background:${color}; width:20px; height:20px; margin:2px; border:${isSel ? '2px solid white' : '1px solid #333'}"></div>`;
      }).join("");
      // Add Empty slots up to size?
      invHud.innerHTML = slotsHtml;
    }

    // Update Boost
    const boostHud = document.getElementById(`boostHud-${p.id}`);
    if (boostHud) {
      boostHud.style.display = state.phase === "running" ? "flex" : (pCount > 1 ? "none" : "flex"); // Show if running or P1
      const fill = boostHud.querySelector(".boostFill");
      if (fill) fill.style.width = (p.boostCharge * 100) + "%";
    }
  });

  renderer.render(entities.players);
}

// Loop
const loop = new GameLoop(step, render);

// Events
if (ui.btnStart) ui.btnStart.onclick = startRound;
if (ui.btnPause) ui.btnPause.onclick = togglePause;

// Init
showOverlay("Willkommen", "Wähle Map & Spielerzahl und drücke Start.", "start");
updateUIPhase();

// Expose for debugging
window.game = { state, entities, arena, renderer, loop };
