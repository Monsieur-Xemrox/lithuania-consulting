"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'tr';

type Translations = {
  [key: string]: {
    en: string;
    tr: string;
  };
};

// Define all translations here
const translations: Translations = {
  // WordPress Integration
  "wordpressIntegrationTitle": {
    en: "WordPress Integration Guide",
    tr: "WordPress Entegrasyon Rehberi"
  },
  "wordpressIntegrationDesc": {
    en: "Learn how to integrate your Next.js application with WordPress using different strategies",
    tr: "Next.js uygulamanızı WordPress ile entegre etmek için farklı stratejileri öğrenin"
  },
  
  // Education Services
  "educationServicesTitle": {
    en: "Education Services in Lithuania",
    tr: "Litvanya'da Eğitim Hizmetleri"
  },
  "educationServicesDesc": {
    en: "Comprehensive support for international students seeking quality education in Lithuanian universities",
    tr: "Litvanya üniversitelerinde kaliteli eğitim arayan uluslararası öğrenciler için kapsamlı destek"
  },
  "universityAdmissions": {
    en: "University Admissions",
    tr: "Üniversite Kabulleri"
  },
  "languagePrograms": {
    en: "Language Programs",
    tr: "Dil Programları"
  },
  "studentVisa": {
    en: "Student Visa Support",
    tr: "Öğrenci Vizesi Desteği"
  },
  "staticExportMethod": {
    en: "Static Export Method",
    tr: "Statik Dışa Aktarma Yöntemi"
  },
  "iframeIntegration": {
    en: "iFrame Integration",
    tr: "iFrame Entegrasyonu"
  },
  "headlessWordPress": {
    en: "Headless WordPress",
    tr: "Başsız WordPress"
  },
  "prerequisites": {
    en: "Prerequisites",
    tr: "Ön Koşullar"
  },
  "configureNextjs": {
    en: "Configure Next.js for static export",
    tr: "Statik dışa aktarma için Next.js'i yapılandırın"
  },
  // Header
  "aboutUs": {
    en: "About Us",
    tr: "Hakkımızda"
  },
  "ourServices": {
    en: "Our Services",
    tr: "Hizmetlerimiz"
  },
  "howItWorks": {
    en: "How It Works",
    tr: "Nasıl Çalışır"
  },
  "whyLithuania": {
    en: "Why Lithuania?",
    tr: "Neden Litvanya?"
  },
  "faq": {
    en: "FAQ",
    tr: "SSS"
  },
  "contact": {
    en: "Contact",
    tr: "İletişim"
  },
  
  // Hero Section
  "heroTitle": {
    en: "Establish Your Company in Lithuania",
    tr: "Litvanya'da Şirketinizi Kurun"
  },
  "heroSubtitle": {
    en: "Take the First Step Toward a Strong Future",
    tr: "Güçlü Bir Geleceğe Doğru İlk Adımı Atın"
  },
  "heroDescription": {
    en: "Your trusted consultant for expansion from Turkey to Lithuania. Fast, legal, and secure company formation and investment solutions.",
    tr: "Türkiye'den Litvanya'ya genişleme için güvenilir danışmanınız. Hızlı, yasal ve güvenli şirket kurma ve yatırım çözümleri."
  },
  "requestConsultation": {
    en: "Request a Free Consultation",
    tr: "Ücretsiz Danışmanlık Talep Edin"
  },
  
  // About Us
  "aboutTitle": {
    en: "Rooted Expertise, Modern Solutions",
    tr: "Köklü Uzmanlık, Modern Çözümler"
  },
  "aboutText1": {
    en: "Litu Consulting was founded with the vision of building business and investment bridges between Turkey and Lithuania.",
    tr: "Litu Consulting, Türkiye ve Litvanya arasında iş ve yatırım köprüleri kurma vizyonuyla kuruldu."
  },
  "aboutText2": {
    en: "Our team deeply understands Lithuania's legal framework, business culture, and entrepreneurial dynamics. We empower Turkish entrepreneurs to step into the European market on a solid and reliable foundation.",
    tr: "Ekibimiz, Litvanya'nın yasal çerçevesini, iş kültürünü ve girişimcilik dinamiklerini derinden anlıyor. Türk girişimcilerin Avrupa pazarına sağlam ve güvenilir bir temel üzerinde adım atmasını sağlıyoruz."
  },
  "aboutText3": {
    en: "Our mission is to add value through fast, transparent, and sustainable solutions.",
    tr: "Misyonumuz, hızlı, şeffaf ve sürdürülebilir çözümlerle değer katmaktır."
  },
  
  // Services
  "servicesTitle": {
    en: "Everything You Need to Start Doing Business in Lithuania",
    tr: "Litvanya'da İş Yapmaya Başlamak İçin İhtiyacınız Olan Her Şey"
  },
  "servicesSubtitle": {
    en: "Comprehensive Turnkey Solutions",
    tr: "Kapsamlı Anahtar Teslim Çözümler"
  },
  "companyFormation": {
    en: "Company Formation",
    tr: "Şirket Kurulumu"
  },
  "companyFormationDesc": {
    en: "Incorporation of UAB (Private Limited Company), tax registration, and opening of a corporate bank account.",
    tr: "UAB (Limited Şirket) kurulumu, vergi kaydı ve kurumsal banka hesabı açılması."
  },
  "residencePermit": {
    en: "Residence Permit Applications",
    tr: "Oturma İzni Başvuruları"
  },
  "residencePermitDesc": {
    en: "Assistance with residence permits for company owners and family reunification processes.",
    tr: "Şirket sahipleri için oturma izni ve aile birleşimi süreçlerinde destek."
  },
  "accounting": {
    en: "Accounting and Tax Advisory",
    tr: "Muhasebe ve Vergi Danışmanlığı"
  },
  "accountingDesc": {
    en: "Ongoing bookkeeping, VAT declarations, and annual reporting support.",
    tr: "Sürekli muhasebe, KDV beyannameleri ve yıllık raporlama desteği."
  },
  "investment": {
    en: "Investment Advisory",
    tr: "Yatırım Danışmanlığı"
  },
  "investmentDesc": {
    en: "Guidance on business and investment opportunities in Lithuania.",
    tr: "Litvanya'daki iş ve yatırım fırsatları hakkında rehberlik."
  },
  "office": {
    en: "Office and Registered Address Services",
    tr: "Ofis ve Kayıtlı Adres Hizmetleri"
  },
  "officeDesc": {
    en: "Provision of legal registered office addresses, virtual offices, and physical office solutions.",
    tr: "Yasal kayıtlı ofis adresleri, sanal ofisler ve fiziksel ofis çözümleri sunumu."
  },
  "business": {
    en: "Business Development Support",
    tr: "İş Geliştirme Desteği"
  },
  "businessDesc": {
    en: "Local market research, networking support, and sector-specific analysis.",
    tr: "Yerel pazar araştırması, networking desteği ve sektöre özel analizler."
  },
  
  // How It Works
  "processTitle": {
    en: "Your Company Established in Just 3 Steps",
    tr: "Sadece 3 Adımda Şirketinizi Kurun"
  },
  "step1": {
    en: "Needs Analysis and Consultation",
    tr: "İhtiyaç Analizi ve Danışmanlık"
  },
  "step1Desc": {
    en: "We help you determine the most suitable corporate structure.",
    tr: "En uygun kurumsal yapıyı belirlemenize yardımcı oluyoruz."
  },
  "step2": {
    en: "Official Applications and Registration",
    tr: "Resmi Başvurular ve Kayıt"
  },
  "step2Desc": {
    en: "Document preparation, notary approvals, registration, and tax filings.",
    tr: "Belge hazırlama, noter onayları, kayıt ve vergi bildirimleri."
  },
  "step3": {
    en: "Operational Launch",
    tr: "Operasyonel Başlangıç"
  },
  "step3Desc": {
    en: "Bank account opening, residence permit applications, and accounting system setup.",
    tr: "Banka hesabı açma, oturma izni başvuruları ve muhasebe sistemi kurulumu."
  },
  "processNote": {
    en: "Transparent updates at every step. Our principles are speed and full transparency.",
    tr: "Her adımda şeffaf güncellemeler. Prensiplerimiz hız ve tam şeffaflıktır."
  },
  
  // Why Lithuania
  "whyTitle": {
    en: "Lithuania: Europe's Emerging Investment Hub",
    tr: "Litvanya: Avrupa'nın Yükselen Yatırım Merkezi"
  },
  "whyPoint1": {
    en: "European Union and Schengen Area member.",
    tr: "Avrupa Birliği ve Schengen Bölgesi üyesi."
  },
  "whyPoint2": {
    en: "Low corporate tax rate (15%).",
    tr: "Düşük kurumlar vergisi oranı (%15)."
  },
  "whyPoint3": {
    en: "Open and supportive economy for foreign investors.",
    tr: "Yabancı yatırımcılar için açık ve destekleyici ekonomi."
  },
  "whyPoint4": {
    en: "Strategic location bridging Western and Eastern Europe.",
    tr: "Batı ve Doğu Avrupa'yı birleştiren stratejik konum."
  },
  "whyPoint5": {
    en: "Fast and fully digitalized administrative procedures.",
    tr: "Hızlı ve tamamen dijitalleştirilmiş idari prosedürler."
  },
  
  // FAQ
  "faqTitle": {
    en: "Frequently Asked Questions",
    tr: "Sıkça Sorulan Sorular"
  },
  "faq1": {
    en: "Is there a minimum capital requirement to establish a company in Lithuania?",
    tr: "Litvanya'da şirket kurmak için minimum sermaye gereksinimi var mı?"
  },
  "faq1Answer": {
    en: "Yes, for a UAB (Private Limited Company), the minimum capital requirement is €2,500. This amount must be deposited in a corporate bank account as part of the registration process.",
    tr: "Evet, bir UAB (Limited Şirket) için minimum sermaye gereksinimi 2.500 €'dur. Bu tutar, kayıt sürecinin bir parçası olarak kurumsal bir banka hesabına yatırılmalıdır."
  },
  "faq2": {
    en: "Can I obtain a residence permit after establishing my company?",
    tr: "Şirketimi kurduktan sonra oturma izni alabilir miyim?"
  },
  "faq2Answer": {
    en: "Yes, as a business owner who has established a company in Lithuania, you can apply for a temporary residence permit. This typically requires proving that your business creates value for Lithuania's economic and social development.",
    tr: "Evet, Litvanya'da şirket kurmuş bir iş sahibi olarak geçici oturma izni başvurusunda bulunabilirsiniz. Bu genellikle işletmenizin Litvanya'nın ekonomik ve sosyal gelişimine değer kattığını kanıtlamanızı gerektirir."
  },
  "faq3": {
    en: "How long does the company formation process take on average?",
    tr: "Şirket kurulum süreci ortalama ne kadar sürer?"
  },
  "faq3Answer": {
    en: "The complete process typically takes 2-3 weeks. This includes document preparation, notary appointments, company registration, and bank account opening. We ensure the process is as efficient as possible.",
    tr: "Tüm süreç genellikle 2-3 hafta sürer. Bu, belge hazırlama, noter randevuları, şirket kaydı ve banka hesabı açma işlemlerini içerir. Sürecin mümkün olduğunca verimli olmasını sağlıyoruz."
  },
  "faq4": {
    en: "Can I manage my Lithuanian company from Turkey?",
    tr: "Litvanya'daki şirketimi Türkiye'den yönetebilir miyim?"
  },
  "faq4Answer": {
    en: "Yes, you can manage many aspects of your business remotely. However, having a local presence is advantageous for certain operations and residence permit requirements. We offer virtual office services to help maintain your Lithuanian business presence while you're abroad.",
    tr: "Evet, işletmenizin birçok yönünü uzaktan yönetebilirsiniz. Ancak, belirli operasyonlar ve oturma izni gereksinimleri için yerel bir varlığa sahip olmak avantajlıdır. Yurtdışındayken Litvanya'daki iş varlığınızı sürdürmenize yardımcı olmak için sanal ofis hizmetleri sunuyoruz."
  },
  "faq5": {
    en: "Which sectors offer the best investment opportunities in Lithuania?",
    tr: "Litvanya'da hangi sektörler en iyi yatırım fırsatlarını sunuyor?"
  },
  "faq5Answer": {
    en: "Lithuania offers strong opportunities in information technology, fintech, manufacturing, renewable energy, biotechnology, and logistics. The country has specific incentives for innovation and R&D activities, making these sectors particularly attractive.",
    tr: "Litvanya, bilgi teknolojileri, fintech, üretim, yenilenebilir enerji, biyoteknoloji ve lojistik alanlarında güçlü fırsatlar sunmaktadır. Ülke, inovasyon ve Ar-Ge faaliyetleri için özel teşviklere sahiptir, bu da bu sektörleri özellikle çekici kılmaktadır."
  },
  
  // Contact
  "contactTitle": {
    en: "Get in Touch. Let's Start Together.",
    tr: "İletişime Geçin. Birlikte Başlayalım."
  },
  "contactSubtitle": {
    en: "Request a free consultation today and take the first step towards expanding your business to Lithuania.",
    tr: "Bugün ücretsiz bir danışmanlık talep edin ve işinizi Litvanya'ya genişletme yolunda ilk adımı atın."
  },
  "fullName": {
    en: "Full Name",
    tr: "Ad Soyad"
  },
  "email": {
    en: "Email Address",
    tr: "E-posta Adresi"
  },
  "phone": {
    en: "Phone Number",
    tr: "Telefon Numarası"
  },
  "message": {
    en: "Your Message",
    tr: "Mesajınız"
  },
  "submit": {
    en: "Request a Free Consultation",
    tr: "Ücretsiz Danışmanlık Talep Et"
  },
  "contactInfo": {
    en: "Contact Information",
    tr: "İletişim Bilgileri"
  },
  "lithuaniaOffice": {
    en: "Lithuania Office",
    tr: "Litvanya Ofisi"
  },
  "turkeyOffice": {
    en: "Turkey Representation",
    tr: "Türkiye Temsilciliği"
  },
  "phoneLabel": {
    en: "Phone",
    tr: "Telefon"
  },
  "emailLabel": {
    en: "Email",
    tr: "E-posta"
  },
  "followUs": {
    en: "Follow Us",
    tr: "Bizi Takip Edin"
  },
  
  // Footer
  "navigation": {
    en: "Navigation",
    tr: "Navigasyon"
  },
  "legal": {
    en: "Legal",
    tr: "Yasal"
  },
  "privacyPolicy": {
    en: "Privacy Policy",
    tr: "Gizlilik Politikası"
  },
  "termsOfService": {
    en: "Terms of Service",
    tr: "Hizmet Şartları"
  },
  "copyright": {
    en: "© {year} Litu Consulting. All rights reserved.",
    tr: "© {year} Litu Consulting. Tüm hakları saklıdır."
  },
  
  // Form Validation
  "nameRequired": {
    en: "Full name is required",
    tr: "Ad soyad gereklidir"
  },
  "emailRequired": {
    en: "Email is required",
    tr: "E-posta gereklidir"
  },
  "validEmail": {
    en: "Please enter a valid email address",
    tr: "Lütfen geçerli bir e-posta adresi girin"
  },
  "messageRequired": {
    en: "Message is required",
    tr: "Mesaj gereklidir"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
