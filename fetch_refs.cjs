const fs = require('fs');

async function run() {
  const res = await fetch('https://www.kadaradiator.com/tr/referanslar/');
  const html = await res.text();
  
  const regex = /<td[^>]*>&#8211;\s*(.*?)<\/td>/g;
  let match;
  const companies = [];
  
  while ((match = regex.exec(html)) !== null) {
    let name = match[1].trim();
    // Clean up
    name = name.replace(/&amp;/g, '&');
    if (name && !companies.includes(name)) {
      companies.push(name);
    }
  }
  
  console.log(`Found ${companies.length} companies.`);
  fs.writeFileSync('companies.json', JSON.stringify(companies, null, 2));
}

run();
