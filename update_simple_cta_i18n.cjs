const fs = require('fs');
const path = require('path');

const data = {
  tr: {
    title: "Teklif almak ister misiniz?",
    subtitle: "Formumuzu doldurun, size hemen dönelim.",
    button: "Teklif Al →"
  },
  en: {
    title: "Would you like to get a quote?",
    subtitle: "Fill out our form and we'll get right back to you.",
    button: "Get a Quote →"
  },
  ar: {
    title: "هل ترغب في الحصول على عرض أسعار؟",
    subtitle: "املأ النموذج وسنرد عليك فوراً.",
    button: "احصل على عرض أسعار →"
  }
};

const langs = ['tr', 'en', 'ar'];

for (const lang of langs) {
  const filePath = path.join(__dirname, 'src', 'i18n', `${lang}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  content.common = content.common || {};
  content.common.simpleCta = data[lang];

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
}
console.log('Simple CTA i18n data updated successfully');
