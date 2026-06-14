"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageContext";
import clinicConfig from "@/clinic.config";
import { Phone, ArrowRight, ArrowLeft, Star } from "lucide-react";

const Hero = () => {
  const { lang, isRTL } = useLanguage() as {
    lang: "fr" | "ar";
    isRTL: boolean;
  };

  const name = clinicConfig.clinicName[lang];
  const specialty = clinicConfig.specialty[lang];
  const tagline = clinicConfig.tagline[lang];
  const stats = clinicConfig.stats[lang];
  const address = clinicConfig.address[lang];
  const rating = clinicConfig.rating;

  const callLabel = lang === "fr" ? "Pour Réserver" : "اتصل للحجز";
  const servicesLabel = lang === "fr" ? "Nos Services" : "خدماتنا";
  const reviewLabel =
    lang === "fr"
      ? `${rating.score} (${rating.count} avis sur ${rating.platform})`
      : `${rating.score} (${rating.count} تقييم على ${rating.platform})`;

  return (
    <section
      id="hero"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden w-full text-white flex flex-col bg-brand"
    >
      {/* Background SVG */}
      <div className={`absolute inset-0 w-full h-full pointer-events-none ${isRTL ? "scale-x-[-1]" : ""}`}>
        <Image
          src="/hero-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end px-4 md:px-8 pt-10 md:pt-45 pb-0 w-full">

        {/* Left: Text Content Layout */}
        <div className="w-full md:w-1/2 flex flex-col pb-10 lg:pb-20 md:pr-8">

          {/* Name */}
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-secondary">
            {name}
          </h1>

          {/* Specialty */}
          <h2 className="mb-8 text-xl lg:text-3xl font-bold text-secondary">
            {specialty}
          </h2>

          {/* Tagline */}
          <p className="mb-2 text-xl text-white font-medium leading-relaxed">
            {tagline}
          </p>

          {/* Stats Row */}
          <div className="flex items-center py-4 w-full">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center min-w-0 overflow-hidden">
                <div className="flex flex-col pe-1 md:pe-6 min-w-0">
                  <span className="text-2xl text-white">{stat.value}</span>
                  <span className="text-xs md:text-sm text-white leading-tight">{stat.label}</span>
                </div>
                {index < stats.length - 1 && (
                  <div className="h-16 w-0.5 rounded-full bg-white/30 mx-2 md:mx-6 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
            <a
              href={`tel:${clinicConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-accent text-brand rounded-xl px-3 py-3 text-sm  hover:bg-accent/80 transition-all w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>{callLabel}</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white text-white rounded-xl px-3 py-3 text-sm  hover:bg-white/5 transition-all group w-full sm:w-auto"
            >
              <span>{servicesLabel}</span>
              {isRTL ? (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </a>
          </div>

          {/* Star Rating */}
          <a
            href={rating.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-1 hover:opacity-80 transition-opacity md:self-start self-center"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted">{reviewLabel}</span>
          </a>
        </div>

        {/* Desktop: Doctor Vector Illustration */}
        <div className="flex w-full md:w-1/2 justify-center md:justify-end items-end">
          <div className="relative w-64 sm:w-80 md:w-96 lg:w-120 h-87.5 sm:h-105 md:h-125 lg:h-145">
            <Image
              src="/doctor.svg"
              alt={name}
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scrolling Address Strip */}
      <div className="relative z-10 w-full bg-brand border-t border-white/10 py-3 overflow-hidden" dir="ltr">
        <div
          key={lang}
          className="flex w-max will-change-transform animate-marquee-hero"
        >
          {/* First Set (10 Items) */}
          <div className="flex shrink-0">
            {[...Array(10)].map((_, i) => (
              <span key={`set1-${i}`} className="inline-flex items-center gap-3 px-8 text-sm text-white font-medium shrink-0">
                {address}
              </span>
            ))}
          </div>
          
          {/* Second Set (10 Items) */}
          <div className="flex shrink-0" aria-hidden="true">
            {[...Array(10)].map((_, i) => (
              <span key={`set2-${i}`} className="inline-flex items-center gap-3 px-8 text-sm text-white font-medium shrink-0">
                {address}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;