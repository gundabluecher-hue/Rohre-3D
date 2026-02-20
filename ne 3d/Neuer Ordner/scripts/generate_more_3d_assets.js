const fs = require('fs');
const path = require('path');

// Generates an OBJ file from vertices and faces
function saveObj(filename, name, verts, faces) {
    let content = `# Generated ${name}\n`;
    content += `o ${name}\n`;
    verts.forEach(v => {
        content += `v ${v[0].toFixed(4)} ${v[1].toFixed(4)} ${v[2].toFixed(4)}\n`;
    });
    faces.forEach(f => {
        content += `f ${f.join(' ')}\n`;
    });
    fs.writeFileSync(filename, content);
}

// 1. Hexagonales Portal
function createHexPortal(filename) {
    let verts = [];
    let faces = [];
    let R_out = 3.0; // Outer radius
    let R_in = 2.4;  // Inner radius
    let depth = 0.5; // Thickness

    // 6 outer front, 6 inner front, 6 outer back, 6 inner back
    for (let i = 0; i < 6; i++) {
        let angle = i * Math.PI / 3;
        let co = Math.cos(angle);
        let si = Math.sin(angle);
        verts.push([R_out * co, R_out * si, depth]);
        verts.push([R_in * co, R_in * si, depth]);
        verts.push([R_out * co, R_out * si, -depth]);
        verts.push([R_in * co, R_in * si, -depth]);
    }

    for (let i = 0; i < 6; i++) {
        let next = (i + 1) % 6;
        let of1 = i * 4, if1 = i * 4 + 1, ob1 = i * 4 + 2, ib1 = i * 4 + 3;
        let of2 = next * 4, if2 = next * 4 + 1, ob2 = next * 4 + 2, ib2 = next * 4 + 3;

        faces.push([of1 + 1, of2 + 1, if2 + 1, if1 + 1]);
        faces.push([ob1 + 1, ib1 + 1, ib2 + 1, ob2 + 1]);
        faces.push([of1 + 1, ob1 + 1, ob2 + 1, of2 + 1]);
        faces.push([if1 + 1, if2 + 1, ib2 + 1, ib1 + 1]);
    }
    saveObj(filename, "HexPortal", verts, faces);
}

// 2. Kristall / Gem (Doppel-Pyramide)
function createCrystal(filename) {
    let verts = [];
    let faces = [];
    let radius = 0.8;
    let halfHeight = 1.5;
    let segments = 6;

    verts.push([0, halfHeight, 0]); // Index 1
    verts.push([0, -halfHeight, 0]); // Index 2

    for (let i = 0; i < segments; i++) {
        let angle = i * 2 * Math.PI / segments;
        verts.push([radius * Math.cos(angle), 0, radius * Math.sin(angle)]);
    }

    for (let i = 0; i < segments; i++) {
        let next = (i + 1) % segments;
        let v1 = i + 3;
        let v2 = next + 3;
        faces.push([1, v1, v2]);
        faces.push([2, v2, v1]);
    }
    saveObj(filename, "Crystal", verts, faces);
}

// 3. Pfeil- bzw. Raumschiff-Spur (Trail Arrow)
function createArrowTrail(filename) {
    let verts = [];
    let faces = [];

    verts.push([0, 0, 3]); // Tip (1)
    let s = 0.8;
    verts.push([-s, -s, 1]); // 2
    verts.push([s, -s, 1]); // 3
    verts.push([s, s, 1]); // 4
    verts.push([-s, s, 1]); // 5
    let ts = 0.3;
    verts.push([-ts, -ts, -2]); // 6
    verts.push([ts, -ts, -2]); // 7
    verts.push([ts, ts, -2]); // 8
    verts.push([-ts, ts, -2]); // 9

    faces.push([1, 2, 3]);
    faces.push([1, 3, 4]);
    faces.push([1, 4, 5]);
    faces.push([1, 5, 2]);

    faces.push([2, 6, 7, 3]);
    faces.push([3, 7, 8, 4]);
    faces.push([4, 8, 9, 5]);
    faces.push([5, 9, 6, 2]);
    faces.push([6, 9, 8, 7]);

    saveObj(filename, "ArrowTrail", verts, faces);
}

// 4. Low-Poly Kugel (Sphere)
function createSphere(filename) {
    let verts = [];
    let faces = [];
    let radius = 1.0;
    let latSteps = 8;
    let lonSteps = 16;

    for (let i = 0; i <= latSteps; i++) {
        let theta = i * Math.PI / latSteps;
        let sinTheta = Math.sin(theta);
        let cosTheta = Math.cos(theta);

        for (let j = 0; j <= lonSteps; j++) {
            let phi = j * 2 * Math.PI / lonSteps;
            let sinPhi = Math.sin(phi);
            let cosPhi = Math.cos(phi);

            let x = radius * sinTheta * cosPhi;
            let y = radius * cosTheta;
            let z = radius * sinTheta * sinPhi;
            verts.push([x, y, z]);
        }
    }

    for (let i = 0; i < latSteps; i++) {
        for (let j = 0; j < lonSteps; j++) {
            let first = (i * (lonSteps + 1)) + j + 1;
            let second = first + lonSteps + 1;
            faces.push([first, second, second + 1, first + 1]);
        }
    }
    saveObj(filename, "LowPolySphere", verts, faces);
}

// 5. Eckiges Quadrat-Portal (Sci-Fi Frame)
function createSquarePortal(filename) {
    let verts = [];
    let faces = [];

    let io = 2.0;
    let oo = 2.8;
    let d = 0.4;

    verts.push([-oo, -oo, d]); // 1
    verts.push([oo, -oo, d]); // 2
    verts.push([oo, oo, d]); // 3
    verts.push([-oo, oo, d]); // 4
    verts.push([-io, -io, d]); // 5
    verts.push([io, -io, d]); // 6
    verts.push([io, io, d]); // 7
    verts.push([-io, io, d]); // 8

    const bo = 8;
    verts.push([-oo, -oo, -d]); // 9
    verts.push([oo, -oo, -d]); // 10
    verts.push([oo, oo, -d]); // 11
    verts.push([-oo, oo, -d]); // 12
    verts.push([-io, -io, -d]); // 13
    verts.push([io, -io, -d]); // 14
    verts.push([io, io, -d]); // 15
    verts.push([-io, io, -d]); // 16

    faces.push([1, 2, 6, 5]);
    faces.push([2, 3, 7, 6]);
    faces.push([3, 4, 8, 7]);
    faces.push([4, 1, 5, 8]);

    faces.push([bo + 1, bo + 5, bo + 6, bo + 2]);
    faces.push([bo + 2, bo + 6, bo + 7, bo + 3]);
    faces.push([bo + 3, bo + 7, bo + 8, bo + 4]);
    faces.push([bo + 4, bo + 8, bo + 5, bo + 1]);

    faces.push([1, bo + 1, bo + 2, 2]);
    faces.push([2, bo + 2, bo + 3, 3]);
    faces.push([3, bo + 3, bo + 4, 4]);
    faces.push([4, bo + 4, bo + 1, 1]);

    faces.push([5, 6, bo + 6, bo + 5]);
    faces.push([6, 7, bo + 7, bo + 6]);
    faces.push([7, 8, bo + 8, bo + 7]);
    faces.push([8, 5, bo + 5, bo + 8]);

    saveObj(filename, "SquarePortal", verts, faces);
}

const pBase = path.join(__dirname, '../assets');

createHexPortal(path.join(pBase, 'portals/portal_hex.obj'));
createSquarePortal(path.join(pBase, 'portals/portal_square.obj'));
createArrowTrail(path.join(pBase, 'trails/trail_arrow.obj'));
createCrystal(path.join(pBase, 'items/item_crystal.obj'));
createSphere(path.join(pBase, 'items/item_sphere.obj'));

console.log("5 neue 3D-Assets erfolgreich generiert!");
