const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/[lang]');
const files = [
  'about.astro',
  'quality.astro',
  'network.astro',
  'technical-data.astro'
];

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace("import QuoteForm from '../../components/QuoteForm.astro';", "import SimpleCTA from '../../components/SimpleCTA.astro';");
  content = content.replace(/<QuoteForm locale=\{locale\} \/>/g, '<SimpleCTA locale={locale} />');

  fs.writeFileSync(filePath, content, 'utf8');
}

// Handle faq.astro specifically (remove QuoteForm)
const faqPath = path.join(dir, 'faq.astro');
let faqContent = fs.readFileSync(faqPath, 'utf8');
faqContent = faqContent.replace("import QuoteForm from '../../components/QuoteForm.astro';\n", "");
faqContent = faqContent.replace("import QuoteForm from '../../components/QuoteForm.astro';\r\n", "");
faqContent = faqContent.replace(/<!-- Quote CTA -->[\r\n\s]*<QuoteForm locale=\{locale\} \/>/, "");
fs.writeFileSync(faqPath, faqContent, 'utf8');

console.log('QuoteForm replaced with SimpleCTA in pages successfully');
