const fs = require('fs');
const path = require('path');

const langs = ['tr', 'en', 'ar'];
const address = "15 Temmuz, 1438. Sk. No:28, 34212 Bağcılar/İstanbul";

for (const lang of langs) {
  const filePath = path.join(__dirname, 'src', 'i18n', `${lang}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (content.footer) {
    content.footer.address = address;
  }
  if (content.contact && content.contact.info) {
    content.contact.info.addressValue = address;
  }

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
}
console.log('Address data updated successfully');
