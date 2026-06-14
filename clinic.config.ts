export const clinicConfig = {
  // Identity
  name: {
    fr: "Dr. Amine Marbouh",
    ar: "د. أمين مربوح",
  },
  clinicName: {
    fr: "Dr. Amine Marbouh",
    ar: "د. أمين مربوح"
  },
  specialty: {
    fr: "Dentiste & Orthodontiste",
    ar: " طبيب وجراح أسنان ",
  },

  // Contact
  phone: "+212 532-002351",
  whatsapp: "+212652150599",
  email: "contact@centredentaire-marbouh.ma",
  formspreeEndpoint: "https://formspree.io/f/mlgkgzgg",

  // Location
  address: {
    fr: "38 Bd Mohamed V, Rés. Salma II, 3ème Étage N°12, Fès 30000",
    ar: "38 شارع محمد الخامس، رز. سلمى 2، الطابق 3، رقم 12، فاس 30000",
  },
  neighborhood: {
    fr: "À côté d'Auderby, Ville Nouvelle, Fès",
    ar: "بجانب أودربي، المدينة الجديدة، فاس",
  },
  googleMapsUrl: "https://www.google.com/maps/place/Dr.+Marbouh+Amine/@34.0349796,-4.9973869,942m/data=!3m1!1e3!4m16!1m9!3m8!1s0xd9f8b9dc6d79b37:0xbe149fa93faee04b!2sDr.+Marbouh+Amine!8m2!3d34.0349796!4d-4.9973869!9m1!1b1!16s%2Fg%2F11kfc2v0wn!3m5!1s0xd9f8b9dc6d79b37:0xbe149fa93faee04b!8m2!3d34.0349796!4d-4.9973869!16s%2Fg%2F11kfc2v0wn?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4128.628092729707!2d-4.9973869!3d34.0349796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b9dc6d79b37%3A0xbe149fa93faee04b!2sDr.%20Marbouh%20Amine!5e1!3m2!1sen!2sma!4v1780745054927!5m2!1sen!2sma",

  // Since
  since: "2019",

  tagline: {
    fr: "Des soins attentionnés. Des résultats exceptionnels.",
    ar: "رعاية متميزة. نتائج استثنائية.",
  },

  // Stats
  stats: {
    fr: [
      { value: "+500", label: "Interventions réalisées" },
      { value: "+1000", label: "Patients satisfaits" },
      { value: "+200", label: "Interventions annuelles" },
    ],
    ar: [
      { value: "+500", label: "العمليات المجراة" },
      { value: "+1000", label: "مرضى راضون" },
      { value: "+200", label: "العمليات السنوية" },
    ],
  },

  // Hours
  hours: {
    fr: [
      { days: "Lun & Mer", time: "09:00 – 16:30" },
      { days: "Mar, Jeu & Ven", time: "09:00 – 13:00 / 15:00 – 18:00" },
      { days: "Samedi", time: "09:00 – 13:30" },
      { days: "Dimanche", time: "Fermé" },
    ],
    ar: [
      { days: "الإثنين والأربعاء", time: "09:00 – 16:30" },
      { days: "الثلاثاء والخميس والجمعة", time: "09:00 – 13:00 / 15:00 – 18:00" },
      { days: "السبت", time: "09:00 – 13:30" },
      { days: "الأحد", time: "مغلق" },
    ],
  },

  // Trust strip
  trustMessage: {
    fr: "Au service des familles de la Ville Nouvelle et du Boulevard Mohamed V avec des soins dentaires modernes et sans douleur depuis 2019.",
    ar: "في خدمة عائلات المدينة الجديدة وشارع محمد الخامس بأحدث تقنيات طب الأسنان بدون ألم منذ 2019.",
  },

  // Insurance
  insurance: ["CNSS", "CNOPS", "CHIFA"],

  // Reviews
  rating: {
    score: "4.9",
    count: "40+",
    platform: "Google",
    reviewUrl: "https://www.google.com/maps/place/Dr.+Marbouh+Amine/@34.0349796,-4.9973869,948m/data=!3m1!1e3!4m8!3m7!1s0xd9f8b9dc6d79b37:0xbe149fa93faee04b!8m2!3d34.0349796!4d-4.9973869!9m1!1b1!16s%2Fg%2F11kfc2v0wn?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  },

  // Service images (language-independent, order matches services arrays below)
  serviceImages: [
    "/services/diagnostic.jpg",
    "/services/decay.jpg",
    "/services/orthodontie.jpg",
    "/services/whitening.jpg",
    "/services/implant.jpg",
    "/services/removal.jpg",
    "/services/crowns.jpg",
    "/services/kids.jpg",
  ],

  // Services
  services: {
    fr: [
      {
        icon: "stethoscope",
        title: "Consultation & Diagnostic",
        description: "Examen clinique complet des dents et des gencives pour un diagnostic précis.",
      },
      {
        icon: "shield",
        title: "Soins Conservateurs & Restaurateurs",
        description: "Prise en charge des caries, restaurations esthétiques (plombages blancs) et prophylaxie.",
      },
      {
        icon: "align-center",
        title: "Orthodontie",
        description: "Orthodontie conventionnelle et aligneurs invisibles pour tous les âges.",
      },
      {
        icon: "sparkles",
        title: "Blanchiment Dentaire",
        description: "Éclaircissement professionnel pour un sourire éclatant, sain et naturel.",
      },
      {
        icon: "anchor",
        title: "Implantologie",
        description: "Remplacement permanent, fixe et naturel des dents manquantes.",
      },
      {
        icon: "stethoscope",
        title: "Chirurgie Orale",
        description: "Extractions dentaires complexes et interventions chirurgicales avec précision et confort.",
      },
      {
        icon: "circle",
        title: "Prothèses Dentaires",
        description: "Couronnes en zircone, facettes et prothèses esthétiques personnalisées.",
      },
      {
        icon: "heart",
        title: "Pédodontie",
        description: "Des soins doux, préventifs et adaptés aux enfants dès le plus jeune âge.",
      },
    ],
    ar: [
      {
        icon: "stethoscope",
        title: "الفحص والتشخيص",
        description: "فحص شامل ودقيق للأسنان واللثة للكشف المبكر وتحديد خطة العلاج المناسبة.",
      },
      {
        icon: "shield",
        title: "علاج وترميم الأسنان",
        description: "علاج التسوس، الحشوات التجميلية والوقائية، والعناية الشاملة بصحة الفم.",
      },
      {
        icon: "align-center",
        title: "تقويم الأسنان",
        description: "تقويم الأسنان الثابت والتقويم الشفاف الحديث لجميع الأعمار.",
      },
      {
        icon: "sparkles",
        title: "تبييض الأسنان",
        description: "تبييض أسنان احترافي وآمن للحصول على ابتسامة مشرقة وطبيعية.",
      },
      {
        icon: "anchor",
        title: "زراعة الأسنان",
        description: "تعويض دائم وثابت للأسنان المفقودة واستعادة الوظيفة والمظهر الطبيعي.",
      },
      {
        icon: "stethoscope",
        title: "الخلع والجراحة الفموية",
        description: "خلع الأسنان والتدخلات الجراحية الفموية بدقة عالية وأمان تام.",
      },
      {
        icon: "circle",
        title: "تركيبات الأسنان",
        description: "تيجان الزيركون، القشور الخزفية (الفينير)، والتركيبات التجميلية المخصصة.",
      },
      {
        icon: "heart",
        title: "طب أسنان الأطفال",
        description: "رعاية سنية لطيفة، وقائية ومخصصة للأطفال في بيئة مريحة منذ سن مبكرة.",
      },
    ],
  },

  // Testimonials
  testimonials: {
    fr: [
      {
        text: "Un immense merci au Dr Marbouh pour son professionnalisme et sa grande patience. Un dentiste humain, attentif et très compétent. Je le recommande vivement.",
        author: "Salma Sghyar",
      },
      {
        text: "Un accueil chaleureux, un cabinet très propre et surtout un médecin très professionnel et attentionné. Les soins sont réalisés avec grande précision et sans douleur.",
        author: "Yassine Sghyar",
      },
      {
        text: "Je recommande vivement le Dr Marbouh à toute personne cherchant des soins dentaires de qualité.",
        author: "Imane El Ansari",
      },
    ],
    ar: [
      {
        text: "شكراً جزيلاً للدكتور مربوح على احترافيته وصبره الكبير. طبيب إنساني ومهتم وكفؤ جداً. أنصح به بشدة.",
        author: "سلمى صغير",
      },
      {
        text: "استقبال دافئ وعيادة نظيفة جداً، والأهم طبيب محترف جداً ومهتم. العلاجات تتم بدقة وبدون ألم.",
        author: "ياسين صغير",
      },
      {
        text: "أنصح بشدة بالدكتور مربوح لكل من يبحث عن رعاية أسنان عالية الجودة.",
        author: "إيمان الأنصاري",
      },
    ],
  },
};

export default clinicConfig;