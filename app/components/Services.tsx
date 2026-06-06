"use client";

import { useLanguage } from "../LanguageContext";
import clinicConfig from "../../clinic.config";
import {
  Stethoscope,
  Shield,
  AlignCenter,
  Sparkles,
  Anchor,
  Scissors,
  Circle,
  Heart,
  CreditCard,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="w-7 h-7" />,
  shield: <Shield className="w-7 h-7" />,
  "align-center": <AlignCenter className="w-7 h-7" />,
  sparkles: <Sparkles className="w-7 h-7" />,
  anchor: <Anchor className="w-7 h-7" />,
  scissors: <Scissors className="w-7 h-7" />,
  circle: <Circle className="w-7 h-7" />,
  heart: <Heart className="w-7 h-7" />,
};

const Services = () => {
  const { lang, isRTL } = useLanguage();

  const services = clinicConfig.services[lang];
  const insurance = clinicConfig.insurance;

  const sectionTitle = lang === "fr" ? "Nos Services" : "خدماتنا";
  const sectionSubtitle =
    lang === "fr"
      ? "Des soins dentaires complets pour toute la famille"
      : "رعاية أسنان شاملة لجميع أفراد العائلة";
  const insuranceLabel =
    lang === "fr" ? "Cartes acceptées" : "البطاقات المقبولة";

  return (
    <section
      id="services"
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {sectionTitle}
          </h2>
          <p className="mt-3 text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            {sectionSubtitle}
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ backgroundColor: "#0d9488" }} />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                style={{ backgroundColor: "#0d9488" }}
              >
                {iconMap[service.icon] ?? <Stethoscope className="w-7 h-7" />}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance Strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white border border-gray-100 rounded-2xl px-8 py-5 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
            <CreditCard className="w-5 h-5" style={{ color: "#0d9488" }} />
            <span>{insuranceLabel}</span>
          </div>
          <div className="flex items-center gap-3">
            {insurance.map((badge) => (
              <span
                key={badge}
                className="text-sm font-bold px-4 py-1.5 rounded-full border"
                style={{ color: "#0d9488", borderColor: "#0d9488", backgroundColor: "#f0fdfa" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;