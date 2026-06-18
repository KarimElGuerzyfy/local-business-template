"use client";

import { useState } from "react";
import { X, Phone, Globe, Home, Briefcase, MessageSquare, PhoneCall, LucideIcon, MoreHorizontal } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import clinicConfig from "@/clinic.config";
import Image from "next/image";

// Explicitly type the icon property using LucideIcon
const navItems: Record<"fr" | "ar", { label: string; href: string; icon: LucideIcon }[]> = {
  fr: [
    { label: "Accueil", href: "#hero", icon: Home },
    { label: "services", href: "#services", icon: Briefcase },
    { label: "Avis", href: "#avis", icon: MessageSquare },
    { label: "Contact", href: "#contact", icon: PhoneCall },
  ],
  ar: [
    { label: "الرئيسية", href: "#hero", icon: Home },
    { label: "الخدمات", href: "#services", icon: Briefcase },
    { label: "آراء العملاء", href: "#avis", icon: MessageSquare },
    { label: "اتصل بنا", href: "#contact", icon: PhoneCall },
  ],
};

const Nav = () => {
  const { lang, toggleLanguage } = useLanguage() as {
    lang: "fr" | "ar";
    toggleLanguage: () => void;
    isRTL: boolean;
  };
  const [isOpen, setIsOpen] = useState(false);
  const items = navItems[lang];
  const closeMenu = () => setIsOpen(false);

  const clinicName = clinicConfig.clinicName["fr"];
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  closeMenu();
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <>
      {/* Desktop Nav Links */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="text-white/90 hover:text-white transition-colors text-sm tracking-wide relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle Menu"
        className="md:hidden w-8 h-8 rounded-full bg-accent text-brand flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
      >
        <MoreHorizontal className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Mobile Fullscreen Dropdown Overlay Menu */}
      {isOpen && (
        <div 
          dir="ltr" 
          className="md:hidden fixed inset-0 w-full h-screen z-50 bg-accent flex flex-col font-cairo"
        >
          {/* Mockup Header Row */}
          <div className="h-16 px-6 border-b border-brand/5 flex items-center justify-between w-full bg-menubtn backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="logo" width={24} height={24} className="shrink-0" />
              <span className="text-brand font-medium text-lg tracking-tight">
                {clinicName}
              </span>
            </div>
            <button 
              onClick={closeMenu}
              className="p-1.5 rounded-full bg-accent text-brand transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Core Content Layout Area */}
          <nav className="flex-1 flex flex-col px-6 py-8 gap-4 overflow-y-auto">
            {/* Nav Links formatted as Pill Blocks */}
            <div className="flex flex-col gap-2">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="w-full flex items-center gap-4 bg-menubtn text-brand text-base pl-1.5 pr-4 py-2 rounded-2xl transition-all active:scale-[0.99]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#629FAD] flex items-center justify-center text-brand shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="ml-auto text-right">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Language Switcher Strip Assembly */}
            <div className="mt-auto flex flex-col gap-1">
              <div className="w-full bg-brand text-white rounded-2xl p-2 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2.5 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-brand shrink-0" />
                  </div>
                  <span className="text-md font-medium text-white/90 flex-1 text-center">
                    {lang === "fr" ? "Changer la langue" : "تغيير اللغة"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-sm" dir="ltr">
                  <button
                    onClick={() => { if (lang !== "fr") toggleLanguage(); }}
                    className={`px-2.5 py-2 text-base rounded-xl border border-accent uppercase tracking-wider transition-all cursor-pointer ${
                      lang === "fr" ? "bg-accent text-brand" : "bg-brand text-accent"
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => { if (lang !== "ar") toggleLanguage(); }}
                    className={`px-2.5 py-2 rounded-xl border border-accent uppercase tracking-wider text-base transition-all cursor-pointer ${
                      lang === "ar" ? "bg-accent text-brand" : "bg-brand text-accent"
                    }`}
                  >
                    AR
                  </button>
                </div>
              </div>

              {/* Primary Call Router Endpoint */}
              <a
                href={`tel:${clinicConfig.phone}`}
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-3 bg-[#274F94] text-white rounded-xl py-4 text-base font-normal shadow-md hover:bg-[#274F94]/90 transition-colors active:scale-[0.99]"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span dir="ltr">{clinicConfig.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Nav;