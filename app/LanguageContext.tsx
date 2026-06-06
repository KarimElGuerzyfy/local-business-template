"use client";

import { createContext, useContext, useState } from "react";

type Language = "fr" | "ar";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  toggleLanguage: () => {},
  isRTL: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "fr" ? "ar" : "fr"));
  };

  const isRTL = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-cairo" : "font-figtree"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}