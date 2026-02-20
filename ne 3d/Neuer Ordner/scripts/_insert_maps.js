const fs = require('fs');
const filePath = 'js/modules/Config.js';
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Find 'Pyramide' line
let pyramidLine = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("'Pyramide'")) { pyramidLine = i; break; }
}
if (pyramidLine === -1) { console.error('Pyramide not found'); process.exit(1); }

// Find closing bracket of pyramid map
let closeBracket = -1;
for (let i = pyramidLine; i < lines.length; i++) {
    if (lines[i].trimEnd() === '        }' || lines[i].trimEnd() === '        }\r') {
        closeBracket = i;
        break;
    }
}
if (closeBracket === -1) { console.error('Closing bracket not found'); process.exit(1); }

// Detect line ending style
const usesCRLF = lines[0].endsWith('\r');
const eol = usesCRLF ? '\r' : '';

const newMaps = [
    '        },',
    '        canyon: {',
    "            name: 'Schlucht',",
    '            size: [120, 20, 40],',
    '            obstacles: [',
    '                { pos: [-30, 5, -8], size: [3, 18, 3] },',
    '                { pos: [-10, 5, 8], size: [3, 16, 3] },',
    '                { pos: [15, 5, -6], size: [3, 18, 3] },',
    '                { pos: [35, 5, 7], size: [3, 16, 3] },',
    '                { pos: [-20, 12, 0], size: [2, 3, 30] },',
    '                { pos: [25, 8, 0], size: [2, 3, 30] },',
    '                { pos: [0, 4, 0], size: [8, 8, 8] },',
    '            ],',
    '            portals: [',
    '                { a: [-50, 8, 0], b: [50, 8, 0], color: 0xff8844 },',
    '                { a: [-45, 14, -12], b: [45, 14, 12], color: 0x44ddff },',
    '            ]',
    '        },',
    '        fortress: {',
    "            name: 'Festung',",
    '            size: [90, 35, 90],',
    '            obstacles: [',
    '                { pos: [0, 8, 0], size: [8, 16, 8] },',
    '                { pos: [-30, 5, -15], size: [2, 14, 20] },',
    '                { pos: [-30, 5, 15], size: [2, 14, 20] },',
    '                { pos: [30, 5, -15], size: [2, 14, 20] },',
    '                { pos: [30, 5, 15], size: [2, 14, 20] },',
    '                { pos: [-15, 5, -30], size: [20, 14, 2] },',
    '                { pos: [15, 5, -30], size: [20, 14, 2] },',
    '                { pos: [-15, 5, 30], size: [20, 14, 2] },',
    '                { pos: [15, 5, 30], size: [20, 14, 2] },',
    '                { pos: [-30, 5, -30], size: [5, 20, 5] },',
    '                { pos: [30, 5, -30], size: [5, 20, 5] },',
    '                { pos: [-30, 5, 30], size: [5, 20, 5] },',
    '                { pos: [30, 5, 30], size: [5, 20, 5] },',
    '            ],',
    '            portals: [',
    '                { a: [-10, 10, 0], b: [10, 10, 0], color: 0xffcc00 },',
    '                { a: [0, 10, -10], b: [0, 10, 10], color: 0x00ccff },',
    '            ]',
    '        },',
    '        helix: {',
    "            name: 'Spirale',",
    '            size: [70, 45, 70],',
    '            obstacles: [',
    '                { pos: [0, 15, 0], size: [4, 44, 4] },',
    '                { pos: [18, 3, 0], size: [16, 2, 12] },',
    '                { pos: [0, 9, 18], size: [12, 2, 16] },',
    '                { pos: [-18, 15, 0], size: [16, 2, 12] },',
    '                { pos: [0, 21, -18], size: [12, 2, 16] },',
    '                { pos: [18, 27, 0], size: [16, 2, 12] },',
    '            ],',
    '            portals: [',
    '                { a: [25, 4, 0], b: [-25, 22, 0], color: 0x44ff88 },',
    '                { a: [0, 10, 25], b: [0, 28, -25], color: 0xff44aa },',
    '                { a: [25, 4, 25], b: [-25, 34, -25], color: 0xaa88ff },',
    '            ]',
    '        },',
    '        tubes: {',
    "            name: 'Tunnel',",
    '            size: [80, 25, 80],',
    '            obstacles: [',
    '                { pos: [0, 2, -20], size: [40, 2, 8] },',
    '                { pos: [0, 14, -20], size: [40, 2, 8] },',
    '                { pos: [0, 8, -24], size: [40, 10, 1] },',
    '                { pos: [0, 8, -16], size: [40, 10, 1] },',
    '                { pos: [20, 2, 0], size: [8, 2, 40] },',
    '                { pos: [20, 14, 0], size: [8, 2, 40] },',
    '                { pos: [16, 8, 0], size: [1, 10, 40] },',
    '                { pos: [24, 8, 0], size: [1, 10, 40] },',
    '                { pos: [-20, 5, 20], size: [3, 12, 3] },',
    '                { pos: [-25, 5, 10], size: [3, 12, 3] },',
    '            ],',
    '            portals: [',
    '                { a: [-18, 8, -20], b: [20, 8, 18], color: 0xff6600 },',
    '            ]',
    '        },',
    '        splitLevel: {',
    "            name: 'Split-Level',",
    '            size: [80, 40, 80],',
    '            obstacles: [',
    '                { pos: [-20, 18, -20], size: [24, 2, 24] },',
    '                { pos: [20, 18, -20], size: [24, 2, 24] },',
    '                { pos: [-20, 18, 20], size: [24, 2, 24] },',
    '                { pos: [20, 18, 20], size: [24, 2, 24] },',
    '                { pos: [-18, 3, -18], size: [6, 6, 6] },',
    '                { pos: [18, 3, -18], size: [6, 6, 6] },',
    '                { pos: [-18, 3, 18], size: [6, 6, 6] },',
    '                { pos: [18, 3, 18], size: [6, 6, 6] },',
    '                { pos: [-12, 28, 0], size: [3, 18, 3] },',
    '                { pos: [12, 28, 0], size: [3, 18, 3] },',
    '            ],',
    '            portals: [',
    '                { a: [-30, 8, 0], b: [-30, 30, 0], color: 0x88ff44 },',
    '                { a: [30, 8, 0], b: [30, 30, 0], color: 0xff4488 },',
    '            ]',
    '        },',
    '        rings: {',
    "            name: 'Ringe',",
    '            size: [100, 30, 100],',
    '            obstacles: [',
    '                { pos: [0, 8, 0], size: [4, 16, 4] },',
    '                { pos: [-15, 5, 0], size: [2, 12, 20] },',
    '                { pos: [15, 5, 0], size: [2, 12, 20] },',
    '                { pos: [0, 5, -15], size: [20, 12, 2] },',
    '                { pos: [0, 5, 15], size: [20, 12, 2] },',
    '                { pos: [-35, 5, 0], size: [2, 10, 18] },',
    '                { pos: [35, 5, 0], size: [2, 10, 18] },',
    '                { pos: [0, 5, -35], size: [18, 10, 2] },',
    '                { pos: [0, 5, 35], size: [18, 10, 2] },',
    '                { pos: [-28, 5, -28], size: [12, 10, 2] },',
    '                { pos: [28, 5, -28], size: [12, 10, 2] },',
    '                { pos: [-28, 5, 28], size: [12, 10, 2] },',
    '                { pos: [28, 5, 28], size: [12, 10, 2] },',
    '                { pos: [-35, 3, 14], size: [3, 6, 3] },',
    '                { pos: [35, 3, -14], size: [3, 6, 3] },',
    '                { pos: [-14, 3, 35], size: [3, 6, 3] },',
    '                { pos: [14, 3, -35], size: [3, 6, 3] },',
    '            ],',
    '            portals: [',
    '                { a: [-40, 12, 20], b: [40, 12, -20], color: 0xff8800 },',
    '                { a: [20, 12, -40], b: [-20, 12, 40], color: 0x0088ff },',
    '            ]',
    '        }',
].map(l => l + eol);

// Replace the closing bracket line with new maps (the }, at closeBracket becomes },\n...new maps...\n        })
lines.splice(closeBracket, 1, ...newMaps);

fs.writeFileSync(filePath, lines.join('\n'));
console.log('SUCCESS: 6 new maps inserted after Pyramide (line ' + (closeBracket + 1) + ')');
console.log('New total lines: ' + lines.length);
