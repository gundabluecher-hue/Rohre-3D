/**
 * VEHICLE-REGISTRY.JS - Zentrale Fahrzeug-Registrierung
 * Verwaltet alle verfügbaren 3D-Modelle und liefert das gewählte Modell
 */

import { AircraftMesh } from './aircraft-mesh.js';
import { SpaceshipMesh } from './spaceship-mesh.js';
import { ArrowMesh } from './arrow-mesh.js';
import { MantaMesh } from './manta-mesh.js';
import { DroneMesh } from './drone-mesh.js';
import { OrbMesh } from './orb-mesh.js';

export const VEHICLES = [
    {
        id: 'aircraft',
        name: 'Jet-Fighter',
        icon: '✈️',
        desc: 'Klassischer Kampfjet mit Deltaflügeln und Kanone',
        MeshClass: AircraftMesh
    },
    {
        id: 'spaceship',
        name: 'Raumschiff',
        icon: '🛸',
        desc: 'UFO-förmiges Raumschiff mit Energie-Triebwerk',
        MeshClass: SpaceshipMesh
    },
    {
        id: 'arrow',
        name: 'Pfeil',
        icon: '🏹',
        desc: 'Schlankes Pfeil-Design für maximale Geschwindigkeit',
        MeshClass: ArrowMesh
    },
    {
        id: 'manta',
        name: 'Manta-Gleiter',
        icon: '🦈',
        desc: 'Breiter Manta-Ray-Gleiter mit geschwungenen Flügeln',
        MeshClass: MantaMesh
    },
    {
        id: 'drone',
        name: 'Kampfdrohne',
        icon: '🤖',
        desc: 'Technischer Quadrotor mit Sensor-Array und Kanone',
        MeshClass: DroneMesh
    },
    {
        id: 'orb',
        name: 'Energie-Orb',
        icon: '🔮',
        desc: 'Mysteriöser Energie-Orb mit rotierenden Ringen',
        MeshClass: OrbMesh
    }
];

/**
 * Erstellt ein Fahrzeug-Mesh anhand der ID
 * @param {string} vehicleId - ID aus VEHICLES
 * @param {number} color - THREE.js Farbe
 * @returns {THREE.Group} Das 3D-Mesh
 */
export function createVehicleMesh(vehicleId, color) {
    const vehicle = VEHICLES.find(v => v.id === vehicleId) || VEHICLES[0];
    return new vehicle.MeshClass(color);
}

/**
 * Gibt die gewählte Fahrzeug-ID für einen Spieler zurück
 * @param {number} playerId - 1 oder 2
 * @returns {string} vehicleId
 */
export function getSelectedVehicle(playerId) {
    const el = document.getElementById(`selVehicle${playerId}`);
    return el ? el.value : 'aircraft';
}
