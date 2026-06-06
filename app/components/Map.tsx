"use client";

import { useLanguage } from "../LanguageContext";
import clinicConfig from "../../clinic.config";
import { MapPin } from "lucide-react";

const Map = () => {
  const { lang, isRTL } = useLanguage();

  const title = lang === "fr" ? "Notre Localisation" : "موقعنا";
  const directions = lang === "fr" ? "Obtenir l'itinéraire" : "الحصول على الاتجاهات";

  return (
    <section
      id="map"
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto">
            {clinicConfig.address?.[lang] || ""}
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-teal-600" />
        </div>

        {/* Map Container */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            src={clinicConfig.googleMapsEmbed}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="bg-white px-6 py-4 flex justify-center">
            
            {/* FIXED STRUCTURE: Opening <a> tag restored */}
            <a
              href={clinicConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm bg-teal-600 hover:bg-teal-700 transition-all shadow-md shadow-teal-600/10"
            >
              <MapPin className="w-4 h-4" />
              {directions}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Map;