/* Regenerasi embed contoh di panel-designer.html dari file JSON.
   Jalankan: node tools/regen_embed.js [path-ke-folder-repo] */
const fs = require('fs');
const path = require('path');
const dir = process.argv[2] || path.join(__dirname, '..');
const hp = path.join(dir, 'panel-designer.html');
let html = fs.readFileSync(hp, 'utf8');

const startMark = html.indexOf('/* Contoh panel - salinan');
if (startMark < 0) throw new Error('start marker not found');
const endMark = html.indexOf('function applyBasDesign(d, label){');
if (endMark < 0) throw new Error('end marker not found');
if (endMark < startMark) throw new Error('bad order');

const load = f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
const simple = load('example_panel_bas.json');
const completed = load('example_panel_bas_completed.json');
const empty = load('example_panel_empty.json');

const block =
  '/* Contoh panel - salinan example_panel_bas.json (Simple BAS), example_panel_bas_completed.json\n' +
  '   (Complete BAS) dan example_panel_empty.json (Empty Panel) agar tetap jalan offline.\n' +
  '   Regenerasi: node tools/regen_embed.js */\n' +
  'const EXAMPLE_BAS =\n' + JSON.stringify(simple, null, 2) + ';\n' +
  'const EXAMPLE_BAS_COMPLETED =\n' + JSON.stringify(completed, null, 2) + ';\n' +
  'const EXAMPLE_EMPTY =\n' + JSON.stringify(empty, null, 2) + ';\n';

html = html.slice(0, startMark) + block + html.slice(endMark);
fs.writeFileSync(hp, html, 'utf8');
console.log('embed regenerated: simple=' + simple.wires.length + ' wires, completed=' +
  completed.wires.length + ' wires, empty=' + empty.elements.length + ' elements');
