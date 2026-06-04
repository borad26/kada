const fs = require('fs');
const path = require('path');

const data = {
  tr: {
    isoSection: {
      label: "KALİTE YÖNETİM SİSTEMİ",
      heading: "ISO 9001:2015",
      p1: "Türkiye'nin öncü ISO 9001:2015 sertifikalı radyatör üreticisi olarak, DQS tarafından onaylanan sertifikamız, üretim süreçlerimizin uluslararası kalite standartlarını karşıladığının bağımsız bir güvencesidir.",
      p2: "Bu belge, kalite güvenceli radyatör imalatımızda; hammadde temininden üretime, kalite kontrolden teslimatına kadar her aşamanın sistematik biçimde yönetildiğini belgeler.",
      p3: "DQS onaylı üretim yaklaşımımız sayesinde müşterilerimiz her siparişte tutarlı kalite, güvenilir teslimat ve izlenebilir süreç garantisi alır.",
      badgeTitle: "ISO 9001:2015",
      badgeSubtitle: "DQS Certified",
      badgeText: "Uluslararası Geçerli Sertifika"
    },
    faqSection: {
      title: "Sık Sorulan Sorular",
      items: [
        {
          question: "KADA'nın ISO sertifikası hangi kapsamı içeriyor?",
          answer: "KADA Oto Radyatör, DQS tarafından onaylanan ISO 9001:2015 Kalite Yönetim Sistemi sertifikasına sahiptir. Bu sertifika tüm üretim süreçlerini kapsar."
        },
        {
          question: "Ürünleriniz hangi testlerden geçiyor?",
          answer: "Her ürün basınç testi, sızıntı testi ve termal dayanıklılık testinden geçerek sevk edilir."
        },
        {
          question: "Kalite belgelerinizi nasıl doğrulayabilirim?",
          answer: "ISO 9001:2015 sertifikamız DQS tarafından verilmiş olup talep halinde belge kopyası temin edilebilir."
        }
      ]
    }
  },
  en: {
    isoSection: {
      label: "QUALITY MANAGEMENT SYSTEM",
      heading: "ISO 9001:2015",
      p1: "As Turkey's leading ISO 9001:2015 certified radiator manufacturer, our certificate approved by DQS is an independent assurance that our production processes meet international quality standards.",
      p2: "This document certifies that in our quality-assured radiator manufacturing, every stage from raw material procurement to production, quality control, and delivery is systematically managed.",
      p3: "Thanks to our DQS-approved production approach, our customers receive guaranteed consistent quality, reliable delivery, and a traceable process with every order.",
      badgeTitle: "ISO 9001:2015",
      badgeSubtitle: "DQS Certified",
      badgeText: "Internationally Valid Certificate"
    },
    faqSection: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What is the scope of KADA's ISO certification?",
          answer: "KADA Auto Radiator holds the ISO 9001:2015 Quality Management System certificate approved by DQS. This certificate covers all our production processes."
        },
        {
          question: "What tests do your products undergo?",
          answer: "Every product is shipped after passing pressure testing, leak testing, and thermal endurance testing."
        },
        {
          question: "How can I verify your quality certificates?",
          answer: "Our ISO 9001:2015 certificate is issued by DQS, and a copy of the document can be provided upon request."
        }
      ]
    }
  },
  ar: {
    isoSection: {
      label: "نظام إدارة الجودة",
      heading: "ISO 9001:2015",
      p1: "بصفتنا الشركة الرائدة المصنعة للمشعات الحاصلة على شهادة ISO 9001:2015 في تركيا، فإن شهادتنا المعتمدة من DQS هي ضمان مستقل بأن عمليات الإنتاج لدينا تلبي معايير الجودة الدولية.",
      p2: "توثق هذه الشهادة أنه في تصنيع المشعات المضمونة الجودة لدينا، يتم إدارة كل مرحلة بشكل منهجي من شراء المواد الخام إلى الإنتاج ومراقبة الجودة والتسليم.",
      p3: "بفضل نهج الإنتاج المعتمد من DQS لدينا، يضمن عملاؤنا جودة متسقة وتسليمًا موثوقًا وعملية قابلة للتتبع مع كل طلب.",
      badgeTitle: "ISO 9001:2015",
      badgeSubtitle: "DQS Certified",
      badgeText: "شهادة صالحة دولياً"
    },
    faqSection: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "ما هو نطاق شهادة ISO الخاصة بشركة كادا؟",
          answer: "تحمل شركة كادا لأجهزة التبريد شهادة نظام إدارة الجودة ISO 9001:2015 المعتمدة من DQS. تغطي هذه الشهادة جميع عمليات الإنتاج لدينا."
        },
        {
          question: "ما الاختبارات التي تخضع لها منتجاتكم؟",
          answer: "يتم شحن كل منتج بعد اجتيازه اختبار الضغط، واختبار التسرب، واختبار التحمل الحراري."
        },
        {
          question: "كيف يمكنني التحقق من شهادات الجودة الخاصة بكم؟",
          answer: "تم إصدار شهادة ISO 9001:2015 الخاصة بنا بواسطة DQS، ويمكن تقديم نسخة من المستند عند الطلب."
        }
      ]
    }
  }
};

const langs = ['tr', 'en', 'ar'];

for (const lang of langs) {
  const filePath = path.join(__dirname, 'src', 'i18n', `${lang}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  content.quality.isoSection = data[lang].isoSection;
  content.quality.faqSection = data[lang].faqSection;

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
}
console.log('Quality i18n data with FAQ updated successfully');
