import * as THREE from 'three';

export class EditorUI {
    constructor(core) {
        this.core = core;
        this.mapManager = null; // Injected later

        this.currentTool = "select";
        this.selectedObject = null;
        this.clipboardData = null;

        this.useSnap = false;
        this.snapSize = 50;
        this.ARENA_W = 2800;
        this.ARENA_D = 2400;
        this.ARENA_H = 950;

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.isDrawing = false;
        this.drawStartPos = null;
        this.previewMesh = null;

        this.setupVisuals();
        this.setupEventListeners();
    }

    setMapManager(mana) {
        this.mapManager = mana;
    }

    setupVisuals() {
        // Arena Box Visual
        const wallGeo = new THREE.BoxGeometry(1, 1, 1);
        const wallMat = new THREE.MeshBasicMaterial({ color: 0x334155, wireframe: true, transparent: true, opacity: 0.1 });
        this.arenaBoxWall = new THREE.Mesh(wallGeo, wallMat);
        this.core.scene.add(this.arenaBoxWall);

        this.arenaBox = new THREE.BoxHelper(this.arenaBoxWall, 0x3b82f6);
        this.core.scene.add(this.arenaBox);

        this.matTunnelLine = new THREE.LineBasicMaterial({
            color: 0x60a5fa,
            linewidth: 2,
            transparent: true,
            opacity: 0.5
        });

        this.updateArenaVisual();
    }

    updateArenaVisual() {
        this.arenaBox.matrixAutoUpdate = false;
        const matrix = new THREE.Matrix4().makeScale(this.ARENA_W, this.ARENA_H, this.ARENA_D);
        matrix.setPosition(0, this.ARENA_H / 2, 0);
        this.arenaBox.matrix.copy(matrix);
        this.arenaBox.update();
    }

    updateTunnelVisuals() {
        while (this.core.tunnelLines.children.length > 0) {
            const line = this.core.tunnelLines.children[0];
            this.core.tunnelLines.remove(line);
            line.geometry?.dispose?.();
        }

        this.core.objectsContainer.children.forEach(obj => {
            if (obj.userData.type !== 'tunnel') return;
            if (!obj.userData.pointA || !obj.userData.pointB) return;
            const geometry = new THREE.BufferGeometry().setFromPoints([obj.userData.pointA, obj.userData.pointB]);
            const line = new THREE.Line(geometry, this.matTunnelLine);
            this.core.tunnelLines.add(line);
        });
    }

    updateHudCount() {
        document.getElementById("hudObjCount").textContent = `Objekte: ${this.core.objectsContainer.children.length}`;
    }

    getSelectionOutlines(object) {
        const outlines = [];
        if (!object) return outlines;
        object.traverse((child) => {
            if (child.userData?.isSelectionOutline && child.material) outlines.push(child);
        });
        return outlines;
    }

    setSelectionOutline(object, color = 0x000000, opacity = 0.2) {
        const outlines = this.getSelectionOutlines(object);
        outlines.forEach((outline) => {
            outline.material.color.setHex(color);
            outline.material.opacity = opacity;
            outline.material.transparent = true;
            outline.material.needsUpdate = true;
        });
    }

    resolveSelectableObject(hitObject) {
        let node = hitObject;
        while (node && node.parent && node.parent !== this.core.objectsContainer) {
            node = node.parent;
        }
        if (node && node.parent === this.core.objectsContainer) return node;
        return null;
    }

    createClipboardPayload(object) {
        const payload = {
            ...object.userData,
            sourcePos: object.position.clone(),
            rotateY: object.rotation.y || 0
        };
        if (payload.pointA?.isVector3) payload.pointA = payload.pointA.clone();
        if (payload.pointB?.isVector3) payload.pointB = payload.pointB.clone();
        return payload;
    }

    deleteSelectedObject() {
        if (!this.selectedObject) return;

        const removed = this.selectedObject;
        this.core.objectsContainer.remove(removed);
        this.core.transformControl.detach();
        if (removed.userData.type === 'tunnel') this.updateTunnelVisuals();
        this.selectedObject = null;
        this.hidePropPanel();
        this.updateHudCount();
    }

    selectObject(obj) {
        if (this.selectedObject) {
            this.setSelectionOutline(this.selectedObject, 0x000000, 0.2);
        }
        this.selectedObject = obj;
        if (this.selectedObject) {
            this.setSelectionOutline(this.selectedObject, 0xffffff, 0.8);
            this.core.transformControl.attach(this.selectedObject);
            this.showPropPanel(this.selectedObject);
        } else {
            this.core.transformControl.detach();
            this.hidePropPanel();
        }
    }

    clearAllObjects() {
        while (this.core.objectsContainer.children.length > 0) {
            this.core.objectsContainer.remove(this.core.objectsContainer.children[0]);
        }
        this.selectObject(null);
        this.updateTunnelVisuals();
        this.updateHudCount();
    }

    showPropPanel(obj) {
        const propPanel = document.getElementById("propPanel");
        const propSizeRow = document.getElementById("propSizeRow");
        const propWidthRow = document.getElementById("propWidthRow");
        const propDepthRow = document.getElementById("propDepthRow");
        const propHeightRow = document.getElementById("propHeightRow");
        const propSize = document.getElementById("propSize");
        const propWidth = document.getElementById("propWidth");
        const propDepth = document.getElementById("propDepth");
        const propHeight = document.getElementById("propHeight");
        const propY = document.getElementById("propY");

        propPanel.style.display = "block";
        propY.value = Math.round(obj.position.y);

        const u = obj.userData;

        propSizeRow.style.display = "none";
        propWidthRow.style.display = "none";
        propDepthRow.style.display = "none";
        propHeightRow.style.display = "none";
        const propScaleRow = document.getElementById("propScaleRow");
        if (propScaleRow) propScaleRow.style.display = "none";

        if (u.type === 'hard' || u.type === 'foam') {
            propWidthRow.style.display = "flex";
            propDepthRow.style.display = "flex";
            propHeightRow.style.display = "flex";
            propWidth.value = u.sizeX || u.sizeInfo * 2;
            propDepth.value = u.sizeZ || u.sizeInfo * 2;
            propHeight.value = u.sizeY || u.sizeInfo * 2;
        } else if (u.type === 'tunnel' || u.type === 'portal') {
            propSizeRow.style.display = "flex";
            propSize.value = u.radius || u.sizeInfo;
        } else if (u.type === 'aircraft') {
            const propScaleRow = document.getElementById("propScaleRow");
            const propScale = document.getElementById("propScale");
            propScaleRow.style.display = "flex";
            propScale.value = u.modelScale || 50;
        }
    }

    hidePropPanel() {
        document.getElementById("propPanel").style.display = "none";
    }

    setupEventListeners() {
        // UI Tools
        document.querySelectorAll('.tool').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tool').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentTool = btn.dataset.tool;

                document.querySelectorAll('.sub-menu').forEach(m => m.style.display = 'none');
                if (this.currentTool === 'spawn') document.getElementById("subSpawn").style.display = "flex";
                if (this.currentTool === 'item') document.getElementById("subItem").style.display = "flex";
                if (this.currentTool === 'aircraft') document.getElementById("subAircraft").style.display = "flex";

                if (this.currentTool !== 'select') this.selectObject(null);
            });
        });

        // Click & Draw on 3D Canvas
        let isDraggingTransform = false;
        this.core.transformControl.addEventListener('dragging-changed', (e) => {
            isDraggingTransform = e.value;
        });
        this.core.transformControl.addEventListener('objectChange', () => {
            const activeObject = this.core.transformControl.object;
            if (!activeObject) return;

            if (activeObject.userData.type === 'tunnel' && this.mapManager) {
                this.mapManager.syncTunnelEndpointsFromMesh(activeObject);
                this.updateTunnelVisuals();
            }

            if (activeObject === this.selectedObject) {
                this.showPropPanel(activeObject);
            }
        });

        const getGroundPos = (e) => {
            const rect = this.core.container.getBoundingClientRect();
            this.mouse.x = ((e.clientX - rect.left) / this.core.container.clientWidth) * 2 - 1;
            this.mouse.y = -((e.clientY - rect.top) / this.core.container.clientHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.mouse, this.core.camera);

            const useYLayer = document.getElementById("chkYLayer").checked;
            const targetMesh = useYLayer ? this.core.yGroundMesh : this.core.groundMesh;

            const intersectsGround = this.raycaster.intersectObject(targetMesh);
            if (intersectsGround.length > 0) {
                let p = intersectsGround[0].point;
                if (this.useSnap) {
                    p.x = Math.round(p.x / this.snapSize) * this.snapSize;
                    p.z = Math.round(p.z / this.snapSize) * this.snapSize;
                }
                return p;
            }
            return null;
        };

        this.core.container.addEventListener('pointerdown', (e) => {
            if (isDraggingTransform) return;
            if (e.button !== 0) return;

            const rect = this.core.container.getBoundingClientRect();
            this.mouse.x = ((e.clientX - rect.left) / this.core.container.clientWidth) * 2 - 1;
            this.mouse.y = -((e.clientY - rect.top) / this.core.container.clientHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.mouse, this.core.camera);

            if (this.currentTool === "select") {
                const intersects = this.raycaster.intersectObjects(this.core.objectsContainer.children, true);
                if (intersects.length > 0) {
                    this.selectObject(this.resolveSelectableObject(intersects[0].object));
                } else {
                    this.selectObject(null);
                }
            } else {
                // START DRAWING
                const p = getGroundPos(e);
                if (p) {
                    this.selectObject(null);
                    this.isDrawing = true;

                    const useYLayer = document.getElementById("chkYLayer").checked;
                    let y = useYLayer ? parseFloat(document.getElementById("numYLayer").value) : (this.currentTool === 'hard' || this.currentTool === 'foam' ? this.ARENA_H * 0.35 : this.ARENA_H * 0.55);

                    if (useYLayer && (this.currentTool === 'hard' || this.currentTool === 'foam')) {
                        y += (this.ARENA_H * 0.7) / 2; // Offset um Hälfte der Standardhöhe
                    }

                    this.drawStartPos = { x: p.x, y: y, z: p.z };

                    let subType = null;
                    if (this.currentTool === 'spawn') subType = document.getElementById("selSpawnType").value;
                    if (this.currentTool === 'item') subType = document.getElementById("selItemType").value;
                    if (this.currentTool === 'aircraft') subType = document.getElementById("selAircraftType").value;

                    // Erschaffe temporäres Mesh mit Init-Werten
                    this.previewMesh = this.mapManager.createMesh(this.currentTool, subType, p.x, y, p.z, 0, {
                        sizeX: this.snapSize, sizeZ: this.snapSize, sizeY: this.ARENA_H * 0.7,
                        pointA: new THREE.Vector3(p.x, y, p.z), pointB: new THREE.Vector3(p.x, y, p.z)
                    });

                    if (this.previewMesh) {
                        this.setSelectionOutline(this.previewMesh, 0xffff00, 0.65);
                    }
                }
            }
        });

        this.core.container.addEventListener('pointermove', (e) => {
            if (!this.isDrawing || !this.previewMesh) return;

            const curr = getGroundPos(e);
            if (curr) {
                const start = this.drawStartPos;
                const tool = this.previewMesh.userData.type;

                if (tool === 'hard' || tool === 'foam') {
                    // Rechteck: berechne Center und Größe
                    const minSize = this.useSnap ? this.snapSize : 10;
                    const w = Math.max(minSize, Math.abs(curr.x - start.x));
                    const d = Math.max(minSize, Math.abs(curr.z - start.z));
                    const cx = (start.x + curr.x) / 2;
                    const cz = (start.z + curr.z) / 2;

                    this.previewMesh.position.set(cx, start.y, cz);
                    this.previewMesh.scale.set(w, this.ARENA_H * 0.7, d); // Standardwandhöhe
                    this.previewMesh.userData.sizeX = w;
                    this.previewMesh.userData.sizeZ = d;
                    this.previewMesh.userData.sizeY = this.ARENA_H * 0.7;
                } else if (tool === 'tunnel') {
                    const pA = new THREE.Vector3(start.x, start.y, start.z);
                    const pB = new THREE.Vector3(curr.x, start.y, curr.z);
                    if (pA.distanceTo(pB) > 0.1) {
                        this.mapManager.alignTunnelSegment(this.previewMesh, pA, pB, 160);
                    }
                } else {
                    // Items/Portal/Spawn folgen einfach der Maus (Drag-to-place)
                    this.previewMesh.position.set(curr.x, start.y, curr.z);
                }
            }
        });

        this.core.container.addEventListener('pointerup', () => {
            if (this.isDrawing && this.previewMesh) {
                this.isDrawing = false;
                this.setSelectionOutline(this.previewMesh, 0x000000, 0.2);
                this.selectObject(this.previewMesh);
                this.previewMesh = null;
            }
        });

        this.core.container.addEventListener('keyup', (e) => {
            if (e.ctrlKey) return; // handled below
            if (e.key === 'Delete' || e.key === 'Backspace') {
                document.getElementById("btnDelSelected").click();
            }
        });

        // Keyboard Actions
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') return;

            // Delete
            if (e.key === 'Delete' || e.key === 'Backspace') {
                this.deleteSelectedObject();
            }

            // Transform Modes
            if (e.key.toLowerCase() === 'r') {
                if (this.selectedObject && this.core.transformControl.object) {
                    this.core.transformControl.setMode('rotate');
                    this.core.transformControl.showX = false;
                    this.core.transformControl.showY = true;
                    this.core.transformControl.showZ = false;
                }
            }
            if (e.key.toLowerCase() === 't') {
                if (this.selectedObject && this.core.transformControl.object) {
                    this.core.transformControl.setMode('translate');
                    this.core.transformControl.showX = true;
                    this.core.transformControl.showY = true;
                    this.core.transformControl.showZ = true;
                }
            }

            // Copy
            if (e.ctrlKey && e.key.toLowerCase() === 'c') {
                if (this.selectedObject) {
                    this.clipboardData = this.createClipboardPayload(this.selectedObject);
                }
            }
            // Paste
            if (e.ctrlKey && e.key.toLowerCase() === 'v') {
                if (this.clipboardData) {
                    this.raycaster.setFromCamera(this.mouse, this.core.camera);

                    const useYLayer = document.getElementById("chkYLayer").checked;
                    const targetMesh = useYLayer ? this.core.yGroundMesh : this.core.groundMesh;
                    const intersectsGround = this.raycaster.intersectObject(targetMesh);

                    let targetPos = new THREE.Vector3(0, this.clipboardData.sourcePos?.y ?? this.ARENA_H * 0.55, 0);

                    if (intersectsGround.length > 0) {
                        targetPos.x = intersectsGround[0].point.x;
                        targetPos.z = intersectsGround[0].point.z;
                        if (this.useSnap) {
                            targetPos.x = Math.round(targetPos.x / this.snapSize) * this.snapSize;
                            targetPos.z = Math.round(targetPos.z / this.snapSize) * this.snapSize;
                        }
                    }

                    if (useYLayer) {
                        const base_y = parseFloat(document.getElementById("numYLayer").value);
                        targetPos.y = base_y;
                        if (this.clipboardData.type === 'hard' || this.clipboardData.type === 'foam') {
                            const sy = this.clipboardData.sizeY || (this.clipboardData.sizeInfo * 2);
                            targetPos.y = base_y + sy / 2;
                        }
                    } else if (this.clipboardData.type === 'hard' || this.clipboardData.type === 'foam') {
                        targetPos.y = this.ARENA_H * 0.35;
                    }

                    let extraProps = { ...this.clipboardData };
                    delete extraProps.sourcePos;
                    if (extraProps.pointA?.isVector3) extraProps.pointA = extraProps.pointA.clone();
                    if (extraProps.pointB?.isVector3) extraProps.pointB = extraProps.pointB.clone();

                    if (this.clipboardData.type === 'tunnel' && this.clipboardData.pointA && this.clipboardData.pointB) {
                        // Offset the tunnel segment safely so we don't paste directly on top
                        const sourcePos = this.clipboardData.sourcePos?.isVector3
                            ? this.clipboardData.sourcePos
                            : this.clipboardData.pointA.clone().lerp(this.clipboardData.pointB, 0.5);
                        const diff = targetPos.clone().sub(sourcePos);
                        extraProps.pointA = this.clipboardData.pointA.clone().add(diff);
                        extraProps.pointB = this.clipboardData.pointB.clone().add(diff);
                    }

                    const mesh = this.mapManager.createMesh(
                        this.clipboardData.type,
                        this.clipboardData.subType,
                        targetPos.x, targetPos.y, targetPos.z,
                        this.clipboardData.sizeInfo,
                        extraProps
                    );
                    if (mesh) this.selectObject(mesh);
                }
            }
        });

        // Prop changes
        document.getElementById("propY").addEventListener('change', (e) => {
            if (!this.selectedObject) return;
            this.selectedObject.position.y = parseFloat(e.target.value);
            if (this.selectedObject.userData.type === 'tunnel') {
                this.mapManager.syncTunnelEndpointsFromMesh(this.selectedObject);
                this.updateTunnelVisuals();
            }
            this.showPropPanel(this.selectedObject);
        });

        document.getElementById("propSize").addEventListener('change', (e) => {
            if (this.selectedObject) {
                const val = parseFloat(e.target.value);
                const u = this.selectedObject.userData;
                u.sizeInfo = val;

                if (u.type === 'tunnel') {
                    u.radius = val;
                    if (u.pointA && u.pointB) {
                        this.mapManager.alignTunnelSegment(this.selectedObject, u.pointA, u.pointB, val);
                        this.updateTunnelVisuals();
                    }
                } else if (u.type === 'portal') {
                    this.selectedObject.scale.set(val, val, val);
                }
            }
        });

        // Box Scale Inputs
        const updateBoxScale = () => {
            if (this.selectedObject && (this.selectedObject.userData.type === 'hard' || this.selectedObject.userData.type === 'foam')) {
                const w = parseFloat(document.getElementById("propWidth").value);
                const d = parseFloat(document.getElementById("propDepth").value);
                const h = parseFloat(document.getElementById("propHeight").value);

                this.selectedObject.userData.sizeX = w;
                this.selectedObject.userData.sizeZ = d;
                this.selectedObject.userData.sizeY = h;
                this.selectedObject.scale.set(w, h, d);
            }
        };

        document.getElementById("propWidth").addEventListener('change', updateBoxScale);
        document.getElementById("propDepth").addEventListener('change', updateBoxScale);
        document.getElementById("propHeight").addEventListener('change', updateBoxScale);

        // Aircraft Scale Input
        document.getElementById("propScale").addEventListener('change', (e) => {
            if (this.selectedObject && this.selectedObject.userData.type === 'aircraft') {
                const s = parseFloat(e.target.value);
                if (s > 0) {
                    this.selectedObject.userData.modelScale = s;
                    this.selectedObject.scale.set(s, s, s);
                }
            }
        });

        // Arena resize
        const syncArenaValues = () => {
            this.ARENA_W = parseFloat(document.getElementById("numArenaW").value) || 2800;
            this.ARENA_D = parseFloat(document.getElementById("numArenaD").value) || 2400;
            this.ARENA_H = parseFloat(document.getElementById("numArenaH").value) || 950;
            this.updateArenaVisual();
        };

        document.getElementById("numArenaW").addEventListener('change', syncArenaValues);
        document.getElementById("numArenaD").addEventListener('change', syncArenaValues);
        document.getElementById("numArenaH").addEventListener('change', syncArenaValues);

        // Y-Layer Setup
        document.getElementById("chkYLayer").addEventListener('change', (e) => {
            this.core.yGridHelper.visible = e.target.checked;
        });
        document.getElementById("numYLayer").addEventListener('change', (e) => {
            const y = parseFloat(e.target.value);
            this.core.yGridHelper.position.y = y;
            this.core.yGroundMesh.position.y = y;
        });

        // Fly Mode Setup
        document.getElementById("chkFly").addEventListener('change', (e) => {
            const isFly = e.target.checked;
            const rightClickRotate = {
                LEFT: THREE.MOUSE.NONE,
                MIDDLE: THREE.MOUSE.DOLLY,
                RIGHT: THREE.MOUSE.ROTATE
            };

            // Wenn FlyMode an ist, erlauben wir das Drehen nur noch über Rechtsklick (MOUSE.RIGHT),
            // damit Links-Klick (MOUSE.LEFT) komplett fürs Bauen von Blöcken frei ist.
            if (isFly) {
                this.core.orbit.mouseButtons = rightClickRotate;
                if (this.selectedObject) this.core.transformControl.detach();
            } else {
                this.core.orbit.mouseButtons = rightClickRotate;
                if (this.selectedObject) this.core.transformControl.attach(this.selectedObject);
            }
        });

        // Snap Setup
        document.getElementById("chkSnap").addEventListener('change', (e) => {
            this.useSnap = e.target.checked;
            this.core.transformControl.setTranslationSnap(this.useSnap ? this.snapSize : null);
        });
        document.getElementById("numGrid").addEventListener('change', (e) => {
            this.snapSize = parseFloat(e.target.value);
            if (this.useSnap) this.core.transformControl.setTranslationSnap(this.snapSize);
        });

        // Export/Import
        document.getElementById("btnExport").addEventListener("click", () => {
            document.getElementById("jsonOutput").value = this.mapManager.generateJSONExport({
                width: this.ARENA_W, height: this.ARENA_H, depth: this.ARENA_D
            });
        });

        document.getElementById("btnPlaytest").addEventListener("click", () => {
            const jsonText = this.mapManager.generateJSONExport({
                width: this.ARENA_W, height: this.ARENA_H, depth: this.ARENA_D
            });
            // Gleicher Origin (Vite-Server) → localStorage funktioniert direkt
            localStorage.setItem("custom_map_test", jsonText);
            window.open("../index.html", "_blank");
        });

        document.getElementById("btnImport").addEventListener("click", () => {
            const txt = document.getElementById("jsonOutput").value.trim();
            if (txt) this.mapManager.importFromJSON(txt, syncArenaValues);
        });

        document.getElementById("btnNew").addEventListener("click", () => {
            this.clearAllObjects();
            document.getElementById("jsonOutput").value = "";
        });

        document.getElementById("btnDelSelected").addEventListener("click", () => {
            this.deleteSelectedObject();
        });
    }
}
