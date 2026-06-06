"use client";

import { useLanguage } from "../LanguageContext";
import clinicConfig from "../../clinic.config";
import { Phone, MapPin, ArrowRight, ArrowLeft } from "lucide-react";

const Hero = () => {
  const { lang, isRTL } = useLanguage();

  // Guard values against config definition gaps
  const name = clinicConfig.clinicName?.[lang] || clinicConfig.name?.[lang] || "";
  const specialty = clinicConfig.specialty?.[lang] || "";
  const neighborhood = clinicConfig.neighborhood?.[lang] || "";
  const secondaryLabel = lang === "fr" ? "Voir nos services" : "خدماتنا";

  return (
    <section
      id="hero"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden w-full text-white py-16 md:py-28 lg:py-36"
      style={{ background: "linear-gradient(135deg, #0f766e 0%, #0d9488 60%, #0891b2 100%)" }}
    >
      {/* Visual Design Elements: Background Glow Patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Text Content Block (Flipped natively by browser dir property) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-start gap-5">
          
          {/* Subtle Location Tag */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide border border-white/10 self-center md:self-start">
            <MapPin className="w-3.5 h-3.5 text-cyan-200" />
            <span>{neighborhood}</span>
          </div>

          <h1 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {name}
          </h1>
          
          <p className="w-full text-lg sm:text-xl text-teal-100 max-w-xl font-medium leading-relaxed">
            {specialty}
          </p>

          {/* Frictionless Conversion Area */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
            <a
              href={`tel:${clinicConfig.phone}`}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-teal-700 rounded-xl px-8 py-4 text-base font-bold shadow-xl shadow-teal-950/20 hover:bg-teal-50 hover:scale-[1.02] active:scale-[0.99] transition-all"
            >
              <Phone className="w-5 h-5 text-teal-600 animate-pulse flex-shrink-0" />
              <span dir="ltr">{clinicConfig.phone}</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl px-6 py-4 text-base font-semibold hover:bg-white/20 transition-all group"
            >
              <span>{secondaryLabel}</span>
              {isRTL ? (
                <ArrowLeft className="w-4 h-4 text-teal-200 transform group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-4 h-4 text-teal-200 transform group-hover:translate-x-1 transition-transform" />
              )}
            </a>
          </div>
        </div>

        {/* Image Frame Holder Block */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md p-3 shadow-2xl shadow-teal-950/30">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-teal-800/40 to-cyan-900/40 border border-white/5 flex flex-col items-center justify-center text-teal-200 text-sm font-semibold gap-3 text-center px-4">
              <div className="w-16 h-16 rounded-full bg-teal-700/30 flex items-center justify-center border border-teal-500/20">
                <span className="text-xl">🩺</span>
              </div>
              <span>Placeholder: Image of Doctor / Clinic</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;