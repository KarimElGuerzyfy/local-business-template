"use client";

import { useLanguage } from "../LanguageContext";
import clinicConfig from "@/clinic.config";
import { ShieldCheck } from "lucide-react"; // More relevant icon for insurance/mutuelles
import ServiceCard from "./ServiceCard";

// Fallback array to prevent crashes if images are missing in config
const fallbackImages = [
  "/services/1.jpg",
  "/services/2.jpg",
  "/services/3.jpg",
  "/services/4.jpg",
  "/services/5.jpg",
  "/services/6.jpg",
  "/services/7.jpg",
  "/services/8.jpg",
];

const Services = () => {
  const { lang, isRTL } = useLanguage() as {
    lang: "fr" | "ar";
    isRTL: boolean;
  };

  const services = clinicConfig.services[lang] || [];
  const serviceImages = clinicConfig.serviceImages || fallbackImages;
  const insurance = clinicConfig.insurance || [];

  const sectionTitle = lang === "fr" ? "Nos Services" : "خدماتنا";
  const sectionSubtitle =
    lang === "fr"
      ? "Des soins dentaires complets pour toute la famille"
      : "رعاية أسنان شاملة لجميع أفراد العائلة";
      
  // Correct Moroccan medical industry localization
  const insuranceLabel =
    lang === "fr" ? "Mutuelles acceptées" : "المؤسسات التعاضدية المقبولة";

  return (
    <section
      id="services"
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand tracking-tight">
            {sectionTitle}
          </h2>
          <p className="mt-3 text-[#162D54] font-semibold text-base md:text-lg max-w-xl mx-auto">
            {sectionSubtitle}
          </p>
          <div className="mt-4 mx-auto w-full h-px bg-brand" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={`${lang}-${index}`} // Prevents element DOM mixing during language switch
              image={serviceImages[index] || "/services/fallback.jpg"}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Insurance Marquee Strip — Completely isolated from RTL container shifts */}
        {insurance.length > 0 && (
          <div 
            dir="ltr" 
            className="mt-16 -mx-[calc(50vw-50%)] w-screen bg-brand overflow-hidden py-4 relative select-none"
          >
            {/* Static label — Left-pinned, absolute on top layer */}
            <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center gap-2 bg-brand pl-6 pr-4">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-bold text-accent whitespace-nowrap">
                Mutuelles acceptées
              </span>
            </div>

            {/* Isolated, Correctly Positioned Fade Gradient Sibling */}
            <div className="absolute left-[175px] top-0 bottom-0 w-12 z-20 bg-gradient-to-r from-brand to-transparent pointer-events-none" />

            {/* Scrolling track — Shifted left-padding to start exactly after the static block */}
            <div className="flex w-max animate-marquee-services pl-[190px]">
              
              {/* First Half Track */}
              {Array.from({ length: 20 }).flatMap((_, i) =>
                insurance.map((badge) => (
                  <span
                    key={`track1-${badge}-${i}`}
                    className="flex items-center gap-2 mx-8 text-sm font-bold text-accent whitespace-nowrap"
                  >
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    {badge}
                  </span>
                ))
              )}

              {/* Second Half Track */}
              {Array.from({ length: 20 }).flatMap((_, i) =>
                insurance.map((badge) => (
                  <span
                    key={`track2-${badge}-${i}`}
                    className="flex items-center gap-2 mx-8 text-sm font-bold text-accent whitespace-nowrap"
                  >
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    {badge}
                  </span>
                ))
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;