const fs = require('fs');

const companies = JSON.parse(fs.readFileSync('companies.json', 'utf8'));

const getCategory = (name) => {
  const n = name.toLowerCase();
  if (n.includes('inşaat')) return { tr: 'İnşaat', en: 'Construction', ar: 'البناء' };
  if (n.includes('madencilik') || n.includes('linyit')) return { tr: 'Madencilik', en: 'Mining', ar: 'التعدين' };
  if (n.includes('otomotiv') || n.includes('traktör') || n.includes('motor') || n.includes('araç')) return { tr: 'Otomotiv', en: 'Automotive', ar: 'السيارات' };
  if (n.includes('gıda') || n.includes('çimento') || n.includes('tekstil') || n.includes('metalurji') || n.includes('sanayi') || n.includes('fabrika') || n.includes('üretim')) return { tr: 'Endüstriyel', en: 'Industrial', ar: 'صناعي' };
  if (n.includes('müdürlüğü') || n.includes('dhmi') || n.includes('i̇ett') || n.includes('i̇ski') || n.includes('karayolları')) return { tr: 'Kamu Kurumları', en: 'Public Institutions', ar: 'مؤسسات عامة' };
  if (n.includes('havalimanı') || n.includes('seyahat') || n.includes('nakliyat') || n.includes('ulaşım') || n.includes('turizm') || n.includes('denizcilik')) return { tr: 'Lojistik & Ulaşım', en: 'Logistics & Transport', ar: 'الخدمات اللوجستية والنقل' };
  return { tr: 'Kurumsal Müşteriler', en: 'Corporate Clients', ar: 'عملاء الشركات' };
};

const getLocation = (name) => {
  if (name.includes('Polonya')) return { tr: 'Polonya', en: 'Poland', ar: 'بولندا' };
  return { tr: 'Türkiye', en: 'Turkey', ar: 'تركيا' };
};

const cleanNameEN = (name) => {
  return name
    .replace(/Aş\./g, 'Inc.')
    .replace(/A\.Ş\./g, 'Inc.')
    .replace(/AŞ\./g, 'Inc.')
    .replace(/Ltd\.Şti\./g, 'Co. Ltd.')
    .replace(/San\.Tic\./g, 'Ind. Trade')
    .replace(/San\. Ve Tic\./g, 'Ind. and Trade')
    .replace(/San\. ve Tic\./g, 'Ind. and Trade')
    .replace(/Ticaret/g, 'Trade')
    .replace(/Sanayi/g, 'Industry')
    .replace(/Bölge Müdürlüğü/g, 'Regional Directorate')
    .replace(/İnşaat/g, 'Construction')
    .replace(/Gıda/g, 'Food')
    .replace(/Çimento/g, 'Cement')
    .replace(/Madencilik/g, 'Mining');
};

let tsContent = '';

// TR
tsContent += 'export const referencesTR = [\n';
companies.forEach(name => {
  const cat = getCategory(name);
  const loc = getLocation(name);
  tsContent += `  { name: ${JSON.stringify(name)}, category: "${cat.tr}", location: "${loc.tr}" },\n`;
});
tsContent += '];\n\n';

// EN
tsContent += 'export const referencesEN = [\n';
companies.forEach(name => {
  const cat = getCategory(name);
  const loc = getLocation(name);
  tsContent += `  { name: ${JSON.stringify(cleanNameEN(name))}, category: "${cat.en}", location: "${loc.en}" },\n`;
});
tsContent += '];\n\n';

// AR
tsContent += 'export const referencesAR = [\n';
companies.forEach(name => {
  const cat = getCategory(name);
  const loc = getLocation(name);
  // Just use English name for AR if not fully translating everything, it's better than Turkish for international.
  tsContent += `  { name: ${JSON.stringify(cleanNameEN(name))}, category: "${cat.ar}", location: "${loc.ar}" },\n`;
});
tsContent += '];\n';

fs.writeFileSync('src/data/references.ts', tsContent);
console.log('Updated src/data/references.ts with ' + companies.length + ' entries.');
