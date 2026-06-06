"use client";

import { useLanguage } from "../LanguageContext";
import clinicConfig from "../../clinic.config";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const { lang, isRTL } = useLanguage();

  const testimonials = clinicConfig.testimonials[lang] || [];
  const rating = clinicConfig.rating || { score: "5.0", count: 0, platform: "Google", reviewUrl: "#" };

  const sectionTitle = lang === "fr" ? "Ce que disent nos patients" : "آراء مرضانا";
  const reviewsLabel = lang === "fr" ? `+${rating.count} avis sur` : `+${rating.count} تقييم على`;

  return (
    <section
      id="avis"
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {sectionTitle}
          </h2>

          {/* Rating Badge — Links to Google Reviews */}
          <a
            href={rating.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 bg-teal-50/50 border border-teal-100/60 rounded-2xl px-6 py-3 shadow-sm hover:shadow-md hover:border-teal-300 hover:bg-teal-50 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400 transform group-hover:scale-110 transition-transform duration-150"
                />
              ))}
            </div>
            <span className="text-2xl font-extrabold text-gray-900">
              {rating.score}
            </span>
            <span className="text-sm text-gray-600 font-medium">
              {reviewsLabel} {rating.platform}
            </span>
          </a>

          <div className="mt-6 w-16 h-1 rounded-full bg-teal-600" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100/70 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-4 relative overflow-hidden group"
            >
              <Quote
                className="w-8 h-8 opacity-10 text-teal-600 transform group-hover:rotate-12 transition-transform"
              />
              
              {/* FIXED: Quotes are now safely escaped inside a JSX expression */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1 font-medium">
                {"\""}{testimonial.text}{"\""}
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 bg-teal-600 shadow-sm"
                >
                  {testimonial.author ? testimonial.author.charAt(0).toUpperCase() : "?"}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">
                    {testimonial.author}
                  </span>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;