const fs = require('fs');
const path = require('path');

const data = {
  tr: {
    title: "Aradığınız cevabı bulamadınız mı?",
    subtitle: "Bizimle doğrudan iletişime geçin.",
    button: "İletişime Geç →"
  },
  en: {
    title: "Couldn't find the answer you're looking for?",
    subtitle: "Contact us directly.",
    button: "Contact Us →"
  },
  ar: {
    title: "لم تجد الإجابة التي تبحث عنها؟",
    subtitle: "تواصل معنا مباشرة.",
    button: "تواصل معنا →"
  }
};

const langs = ['tr', 'en', 'ar'];

for (const lang of langs) {
  const filePath = path.join(__dirname, 'src', 'i18n', `${lang}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  content.faq.cta = data[lang];

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
}
console.log('FAQ CTA i18n data updated successfully');
