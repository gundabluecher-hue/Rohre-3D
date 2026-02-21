import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

export class EditorAssetLoader {
    constructor() {
        this.loader = new OBJLoader();
        this.cache = new Map();

        // Items & Categories that have an OBJ model
        this.modelsToLoad = [
            'item_arrow', 'item_capsule', 'item_coin', 'item_crate', 'item_crystal',
            'item_gem', 'item_health', 'item_orb', 'item_pyramid', 'item_ring',
            'item_rocket', 'item_shield', 'item_sphere', 'item_star', 'item_torus',
            'item_battery', 'item_box'
        ];

        // Jet / Aircraft models (from CONFIG.PLAYER.AIRCRAFT_OPTIONS)
        this.jetsToLoad = [
            { id: 'jet_wwi', file: '../assets/models/jets/cc0/WWIairplane.obj' },
            { id: 'jet_funky_low', file: '../assets/models/jets/cc0/funky_aircraft_low.obj' },
            { id: 'jet_funky_high', file: '../assets/models/jets/cc0/funky_aircraft_high.obj' },
            { id: 'jet_funky_control', file: '../assets/models/jets/cc0/funky_aircraft_control.obj' },
            { id: 'jet_pinnace_lo', file: '../assets/models/jets/cc0/pinnace_lo.obj' },
            { id: 'jet_ship1', file: '../assets/models/jets/cc0/spaceship_pack/dist/obj_mtl/ship1.obj' },
            { id: 'jet_ship2', file: '../assets/models/jets/cc0/spaceship_pack/dist/obj_mtl/ship2.obj' },
            { id: 'jet_ship3', file: '../assets/models/jets/cc0/spaceship_pack/dist/obj_mtl/ship3.obj' },
            { id: 'jet_ship4', file: '../assets/models/jets/cc0/spaceship_pack/dist/obj_mtl/ship4.obj' },
            { id: 'jet_ship5', file: '../assets/models/jets/cc0/spaceship_pack/dist/obj_mtl/ship5.obj' },
            { id: 'jet_ship6', file: '../assets/models/jets/cc0/spaceship_pack/dist/obj_mtl/ship6.obj' },
            { id: 'jet_ship7', file: '../assets/models/jets/cc0/spaceship_pack/dist/obj_mtl/ship7.obj' },
            { id: 'jet_ship8', file: '../assets/models/jets/cc0/spaceship_pack/dist/obj_mtl/ship8.obj' },
            { id: 'jet_ship9', file: '../assets/models/jets/cc0/spaceship_pack/dist/obj_mtl/ship9.obj' },
        ];

        // Specific colors per item to distinguish them in the editor before textures
        this.colors = {
            item_arrow: 0xff0000,
            item_capsule: 0x14b8a6,
            item_coin: 0xeab308,
            item_crate: 0x8b5a2b,
            item_crystal: 0x34d399,
            item_gem: 0xec4899,
            item_health: 0xffffff,
            item_orb: 0x818cf8,
            item_pyramid: 0xf472b6,
            item_ring: 0xfcd34d,
            item_rocket: 0x94a3b8,
            item_shield: 0x38bdf8,
            item_sphere: 0x64748b,
            item_star: 0xfbbf24,
            item_torus: 0xf87171,
            item_battery: 0xfb7185,
            item_box: 0xa78bfa,
            // Jet colors
            jet_wwi: 0xc8a86e,
            jet_funky_low: 0x60a5fa,
            jet_funky_high: 0x34d399,
            jet_funky_control: 0xfbbf24,
            jet_pinnace_lo: 0xa78bfa,
            jet_ship1: 0x94a3b8,
            jet_ship2: 0x818cf8,
            jet_ship3: 0xf472b6,
            jet_ship4: 0x38bdf8,
            jet_ship5: 0xe5e7eb,
            jet_ship6: 0xfb7185,
            jet_ship7: 0x14b8a6,
            jet_ship8: 0xec4899,
            jet_ship9: 0xfcd34d,
        };
    }

    async loadAll() {
        console.log("Loading 3D Assets...");

        // Load item models
        const itemPromises = this.modelsToLoad.map(modelName => {
            return this._loadModel(modelName, `../assets/items/${modelName}.obj`);
        });

        // Load jet models
        const jetPromises = this.jetsToLoad.map(jet => {
            return this._loadModel(jet.id, jet.file);
        });

        await Promise.all([...itemPromises, ...jetPromises]);
        console.log("All Assets loaded.");
    }

    _loadModel(id, url) {
        return new Promise((resolve) => {
            this.loader.load(
                url,
                (object) => {
                    const color = this.colors[id] || 0xdddddd;
                    const defaultMaterial = new THREE.MeshLambertMaterial({ color: color });

                    object.traverse((child) => {
                        if (child.isMesh) {
                            child.material = defaultMaterial;
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });

                    this.cache.set(id, object);
                    resolve();
                },
                undefined,
                (error) => {
                    console.error(`Failed to load ${id}:`, error);
                    resolve();
                }
            );
        });
    }

    getClone(modelName) {
        if (!this.cache.has(modelName)) return null;

        const original = this.cache.get(modelName);
        return original.clone();
    }
}
