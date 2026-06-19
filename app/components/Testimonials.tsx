"use client";

import { useRef, useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import clinicConfig from "@/clinic.config";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { lang, isRTL } = useLanguage() as {
    lang: "fr" | "ar";
    isRTL: boolean;
  };

  const testimonials = clinicConfig.testimonials[lang] || [];
  const rating = clinicConfig.rating;

  const sectionTitle = lang === "fr" ? "Ce que disent nos patients" : "آراء مرضانا";
  const reviewsLabel = lang === "fr"
    ? `+${rating.count} avis sur ${rating.platform}`
    : `+${rating.count} تقييم على ${rating.platform}`;

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
      container.scrollBy({ left: e.deltaY * 2.5, behavior: "auto" });
    };

    container.addEventListener("wheel", handleWheelScroll, { passive: false });
    container.addEventListener("scroll", checkScrollBounds);
    checkScrollBounds();

    return () => {
      container.removeEventListener("wheel", handleWheelScroll);
      container.removeEventListener("scroll", checkScrollBounds);
    };
  }, [testimonials, isRTL]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="avis"
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full pb-16 bg-lightbg"
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand tracking-tight">
            {sectionTitle}
          </h2>

          <div className="w-full flex justify-center mt-4">
            <a
              href={rating.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-white border border-brand/10 rounded-2xl py-3 px-6 md:px-16 shadow-lg transition-all cursor-pointer w-5xl max-w-[90%] md:max-w-[70%] lg:max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-1 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xl font-extrabold text-brand shrink-0">
                {rating.score}
              </span>
              <span className="text-xl text-brand font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                {reviewsLabel}
              </span>
            </a>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollContainerRef}
          className="w-full flex gap-3 overflow-x-auto px-4 py-2 [scroll-snap-type:x_mandatory] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${lang}-${index}`}
              text={testimonial.text}
              author={testimonial.author}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <div className="flex justify-center gap-4 mt-6" dir="ltr">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-brand/10 hover:enabled:bg-gray-50 active:enabled:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-5 h-5 text-brand" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-brand/10 hover:enabled:bg-gray-50 active:enabled:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-5 h-5 text-brand" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;