"use client";

import { useRef, useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import clinicConfig from "@/clinic.config";
import { ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react"; 
import ServiceCard from "./ServiceCard";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
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

  // Evaluates container boundaries to manage the disabled states of the arrows
  const checkScrollBounds = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const absoluteScrollLeft = Math.abs(scrollLeft);
      
      const isAtStart = absoluteScrollLeft <= 2;
      const isAtEnd = absoluteScrollLeft + clientWidth >= scrollWidth - 2;

      if (isRTL) {
        setCanScrollLeft(!isAtEnd);
        setCanScrollRight(!isAtStart);
      } else {
        setCanScrollLeft(!isAtStart);
        setCanScrollRight(!isAtEnd);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheelScroll = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      
      e.preventDefault();
      
      // Amplifies deltaY so desktop wheels slide fluidly instead of dragging 1px at a time
      const scrollSpeedMultiplier = 2.5;
      
      container.scrollBy({
        left: e.deltaY * scrollSpeedMultiplier,
        behavior: "auto"
      });
    };

    container.addEventListener("wheel", handleWheelScroll, { passive: false });
    container.addEventListener("scroll", checkScrollBounds);
    checkScrollBounds();

    return () => {
      container.removeEventListener("wheel", handleWheelScroll);
      container.removeEventListener("scroll", checkScrollBounds);
    };
  }, [services, isRTL]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
      
  return (
    <section
      id="services"
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full py-16 md:py-24 bg-lightbg"
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

        {/* Services Carousel */}
        <div 
          ref={scrollContainerRef}
          className="w-full flex gap-5 overflow-x-auto px-4 py-2 [scroll-behavior:smooth] [scroll-snap-type:x_mandatory] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={`${lang}-${index}`} 
              image={serviceImages[index] || "/services/fallback.jpg"}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex justify-center gap-4 mt-6" dir="ltr">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 hover:enabled:bg-gray-50 active:enabled:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-5 h-5 text-brand" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 hover:enabled:bg-gray-50 active:enabled:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-5 h-5 text-brand" />
          </button>
        </div>

        {/* Insurance Marquee Strip */}
        {insurance.length > 0 && (
          <div 
            dir="ltr" 
            className="mt-16 -mx-[calc(50vw-50%)] w-screen bg-brand overflow-hidden py-4 relative select-none"
          >
            <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center gap-2 bg-brand pl-6 pr-4">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-bold text-accent whitespace-nowrap">
                Mutuelles acceptées
              </span>
            </div>

            <div className="absolute left-[180px] top-0 bottom-0 w-12 z-20 bg-gradient-to-r from-brand to-transparent pointer-events-none" />

            <div className="flex w-max animate-marquee-services pl-[190px]">
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