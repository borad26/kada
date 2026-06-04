const fs = require('fs');
const path = require('path');

const data = fs.readFileSync('src/data/products.ts', 'utf-8');
const images = [...data.matchAll(/images:\s*\[([^\]]+)\]/g)]
  .flatMap(m => m[1].match(/"([^"]+)"/g)?.map(s => s.slice(1, -1)) || []);

const missing = images.filter(img => !fs.existsSync(path.join('public', img)));

function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, '');
}

missing.forEach(missingImg => {
  const dir = path.join('public', path.dirname(missingImg));
  const expectedName = path.basename(missingImg);
  if (!fs.existsSync(dir)) {
    console.log(`Dir not found: ${dir}`);
    return;
  }
  const filesInDir = fs.readdirSync(dir);
  
  const normExpected = normalize(expectedName);
  let bestMatch = null;
  
  for (const file of filesInDir) {
    if (normalize(file) === normExpected) {
      bestMatch = file;
      break;
    }
  }
  
  // Try partial match if no exact normalized match
  if (!bestMatch) {
      for (const file of filesInDir) {
          if (normalize(file).includes(normExpected.slice(0, 10)) || normExpected.includes(normalize(file).slice(0, 10))) {
              bestMatch = file;
              break;
          }
      }
  }
  
  if (bestMatch) {
    const oldPath = path.join(dir, bestMatch);
    const newPath = path.join(dir, expectedName);
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${bestMatch} -> ${expectedName}`);
  } else {
    console.log(`Could not find match for ${missingImg} in ${dir}`);
  }
});
