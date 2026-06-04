const fs = require('fs');
const path = require('path');

const seoData = {
  tr: {
    site: {
      pageTitle: "KADA Oto Radyatör | Radyatör Üreticisi",
      pageDescription: "1983'ten bu yana Türkiye'nin güvenilir radyatör üreticisi. 35 ülkeye ihracat, 500+ bayi. Hemen teklif alın."
    },
    products: {
      pageTitle: "Ürünlerimiz | KADA Oto Radyatör",
      pageDescription: "Radyatör petekleri, intercooler, yağ soğutucuları. Binek, ticari, zirai ve endüstriyel araçlar için soğutma çözümleri. Teklif alın."
    },
    about: {
      pageTitle: "Hakkımızda | KADA Oto Radyatör",
      pageDescription: "1983'ten İstanbul'da üretim. 43 yıl tecrübe, ISO 9001:2015 sertifikası, 7.000 m² tesis. Türkiye'nin önde gelen radyatör üreticisi."
    },
    quality: {
      pageTitle: "Kalite & Sertifikalar | KADA Radyatör",
      pageDescription: "ISO 9001:2015 sertifikalı üretim. Her ürün basınç, sızıntı ve termal testlerden geçer. Uluslararası kalite standartları."
    },
    network: {
      pageTitle: "Satış Ağı & İhracat | KADA Radyatör",
      pageDescription: "Türkiye'de 500+ yetkili bayi, 35 ülkeye ihracat. KADA'nın global ağıyla her ihtiyacınıza yakın çözüm."
    },
    technicalData: {
      pageTitle: "Teknik Veriler | KADA Oto Radyatör",
      pageDescription: "KADA radyatör ürünlerinin teknik özellikleri, malzeme bilgileri ve üretim standartları. Detaylı teknik dokümantasyon."
    },
    faq: {
      pageTitle: "Sık Sorulan Sorular | KADA Radyatör",
      pageDescription: "Radyatör bakımı, değişimi ve KADA ürünleri hakkında en çok sorulan sorular. Hızlı cevaplar için SSS sayfamızı inceleyin."
    },
    contact: {
      pageTitle: "İletişim & Teklif | KADA Oto Radyatör",
      pageDescription: "KADA ile iletişime geçin. Teklif almak, ürün bilgisi edinmek veya bayi başvurusu için formu doldurun. Hızlı dönüş garantisi."
    }
  },
  en: {
    site: {
      pageTitle: "KADA Auto Radiator | Manufacturer Since 1983",
      pageDescription: "Turkish radiator manufacturer since 1983. Exporting to 35 countries, 500+ dealers. Request a quote today."
    },
    products: {
      pageTitle: "Products | KADA Auto Radiator",
      pageDescription: "Radiator cores, intercoolers, oil coolers and more. Cooling solutions for passenger, commercial, agricultural and industrial vehicles."
    },
    about: {
      pageTitle: "About Us | KADA Auto Radiator",
      pageDescription: "Manufacturing in Istanbul since 1983. 43 years experience, ISO 9001:2015 certified, 7,000 m² facility. Turkey's leading radiator producer."
    },
    quality: {
      pageTitle: "Quality & Certifications | KADA Radiator",
      pageDescription: "ISO 9001:2015 certified production. Every product passes pressure, leak and thermal testing to meet international quality standards."
    },
    network: {
      pageTitle: "Sales Network & Export | KADA Radiator",
      pageDescription: "500+ authorized dealers in Turkey, exporting to 35 countries. KADA's global network delivers reliable cooling solutions worldwide."
    },
    technicalData: {
      pageTitle: "Technical Data | KADA Auto Radiator",
      pageDescription: "Technical specifications, material data and production standards for KADA radiator products. Detailed technical documentation."
    },
    faq: {
      pageTitle: "FAQ | KADA Auto Radiator",
      pageDescription: "Answers to common questions about radiator maintenance, replacement and KADA products. Find quick answers in our FAQ section."
    },
    contact: {
      pageTitle: "Contact & Quote | KADA Auto Radiator",
      pageDescription: "Get in touch with KADA Auto Radiator. Fill out the form to request a quote, get product info or apply to become an authorized dealer."
    }
  },
  ar: {
    site: {
      pageTitle: "كادا للرادياتيرات | مصنع منذ 1983",
      pageDescription: "مصنع رادياتيرات تركي منذ 1983. نصدّر لـ35 دولة مع 500+ وكيل. احصل على عرض سعر الآن."
    },
    products: {
      pageTitle: "المنتجات | كادا للرادياتيرات",
      pageDescription: "أنوية رادياتيرات، مبردات متوسطة، مبردات زيت والمزيد. حلول تبريد للمركبات الخاصة والتجارية والزراعية والصناعية."
    },
    about: {
      pageTitle: "من نحن | كادا للرادياتيرات",
      pageDescription: "نصنع في إسطنبول منذ 1983. خبرة 43 عامًا، شهادة ISO 9001:2015، منشأة 7000 م². من أبرز مصنّعي الرادياتيرات في تركيا."
    },
    quality: {
      pageTitle: "الجودة والشهادات | كادا للرادياتيرات",
      pageDescription: "إنتاج معتمد بـISO 9001:2015. كل منتج يخضع لاختبارات الضغط والتسرب والحرارة وفق المعايير الدولية."
    },
    network: {
      pageTitle: "شبكة المبيعات والتصدير | كادا",
      pageDescription: "500+ وكيل معتمد في تركيا وتصدير لـ35 دولة. شبكة كادا العالمية توفر حلول تبريد موثوقة في كل مكان."
    },
    technicalData: {
      pageTitle: "البيانات التقنية | كادا للرادياتيرات",
      pageDescription: "المواصفات التقنية ومعلومات المواد ومعايير الإنتاج لمنتجات كادا. توثيق تقني مفصّل لجميع المنتجات."
    },
    faq: {
      pageTitle: "الأسئلة الشائعة | كادا للرادياتيرات",
      pageDescription: "إجابات على أسئلة شائعة حول صيانة الرادياتير واستبداله ومنتجات كادا. ابحث عن إجابتك في قسم الأسئلة الشائعة."
    },
    contact: {
      pageTitle: "تواصل معنا | كادا للرادياتيرات",
      pageDescription: "تواصل مع كادا للرادياتيرات. املأ النموذج للحصول على عرض سعر أو معلومات المنتج أو التقدم لتصبح وكيلًا معتمدًا."
    }
  }
};

const langs = ['tr', 'en', 'ar'];

for (const lang of langs) {
  const filePath = path.join(__dirname, 'src', 'i18n', `${lang}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  for (const [key, value] of Object.entries(seoData[lang])) {
    if (content[key]) {
      content[key].pageTitle = value.pageTitle;
      content[key].pageDescription = value.pageDescription;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
}
console.log('SEO data updated successfully');
