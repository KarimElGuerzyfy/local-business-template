"use client";

import { useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { FaTooth } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import clinicConfig from "@/clinic.config";

const navItems: Record<"fr" | "ar", { label: string; href: string }[]> = {
  fr: [
    { label: "Accueil", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Avis", href: "#avis" },
    { label: "Contact", href: "#contact" },
  ],
  ar: [
    { label: "الرئيسية", href: "#hero" },
    { label: "الخدمات", href: "#services" },
    { label: "آراء العملاء", href: "#avis" },
    { label: "اتصل بنا", href: "#contact" },
  ],
};

const Header = () => {
  const { lang, toggleLanguage, isRTL } = useLanguage() as {
    lang: "fr" | "ar";
    toggleLanguage: () => void;
    isRTL: boolean;
  };
  const [isOpen, setIsOpen] = useState(false);

  const items = navItems[lang];
  const clinicName = clinicConfig.clinicName[lang];

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className="sticky top-0 z-50 w-full bg-brand border-b border-white/10 font-hind"
    >
      <div className="mx-auto p-6 h-16 flex items-center justify-between w-full">        
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="#hero" 
            className="flex items-center gap-3 group transition-colors"
          >
            <FaTooth className="w-6 h-6 text-white shrink-0 group-hover:text-white/80 transition-colors" />
            <div className="flex flex-col">
              <span className="text-white text-base lg:text-xl font-bold leading-tight tracking-tight group-hover:text-white/80 transition-colors whitespace-nowrap">
                {clinicName}
              </span>
            </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-white transition-colors font-semibold text-sm tracking-wide relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="flex items-center justify-center gap-2 text-sm font-bold text-white border border-white/40 rounded-2xl px-4 py-2 hover:bg-white/10 transition-all focus:ring-2 focus:ring-white/20 whitespace-nowrap"
          >
            <span>{lang === "fr" ? "AR" : "FR"}</span>
          </button>

          <a
            href={`tel:${clinicConfig.phone}`}
            className="inline-flex items-center gap-2 bg-[#CBDFE4] text-brand rounded-2xl px-4 py-2 text-sm font-bold hover:bg-[#CBDFE4]/90 transition-all whitespace-nowrap shadow-lg"
          >
            <Phone className="w-4 h-4 animate-pulse shrink-0" />
            <span dir="ltr">{clinicConfig.phone}</span>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 w-full border-t border-white/10 shadow-xl z-50 bg-[#0B192C]">
          <nav className="flex flex-col p-5 gap-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-white/90 hover:text-white font-semibold text-base py-1.5 border-b border-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => {
                toggleLanguage();
                closeMenu();
              }}
              className="flex items-center justify-between w-full text-white font-semibold text-sm border border-white/20 rounded-xl px-4 py-3 bg-white/10 hover:bg-white/20"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {lang === "fr" ? "Changer de langue" : "تغيير اللغة"}
              </span>
              <span className="font-bold">{lang === "fr" ? "العربية" : "Français"}</span>
            </button>

            <a
              href={`tel:${clinicConfig.phone}`}
              onClick={closeMenu}
              className="flex items-center justify-center gap-2.5 bg-white text-brand rounded-xl py-3.5 font-bold text-base shadow-lg hover:bg-white/90 transition-colors active:scale-[0.99]"
            >
              <Phone className="w-5 h-5" />
              <span dir="ltr">{clinicConfig.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;