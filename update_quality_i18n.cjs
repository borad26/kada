const fs = require('fs');
const path = require('path');

const data = {
  tr: {
    isoSection: {
      label: "KALİTE YÖNETİM SİSTEMİ",
      heading: "ISO 9001:2015",
      p1: "DQS tarafından onaylanan ISO 9001:2015 sertifikamız, üretim süreçlerimizin uluslararası kalite standartlarını karşıladığının bağımsız bir güvencesidir.",
      p2: "Bu sertifika; hammadde temininden üretime, kalite kontrolden teslimatına kadar her aşamanın sistematik biçimde yönetildiğini belgeler.",
      p3: "Müşterilerimiz her siparişte tutarlı kalite, güvenilir teslimat ve izlenebilir üretim süreci garantisi alır.",
      badgeTitle: "ISO 9001:2015",
      badgeSubtitle: "DQS Certified",
      badgeText: "Uluslararası Geçerli Sertifika"
    },
    testingSection: {
      title: "TEST SÜREÇLERİMİZ",
      pressure: {
        title: "Basınç Testi",
        description: "Her radyatör ünitesi üretim sonrası yüksek basınç testinden geçirilir. Standart çalışma basıncının üzerinde uygulanan test, olası yapısal zayıflıkları teslimat öncesinde tespit eder. Testten geçemeyen hiçbir ürün sevk edilmez.",
        stat: "% 100 Ürün Test Edilir"
      },
      leak: {
        title: "Sızıntı Testi",
        description: "Gelişmiş sızıntı tespit sistemlerimiz mikro düzeydeki kaçakları bile saptar. Her birleşim noktası ve kaynak hattı tek tek kontrol edilir. Sızdırmazlık garantisi tüm ürünlerimiz için standarttır.",
        stat: "Mikron Hassasiyetinde Kontrol"
      },
      thermal: {
        title: "Termal Dayanıklılık Testi",
        description: "Ürünlerimiz aşırı sıcaklık döngülerine tabi tutularak termal genleşme ve dayanıklılık test edilir. Gerçek saha koşullarını simüle eden testler, uzun ömürlü performansı garanti eder.",
        stat: "Gerçek Saha Koşulları Simülasyonu"
      }
    },
    importanceSection: {
      title: "KALİTE NEDEN ÖNEMLİ?",
      stat1: { value: "43+", label: "Yıllık Kalite Deneyimi" },
      stat2: { value: "% 100", label: "Ürün Test Oranı" },
      stat3: { value: "35", label: "Ülkede Güvenilen Kalite" }
    }
  },
  en: {
    isoSection: {
      label: "QUALITY MANAGEMENT SYSTEM",
      heading: "ISO 9001:2015",
      p1: "Our ISO 9001:2015 certification, approved by DQS, is an independent assurance that our production processes meet international quality standards.",
      p2: "This certificate documents that every stage, from raw material procurement to production, quality control, and delivery, is systematically managed.",
      p3: "Our customers receive guaranteed consistent quality, reliable delivery, and a traceable production process with every order.",
      badgeTitle: "ISO 9001:2015",
      badgeSubtitle: "DQS Certified",
      badgeText: "Internationally Valid Certificate"
    },
    testingSection: {
      title: "OUR TESTING PROCESSES",
      pressure: {
        title: "Pressure Testing",
        description: "Every radiator unit undergoes high-pressure testing after production. Conducted above standard operating pressures, this test detects any potential structural weaknesses before delivery. No product is shipped without passing this test.",
        stat: "100% of Products Tested"
      },
      leak: {
        title: "Leak Testing",
        description: "Our advanced leak detection systems identify even micro-level leaks. Every joint and weld line is individually inspected. Guaranteed leak-tightness is a standard for all our products.",
        stat: "Micron-Precision Inspection"
      },
      thermal: {
        title: "Thermal Endurance Testing",
        description: "Our products are subjected to extreme temperature cycles to test thermal expansion and durability. These tests simulate actual field conditions to guarantee long-lasting performance.",
        stat: "Real Field Condition Simulation"
      }
    },
    importanceSection: {
      title: "WHY IS QUALITY IMPORTANT?",
      stat1: { value: "43+", label: "Years of Quality Experience" },
      stat2: { value: "100%", label: "Product Test Rate" },
      stat3: { value: "35", label: "Countries Trust Our Quality" }
    }
  },
  ar: {
    isoSection: {
      label: "نظام إدارة الجودة",
      heading: "ISO 9001:2015",
      p1: "تعد شهادة ISO 9001:2015 المعتمدة من DQS ضمانًا مستقلاً بأن عمليات الإنتاج لدينا تلبي معايير الجودة الدولية.",
      p2: "توثق هذه الشهادة إدارة كل مرحلة بشكل منهجي، بدءًا من شراء المواد الخام وحتى الإنتاج ومراقبة الجودة والتسليم.",
      p3: "يضمن عملاؤنا جودة متسقة وتسليمًا موثوقًا وعملية إنتاج قابلة للتتبع مع كل طلب.",
      badgeTitle: "ISO 9001:2015",
      badgeSubtitle: "DQS Certified",
      badgeText: "شهادة صالحة دولياً"
    },
    testingSection: {
      title: "عمليات الاختبار لدينا",
      pressure: {
        title: "اختبار الضغط",
        description: "تخضع كل وحدة رادياتير لاختبار ضغط عالٍ بعد الإنتاج. يتم إجراء هذا الاختبار فوق ضغوط التشغيل القياسية لاكتشاف أي نقاط ضعف هيكلية محتملة قبل التسليم. لا يتم شحن أي منتج دون اجتياز هذا الاختبار.",
        stat: "يتم اختبار 100٪ من المنتجات"
      },
      leak: {
        title: "اختبار التسرب",
        description: "تحدد أنظمة الكشف عن التسرب المتقدمة لدينا حتى تسربات المستوى الصغير. يتم فحص كل مفصل وخط لحام بشكل فردي. ضمان عدم التسرب هو معيار لجميع منتجاتنا.",
        stat: "فحص دقيق بالميكرون"
      },
      thermal: {
        title: "اختبار التحمل الحراري",
        description: "تخضع منتجاتنا لدورات درجات حرارة قصوى لاختبار التمدد الحراري والمتانة. تحاكي هذه الاختبارات الظروف الميدانية الفعلية لضمان أداء طويل الأمد.",
        stat: "محاكاة ظروف الميدان الحقيقية"
      }
    },
    importanceSection: {
      title: "لماذا الجودة مهمة؟",
      stat1: { value: "43+", label: "سنوات من خبرة الجودة" },
      stat2: { value: "100%", label: "معدل اختبار المنتج" },
      stat3: { value: "35", label: "دولة تثق بجودتنا" }
    }
  }
};

const langs = ['tr', 'en', 'ar'];

for (const lang of langs) {
  const filePath = path.join(__dirname, 'src', 'i18n', `${lang}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  content.quality.isoSection = data[lang].isoSection;
  content.quality.testingSection = data[lang].testingSection;
  content.quality.importanceSection = data[lang].importanceSection;

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
}
console.log('Quality i18n data updated successfully');
