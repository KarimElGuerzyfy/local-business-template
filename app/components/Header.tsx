"use client";

import { Phone } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import clinicConfig from "@/clinic.config";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  const { lang, toggleLanguage } = useLanguage() as {
    lang: "fr" | "ar";
    toggleLanguage: () => void;
  };

  const clinicName = clinicConfig.clinicName["fr"];

  return (
    <header
      dir="ltr"
      className="sticky top-0 z-50 w-full bg-brand border-b border-white/10 font-cairo"
    >
      <div className="mx-auto p-6 h-16 flex items-center justify-between w-full">

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#hero"
            className="flex items-center gap-3 group transition-colors"
          >
            <Image src="/logo.svg" alt="logo" width={28} height={28} className="shrink-0 group-hover:opacity-80 transition-opacity self-center" />
            <span className="text-white text-xl leading-tight tracking-tight group-hover:text-white/80 transition-colors whitespace-nowrap">
              {clinicName}
            </span>
          </a>
        </div>

        <Nav />

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            className="flex items-center justify-center gap-2 text-base text-white border border-white rounded-xl px-4 py-2 hover:bg-white/10 transition-all focus:ring-2 focus:ring-white/20 whitespace-nowrap cursor-pointer"
          >
            <span>{lang === "fr" ? "AR" : "FR"}</span>
            <Image src="/globe.svg" alt="language" width={20} height={20} />
          </button>

          <a
            href={`tel:${clinicConfig.phone}`}
            className="inline-flex items-center gap-2 bg-accent text-brand rounded-xl px-4 py-2 text-base hover:bg-accent/90 transition-all whitespace-nowrap shadow-lg"
          >
            <Phone className="w-4 h-4 animate-pulse shrink-0" />
            <span dir="ltr">{clinicConfig.phone}</span>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;