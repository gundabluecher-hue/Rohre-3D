const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../assets/items');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

function writeObj(name, vertices, faces) {
    let content = `# Generated ${name}\n`;
    content += `o ${name}\n`;
    vertices.forEach(v => {
        content += `v ${v[0].toFixed(4)} ${v[1].toFixed(4)} ${v[2].toFixed(4)}\n`;
    });
    faces.forEach(f => {
        content += `f ${f.join(' ')}\n`;
    });

    fs.writeFileSync(path.join(outDir, `${name}.obj`), content);
    console.log(`Generated ${name}.obj (${vertices.length} vertices, ${faces.length} faces)`);
}

// 1. Improved Box (Chamfered Box/Crate style)
function generateBox() {
    const s = 0.6; // main size
    const b = 0.8; // outer boundary size
    const vs = [];

    // An inset box - we essentially create a shape with inset faces.
    // Let's just create a subdivided box where the edges stick out.
    // For simplicity, a standard box with more subdivisions so shading looks a bit better, or just an inset crate.
    // Simpler: a box with extruded faces.
    // Core vertices 8
    for (let i = 0; i < 8; i++) {
        let x = i & 1 ? s : -s;
        let y = i & 2 ? s : -s;
        let z = i & 4 ? s : -s;
        vs.push([x, y, z]);
    }

    // Add faces for a normal box + tiny adjustments to normals if we had them.
    // I'll make an octahedron-truncated box (chamfered box)
    let cVs = [];
    let d = 0.6;
    let cd = 0.4;
    // Top
    cVs.push([-cd, d, -cd], [cd, d, -cd], [cd, d, cd], [-cd, d, cd]);
    // Bottom
    cVs.push([-cd, -d, -cd], [cd, -d, -cd], [cd, -d, cd], [-cd, -d, cd]);
    // Left
    cVs.push([-d, cd, -cd], [-d, -cd, -cd], [-d, -cd, cd], [-d, cd, cd]);
    // Right
    cVs.push([d, cd, -cd], [d, -cd, -cd], [d, -cd, cd], [d, cd, cd]);
    // Front
    cVs.push([-cd, cd, d], [cd, cd, d], [cd, -cd, d], [-cd, -cd, d]);
    // Back
    cVs.push([-cd, cd, -d], [cd, cd, -d], [cd, -cd, -d], [-cd, -cd, -d]);
    // Corners are missing, but this makes it interesting...
    // Actually, writing a chamfered box generator by hand here is complex. 
    // Let's just create an improved box with a subtle bevel:
    const bVs = [
        [-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [-0.5, 0.5, -0.5],
        [-0.5, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, 0.5, 0.5]
    ];
    // scale to 1.5 total
    const faces = [
        [1, 2, 3, 4], [5, 8, 7, 6], [1, 5, 6, 2], [2, 6, 7, 3], [3, 7, 8, 4], [5, 1, 4, 8]
    ];
    writeObj('item_box_base', bVs.map(v => [v[0] * 1.5, v[1] * 1.5, v[2] * 1.5]), faces);
}

// Better script for real custom items
function generateItems() {

    // 1. Improved Box (Crate with inset panels - 24 vertices)
    const b_vs = [];
    const b_fs = [];
    let idx = 1;

    // Helper to add face with inset
    function addPanel(p1, p2, p3, p4, normal) {
        // p1-p4 is outer face (CCW)
        b_vs.push(p1, p2, p3, p4);
        let base = idx;
        idx += 4;

        let inset = 0.15;
        let depth = 0.1;
        let cx = (p1[0] + p2[0] + p3[0] + p4[0]) / 4 - normal[0] * depth;
        let cy = (p1[1] + p2[1] + p3[1] + p4[1]) / 4 - normal[1] * depth;
        let cz = (p1[2] + p2[2] + p3[2] + p4[2]) / 4 - normal[2] * depth;

        let mapP = p => {
            return [
                p[0] * (1 - inset) + cx * inset,
                p[1] * (1 - inset) + cy * inset,
                p[2] * (1 - inset) + cz * inset,
            ];
        };
        b_vs.push(mapP(p1), mapP(p2), mapP(p3), mapP(p4));
        let inB = idx;
        idx += 4;

        // frame faces
        b_fs.push([base, base + 1, inB + 1, inB]);
        b_fs.push([base + 1, base + 2, inB + 2, inB + 1]);
        b_fs.push([base + 2, base + 3, inB + 3, inB + 2]);
        b_fs.push([base + 3, base, inB, inB + 3]);
        // inset face
        b_fs.push([inB, inB + 1, inB + 2, inB + 3]);
    }

    let s = 0.75;
    addPanel([-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s], [0, 0, 1]); // Front
    addPanel([s, -s, -s], [-s, -s, -s], [-s, s, -s], [s, s, -s], [0, 0, -1]); // Back
    addPanel([-s, -s, -s], [-s, -s, s], [-s, s, s], [-s, s, -s], [-1, 0, 0]); // Left
    addPanel([s, -s, s], [s, -s, -s], [s, s, -s], [s, s, s], [1, 0, 0]); // Right
    addPanel([-s, s, s], [s, s, s], [s, s, -s], [-s, s, -s], [0, 1, 0]); // Top
    addPanel([-s, -s, -s], [s, -s, -s], [s, -s, s], [-s, -s, s], [0, -1, 0]); // Bottom

    writeObj('item_box', b_vs, b_fs);


    // 2. Improved Crystal (Hexagonal Bipyramid)
    const c_vs = [];
    c_vs.push([0, 1.2, 0]); // Top 1
    c_vs.push([0, -1.2, 0]); // Bottom 2
    let n = 6;
    for (let i = 0; i < n; i++) {
        let angle = (i * Math.PI * 2) / n;
        c_vs.push([Math.cos(angle) * 0.5, 0.4, Math.sin(angle) * 0.5]); // Next ring 3..8
    }
    for (let i = 0; i < n; i++) {
        let angle = (i * Math.PI * 2) / n + (Math.PI / n); // staggered
        c_vs.push([Math.cos(angle) * 0.5, -0.4, Math.sin(angle) * 0.5]); // Bottom ring 9..14
    }
    const c_fs = [];
    for (let i = 0; i < n; i++) {
        let currTop = 3 + i;
        let nextTop = 3 + ((i + 1) % n);
        let currBot = 9 + i;
        let prevBot = 9 + ((i + n - 1) % n);

        // top cone
        c_fs.push([1, nextTop, currTop]);
        // bottom cone
        c_fs.push([2, currBot, nextBot = 9 + ((i + 1) % n)]);
        // middle side 1
        c_fs.push([currTop, nextTop, currBot]);
        // middle side 2
        let nBotR = 9 + ((i + n - 1) % n);
    }
    // Correct middle faces:
    c_fs.length = 0; // reset
    for (let i = 0; i < n; i++) {
        let currTop = 3 + i;
        let nextTop = 3 + ((i + 1) % n);
        let currBot = 9 + i;
        let prevBot = 9 + ((i + n - 1) % n);

        c_fs.push([1, nextTop, currTop]);
        c_fs.push([2, currBot, 9 + ((i + 1) % n)]);
    }
    // Proper staggered faces
    for (let i = 0; i < n; i++) {
        let rT1 = 3 + i;
        let rT2 = 3 + ((i + 1) % n);
        let rB1 = 9 + i;
        // The edge connects (rT1, rT2) and (rB1), and (rT2) with (rB1, rB2(next))
        c_fs.push([rT1, rT2, rB1]);
        if (i == n - 1) {
            c_fs.push([rT2, 9, rB1]);
        } else {
            c_fs.push([rT2, rB1 + 1, rB1]);
        }
    }
    writeObj('item_crystal', c_vs, c_fs);

    // 3. New Star
    const s_vs = [];
    s_vs.push([0, 0, 0.3]); // Front center (1)
    s_vs.push([0, 0, -0.3]); // Back center (2)
    n = 5;
    for (let i = 0; i < n * 2; i++) {
        let angle = (i * Math.PI * 2) / (n * 2) - Math.PI / 2;
        let radius = i % 2 === 0 ? 1.0 : 0.4; // alternating tips and valleys
        s_vs.push([Math.cos(angle) * radius, Math.sin(angle) * radius, 0]); // 3..12
    }
    const s_fs = [];
    for (let i = 0; i < n * 2; i++) {
        let curr = 3 + i;
        let next = 3 + ((i + 1) % (n * 2));
        s_fs.push([1, next, curr]);
        s_fs.push([2, curr, next]);
    }
    writeObj('item_star', s_vs, s_fs);

    // 4. New Pyramid
    const p_vs = [
        [0, 1.0, 0], // Top 1
        [-0.8, -0.8, -0.8], // 2
        [0.8, -0.8, -0.8],  // 3
        [0.8, -0.8, 0.8],   // 4
        [-0.8, -0.8, 0.8]   // 5
    ];
    const p_fs = [
        [1, 3, 2],
        [1, 4, 3],
        [1, 5, 4],
        [1, 2, 5],
        [5, 2, 3, 4]
    ];
    writeObj('item_pyramid', p_vs, p_fs);

    // 5. New Health/Cross
    const t = 0.3; // thickness
    const h = 0.8; // length of arms
    const d = 0.3; // depth
    const h_vs = [
        // Front face (1-12)
        [-t, h, d], [t, h, d], [t, t, d], [h, t, d], [h, -t, d], [t, -t, d],
        [t, -h, d], [-t, -h, d], [-t, -t, d], [-h, -t, d], [-h, t, d], [-t, t, d],
        // Back face (13-24)
        [-t, h, -d], [t, h, -d], [t, t, -d], [h, t, -d], [h, -t, -d], [t, -t, -d],
        [t, -h, -d], [-t, -h, -d], [-t, -t, -d], [-h, -t, -d], [-h, t, -d], [-t, t, -d]
    ];
    const h_fs = [
        // Front faces (polygons)
        [12, 1, 2, 3], [12, 3, 4, 5, 6, 7, 8, 9, 10, 11], // complex face breaking into simpler ones:
        [1, 2, 3, 12], [3, 4, 5, 6], [9, 6, 7, 8], [11, 12, 9, 10], // arms
        [12, 3, 6, 9], // center
    ];
    // Fix health generation properly with tris/quads:
    const fix_h_fs = [
        [1, 2, 3, 12], [12, 3, 6, 9], [4, 5, 6, 3], [6, 7, 8, 9], [11, 12, 9, 10], // Front
        [15, 14, 13, 24], [21, 18, 15, 24], [18, 17, 16, 15], [21, 20, 19, 18], [22, 21, 24, 23], // Back
    ];
    // Connect sides
    for (let i = 0; i < 12; i++) {
        let curr = 1 + i;
        let next = 1 + ((i + 1) % 12);
        let currB = 13 + i;
        let nextB = 13 + ((i + 1) % 12);
        fix_h_fs.push([curr, currB, nextB, next]);
    }
    writeObj('item_health', h_vs, fix_h_fs);

    // 6. Ring (Torus)
    const r_vs = [];
    const r_fs = [];
    const R_torus = 0.6;
    const rad = 0.2;
    const segT = 8;
    const segR = 8;
    for (let i = 0; i < segT; i++) {
        let u = i / segT * Math.PI * 2;
        let cu = Math.cos(u), su = Math.sin(u);
        for (let j = 0; j < segR; j++) {
            let v = j / segR * Math.PI * 2;
            let cv = Math.cos(v), sv = Math.sin(v);
            let x = (R_torus + rad * cv) * cu;
            let y = rad * sv;
            let z = (R_torus + rad * cv) * su;
            r_vs.push([x, y, z]);
        }
    }
    for (let i = 0; i < segT; i++) {
        for (let j = 0; j < segR; j++) {
            let a = i * segR + j + 1;
            let b = i * segR + (j + 1) % segR + 1;
            let c = ((i + 1) % segT) * segR + j + 1;
            let d = ((i + 1) % segT) * segR + (j + 1) % segR + 1;
            r_fs.push([a, c, d, b]);
        }
    }
    writeObj('item_ring', r_vs, r_fs);

    // 7. Battery/Energy Capsule
    const b_vs2 = [];
    const b_fs2 = [];
    const b_seg = 6;
    const br = 0.35, bh = 0.8;
    const cr = 0.15, ch = 0.1;
    b_vs2.push([0, -bh / 2, 0]); // 1
    b_vs2.push([0, bh / 2, 0]); // 2 (Not strictly needed if flat, but helps structure)
    b_vs2.push([0, bh / 2 + ch, 0]); // 3

    for (let i = 0; i < b_seg; i++) {
        let ang = i / b_seg * Math.PI * 2 + (Math.PI / b_seg);
        let x = Math.cos(ang), z = Math.sin(ang);
        b_vs2.push([x * br, -bh / 2, z * br]); // 4..9
        b_vs2.push([x * br, bh / 2, z * br]);  // 10..15
        b_vs2.push([x * cr, bh / 2, z * cr]);  // 16..21
        b_vs2.push([x * cr, bh / 2 + ch, z * cr]); // 22..27
    }
    for (let i = 0; i < b_seg; i++) {
        let cB = 4 + i, nB = 4 + (i + 1) % b_seg;
        b_fs2.push([nB, cB, 1]);

        let cT = 10 + i, nT = 10 + (i + 1) % b_seg;
        b_fs2.push([cB, nB, nT, cT]);

        let cCB = 16 + i, nCB = 16 + (i + 1) % b_seg;
        b_fs2.push([cT, nT, nCB, cCB]);

        let cCT = 22 + i, nCT = 22 + (i + 1) % b_seg;
        b_fs2.push([cCB, nCB, nCT, cCT]);
        b_fs2.push([cCT, nCT, 3]);
    }
    writeObj('item_battery', b_vs2, b_fs2);

    // 8. Shield
    const sh_vs = [];
    const sh_fs = [];
    const sh_prof = [
        [0, 0.8], [0.6, 0.4], [0.4, -0.4], [0, -0.8], [-0.4, -0.4], [-0.6, 0.4]
    ];
    let thick = 0.15;
    sh_vs.push([0, 0, thick * 1.6]); // 1
    sh_vs.push([0, 0, -thick * 1.6]); // 2

    sh_prof.forEach(p => sh_vs.push([p[0], p[1], thick])); // 3..8
    sh_prof.forEach(p => sh_vs.push([p[0], p[1], -thick])); // 9..14

    let sh_n = 6;
    for (let i = 0; i < sh_n; i++) {
        let cF = 3 + i, nF = 3 + (i + 1) % sh_n;
        let cB = 9 + i, nB = 9 + (i + 1) % sh_n;
        sh_fs.push([cF, nF, 1]);
        sh_fs.push([nB, cB, 2]);
        sh_fs.push([cB, nB, nF, cF]);
    }
    writeObj('item_shield', sh_vs, sh_fs);
}

generateItems();
