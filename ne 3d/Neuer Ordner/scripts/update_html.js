const fs = require('fs');
const filePath = 'index.html';
const content = fs.readFileSync(filePath, 'utf8');

const target = '<option value="pyramid">Pyramide</option>';
const replacement = '<option value="pyramid">Pyramide</option>\n                                <option value="showcase">Item Showcase</option>';

if (content.includes(target) && !content.includes('value="showcase"')) {
    const updated = content.replace(target, replacement);
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Successfully added showcase option.');
} else {
    console.log('Target not found or already added.');
}
