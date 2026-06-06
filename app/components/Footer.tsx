"use client";

import { useLanguage } from "../LanguageContext";
import clinicConfig from "../../clinic.config";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const { lang, isRTL } = useLanguage();

  const labels = {
    fr: {
      rights: `© ${new Date().getFullYear()} ${clinicConfig.clinicName.fr}. Tous droits réservés.`,
      address: "Adresse",
      hours: "Horaires",
      contact: "Contact",
    },
    ar: {
      rights: `© ${new Date().getFullYear()} ${clinicConfig.clinicName.ar}. جميع الحقوق محفوظة.`,
      address: "العنوان",
      hours: "ساعات العمل",
      contact: "اتصل بنا",
    },
  };

  const t = labels[lang] || labels.fr;
  const hours = clinicConfig.hours?.[lang] || [];

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full"
      style={{ background: "linear-gradient(135deg, #0f766e 0%, #0d9488 60%, #0891b2 100%)" }}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: Clinic Name + Specialty */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-xl font-extrabold tracking-tight">
              {clinicConfig.clinicName[lang]}
            </h3>
            <p className="text-teal-100 text-sm font-medium">
              {clinicConfig.specialty[lang]}
            </p>
            <div className="flex items-start gap-2 mt-2 text-teal-100 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{clinicConfig.address[lang]}</span>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-200" />
              <h4 className="text-white font-bold text-sm">{t.hours}</h4>
            </div>
            <div className="flex flex-col gap-2">
              {hours.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-teal-100">{item.days}</span>
                  <span className="text-white font-semibold">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contact (Fixed anchor tags here) */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-200" />
              <h4 className="text-white font-bold text-sm">{t.contact}</h4>
            </div>
            
            <a
              href={`tel:${clinicConfig.phone}`}
              className="text-teal-100 text-sm font-semibold hover:text-white transition-colors"
              dir="ltr"
            >
              {clinicConfig.phone}
            </a>
            
            <a
              href={`https://wa.me/${clinicConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-100 text-sm font-semibold hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            
            <a
              href={`mailto:${clinicConfig.email}`}
              className="text-teal-100 text-sm font-semibold hover:text-white transition-colors"
            >
              {clinicConfig.email}
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-teal-100 text-xs">
            {t.rights}
          </p>
          <p className="text-teal-200 text-xs">
            Fès, Maroc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;