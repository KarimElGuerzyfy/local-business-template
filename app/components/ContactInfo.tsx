"use client";

import { useLanguage } from "../LanguageContext";
import clinicConfig from "@/clinic.config";
import { Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";

const ContactInfo = () => {
  const { lang, isRTL } = useLanguage() as {
    lang: "fr" | "ar";
    isRTL: boolean;
  };

  const hours = clinicConfig.hours[lang] || [];

  const labels = {
    fr: {
      title: "Contactez-nous",
      subtitle: "Besoin d'un rendez-vous ou d'une information ? Contactez-nous directement.",
      hoursTitle: "Horaires d'ouverture",
      whatsapp: "WhatsApp",
    },
    ar: {
      title: "يسعدنا التواصل معك",
      subtitle: "هل تحتاج إلى موعد أو معلومة؟ تواصل معنا مباشرة.",
      hoursTitle: "ساعات العمل",
      whatsapp: "واتساب",
    },
  };

  const t = labels[lang] || labels.fr;

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="flex flex-col gap-6 w-full">
      
      {/* Title Block */}
      <div className="flex flex-col gap-2">
        <h3 className="text-white font-bold text-4xl">{t.title}</h3>
        <p className="text-accent text-xl font-medium leading-relaxed">{t.subtitle}</p>
      </div>

      {/* Email Information Wrapper - High-Contrast White Glassmorphism */}
      <div className="flex items-center gap-3 bg-white/7 border border-white/20 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] rounded-xl px-4 py-3">
        <Mail className="w-5 h-5 text-accent shrink-0" />
        <span className="text-accent text-xl font-medium">{clinicConfig.email}</span>
      </div>

      {/* Telephone Information Wrapper - High-Contrast White Glassmorphism */}
      <div className="flex items-center gap-3 bg-white/7 border border-white/20 backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] rounded-xl px-4 py-3">
        <Phone className="w-5 h-5 text-accent shrink-0" />
        <span className="text-accent text-xl font-medium" dir="ltr">{clinicConfig.phone}</span>
      </div>
      
      {/* WhatsApp Redirect Anchor */}
      <a
        href={`https://wa.me/${clinicConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 bg-[#14AE5C] cursor-pointer"
      >
        <Image src="/contact/whatsapp-logo.svg" alt="" role="presentation" width={24} height={24} className="shrink-0" />
        <span className="text-xl font-medium">{t.whatsapp}</span>
      </a>

      {/* Operational Hours Manifest Layout Card - High-Contrast White Glassmorphism */}
      <div className="flex flex-col gap-3 bg-white/7 border border-white/20 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] rounded-xl px-4 py-4">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <Clock className="w-6 h-6 text-accent shrink-0" />
          <span className="text-accent font-medium text-xl">{t.hoursTitle}</span>
        </div>
        <div className="flex flex-col gap-2">
          {hours.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-accent text-base">{item.days}</span>
              <span className="text-accent text-base font-medium" dir="ltr">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;