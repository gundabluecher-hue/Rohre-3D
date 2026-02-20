const fs = require('fs');
const path = require('path');

function createTorus(filename, R = 3.0, r = 0.4, numc = 32, numt = 16) {
    let verts = [];
    let faces = [];
    for (let i = 0; i < numc; i++) {
        for (let j = 0; j < numt; j++) {
            let u = i * 2 * Math.PI / numc;
            let v = j * 2 * Math.PI / numt;
            let x = (R + r * Math.cos(v)) * Math.cos(u);
            let y = (R + r * Math.cos(v)) * Math.sin(u);
            let z = r * Math.sin(v);
            verts.push({ x, y, z });
        }
    }

    for (let i = 0; i < numc; i++) {
        for (let j = 0; j < numt; j++) {
            let next_i = (i + 1) % numc;
            let next_j = (j + 1) % numt;

            let p1 = i * numt + j + 1;
            let p2 = i * numt + next_j + 1;
            let p3 = next_i * numt + next_j + 1;
            let p4 = next_i * numt + j + 1;

            faces.push([p1, p2, p3, p4]);
        }
    }

    let content = "# Portal Torus\n";
    content += "o Portal\n";
    verts.forEach(v => {
        content += `v ${v.x.toFixed(4)} ${v.y.toFixed(4)} ${v.z.toFixed(4)}\n`;
    });
    faces.forEach(f => {
        content += `f ${f[0]} ${f[1]} ${f[2]} ${f[3]}\n`;
    });
    fs.writeFileSync(filename, content);
}

function createCone(filename, r = 0.5, h = 2.5, numt = 8) {
    let verts = [{ x: 0, y: 0, z: h }]; // top
    let faces = [];

    for (let i = 0; i < numt; i++) {
        let u = i * 2 * Math.PI / numt;
        let x = r * Math.cos(u);
        let y = r * Math.sin(u);
        verts.push({ x, y, z: 0 });
    }
    verts.push({ x: 0, y: 0, z: 0 }); // bottom center
    let center_idx = verts.length;

    for (let i = 0; i < numt; i++) {
        let next_i = (i + 1) % numt;
        faces.push([1, i + 2, next_i + 2]);
        faces.push([center_idx, next_i + 2, i + 2]);
    }

    let content = "# Cone Trail\n";
    content += "o Trail_Segment\n";
    verts.forEach(v => {
        content += `v ${v.x.toFixed(4)} ${v.y.toFixed(4)} ${v.z.toFixed(4)}\n`;
    });
    faces.forEach(f => {
        content += `f ${f[0]} ${f[1]} ${f[2]}\n`;
    });
    fs.writeFileSync(filename, content);
}

function createCube(filename, size = 1.5) {
    let s = size / 2.0;
    let verts = [
        [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
        [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s]
    ];
    let faces = [
        [1, 2, 3, 4], [5, 8, 7, 6], [1, 5, 6, 2],
        [2, 6, 7, 3], [3, 7, 8, 4], [5, 1, 4, 8]
    ];
    let content = "# Box Item\n";
    content += "o Box_Item\n";
    verts.forEach(v => {
        content += `v ${v[0].toFixed(4)} ${v[1].toFixed(4)} ${v[2].toFixed(4)}\n`;
    });
    faces.forEach(f => {
        content += `f ${f[0]} ${f[1]} ${f[2]} ${f[3]}\n`;
    });
    fs.writeFileSync(filename, content);
}

const pBase = path.join(__dirname, '../assets');
if (!fs.existsSync(path.join(pBase, 'portals'))) fs.mkdirSync(path.join(pBase, 'portals'), { recursive: true });
if (!fs.existsSync(path.join(pBase, 'trails'))) fs.mkdirSync(path.join(pBase, 'trails'), { recursive: true });
if (!fs.existsSync(path.join(pBase, 'items'))) fs.mkdirSync(path.join(pBase, 'items'), { recursive: true });

createTorus(path.join(pBase, 'portals/portal_ring.obj'));
createCone(path.join(pBase, 'trails/trail_segment.obj'));
createCube(path.join(pBase, 'items/item_box.obj'));

console.log("Assets successfully generated via Node.js");
