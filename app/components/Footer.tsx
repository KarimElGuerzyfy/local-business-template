"use client";

import { useLanguage } from "../LanguageContext";
import clinicConfig from "../../clinic.config";
import { Phone, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const { lang, isRTL } = useLanguage() as {
    lang: "fr" | "ar";
    isRTL: boolean;
  };

  const labels = {
    fr: {
      rights: `© ${new Date().getFullYear()} ${clinicConfig.clinicName.fr}. Tous droits réservés.`,
      utilitiesTitle: "Patient Utilitaires",
      contactTitle: "Canaux Directs",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      license: "Inscrit au Conseil National de l'Ordre des Médecins du Maroc • Patente N° 12345678",
      testimonials: "Témoignages",
      services: "Nos Spécialités",
      about: "Contact",
      developedBy: "Développé par",
      designedBy: "Design par",
    },
    ar: {
      rights: `© ${new Date().getFullYear()} ${clinicConfig.clinicName.ar}. جميع الحقوق محفوظة.`,
      utilitiesTitle: "روابط تهمك",
      contactTitle: "التواصل المباشر",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      license: "مسجل لدى الهيئة الوطنية للطبيبات والأطباء بالمغرب • رقم الباتينتا 12345678",
      testimonials: "آراء المرضى",
      services: "تخصصاتنا",
      about: "اتصل بنا",
      developedBy: "تطوير",
      designedBy: "تصميم",
    },
  };

  const t = labels[lang] || labels.fr;

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full bg-white text-brand pt-16 pb-8"
    >
      <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-12">

        {/* Tier 1: Full-width Identity Row */}
        <div className="flex flex-col gap-4 pb-2 border-b border-brand/10">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold tracking-tight text-brand">
              {clinicConfig.clinicName[lang]}
            </h3>
            <p className="text-brand text-base font-medium">
              {clinicConfig.specialty[lang]}
            </p>
          </div>
          <div className="flex items-start gap-3 text-brand text-sm leading-relaxed mt-8">
            <MapPin className="w-5 h-5 shrink-0 text-brand" />
            <span>{clinicConfig.address[lang]}</span>
          </div>
        </div>

        {/* Tier 2: Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 pb-4 mt-2">

          {/* Column 1: Patient Utilities */}
          <div className="flex flex-col gap-4">
            <h4 className="text-brand font-bold text-base tracking-wider pb-2">
              {t.utilitiesTitle}
            </h4>
            <nav className="flex flex-col gap-3 text-sm font-medium">
              <Link href="#services" className="text-brand hover:text-brand/70 transition-colors flex items-center gap-1">
                <span>{t.services}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </Link>
              <Link href="#avis" className="text-brand hover:text-brand/70 transition-colors flex items-center gap-1">
                <span>{t.testimonials}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </Link>
              <Link href="#contact" className="text-brand hover:text-brand/70 transition-colors flex items-center gap-1">
                <span>{t.about}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </Link>
            </nav>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-brand font-bold text-base tracking-wider pb-2">
              {t.contactTitle}
            </h4>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a
                href={`tel:${clinicConfig.phone}`}
                className="flex items-center gap-2 text-brand hover:text-brand/70 transition-colors w-fit"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-brand shrink-0" />
                <span>{clinicConfig.phone}</span>
              </a>
              
              <a
                href={`https://wa.me/${clinicConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand hover:text-brand/70 transition-colors w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-[#14AE5C] animate-pulse" />
                <span>WhatsApp Live Chat</span>
              </a>
              
              <a
                href={`mailto:${clinicConfig.email}`}
                className="text-brand hover:text-brand/70 transition-colors w-fit underline decoration-brand/20 underline-offset-4"
              >
                {clinicConfig.email}
              </a>
            </div>
          </div>

        </div>

        {/* Tier 3: Legal Registry */}
        <div className="border-t border-brand/10 pt-6 flex items-center gap-3 text-brand/70 text-xs leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-brand/50 shrink-0" />
          <p>{t.license}</p>
        </div>

        {/* Tier 4: IP Ownership & Credits */}
        <div className="border-t border-brand/5 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-brand/70 bg-brand/5 p-4 rounded-xl">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="font-medium">{t.rights}</p>
            <span className="hidden sm:inline opacity-30">|</span>
            <p className="text-brand/80 font-medium">
              {t.designedBy} <span className="text-brand font-bold">Driss Bourkkadi</span>
              <span className="mx-2 opacity-40">•</span>
              {t.developedBy} <span className="text-brand font-bold">Karim El Guerzyfy</span>
            </p>
          </div>
          <div className="flex items-center gap-6 font-semibold">
            <Link href="/privacy" className="hover:text-brand/70 transition-colors">
              {t.privacy}
            </Link>
            <Link href="/terms" className="hover:text-brand/70 transition-colors">
              {t.terms}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;