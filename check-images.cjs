const fs = require('fs');
const path = require('path');

const data = fs.readFileSync('src/data/products.ts', 'utf-8');
const images = [...data.matchAll(/images:\s*\[([^\]]+)\]/g)]
  .flatMap(m => m[1].match(/"([^"]+)"/g)?.map(s => s.slice(1, -1)) || []);

const missing = images.filter(img => !fs.existsSync(path.join('public', img)));

console.log('Missing files:');
missing.forEach(m => console.log(m));
