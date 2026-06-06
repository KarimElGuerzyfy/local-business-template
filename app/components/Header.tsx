"use client";

import { useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import clinicConfig from "../../clinic.config";

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
  const { lang, toggleLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const items = navItems[lang];
  const clinicName = clinicConfig.clinicName[lang];
  const specialty = clinicConfig.specialty[lang];

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className="sticky top-0 z-50 w-full shadow-md"
      style={{ background: "linear-gradient(135deg, #0f766e 0%, #0d9488 60%, #0891b2 100%)" }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-5xl">

        {/* Left/Right Context: Clinic Name + Specialty */}
        <div className="flex flex-col shrink-0">
          <a
            href="#hero"
            className="text-white text-base lg:text-xl font-bold leading-tight tracking-tight hover:text-teal-100 transition-colors whitespace-nowrap"
          >
            {clinicName}
          </a>
          <span className="text-teal-100 text-xs font-medium whitespace-nowrap">{specialty}</span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-teal-50 hover:text-white transition-colors font-semibold text-sm tracking-wide relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Language Toggle + Phone (Desktop UI) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-white border border-white/40 rounded-full px-3.5 py-1.5 hover:bg-white/10 transition-all focus:ring-2 focus:ring-white/20 whitespace-nowrap"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "AR" : "FR"}</span>
          </button>

          <a
            href={`tel:${clinicConfig.phone}`}
            className="inline-flex items-center gap-2 bg-white text-teal-700 rounded-full px-4 py-2 text-sm font-bold hover:bg-teal-50 transition-all whitespace-nowrap shadow-lg"
          >
            <Phone className="w-4 h-4 animate-pulse shrink-0" />
            <span dir="ltr">{clinicConfig.phone}</span>
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dynamic Dropdown Container */}
      {isOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 w-full border-t border-white/20 shadow-xl z-50"
          style={{ background: "linear-gradient(135deg, #0f766e 0%, #0d9488 100%)" }}
        >
          <nav className="flex flex-col p-5 gap-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-teal-50 hover:text-white font-semibold text-base py-1.5 border-b border-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Language Toggle */}
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

            {/* Mobile Call Button */}
            <a
              href={`tel:${clinicConfig.phone}`}
              onClick={closeMenu}
              className="flex items-center justify-center gap-2.5 bg-white text-teal-700 rounded-xl py-3.5 font-bold text-base shadow-lg hover:bg-teal-50 transition-colors active:scale-[0.99]"
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