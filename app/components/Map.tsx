"use client";

import { useLanguage } from "../LanguageContext";
import clinicConfig from "../../clinic.config";
import { MapPin } from "lucide-react";

const Map = () => {
  const { lang, isRTL } = useLanguage() as {
    lang: "fr" | "ar";
    isRTL: boolean;
  };

  const labels = {
    fr: {
      title: "Notre Localisation",
      directions: "Obtenir l'itinéraire",
    },
    ar: {
      title: "موقعنا",
      directions: "الحصول على الاتجاهات",
    },
  };

  const t = labels[lang] || labels.fr;

  return (
    <section
      id="map"
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full py-16 md:py-28 bg-lightbg"
    >
      {/* Width locked to 7xl to match system layout rules */}
      <div className="container mx-auto px-4 max-w-7xl flex flex-col gap-2">

        {/* Section Header */}
        <div className="text-center w-full">
          {/* Title size fixed to 36px (text-4xl) with medium weight */}
          <h2 className="text-brand font-medium text-4xl tracking-tight mb-5">
            {t.title}
          </h2>
          <p className="text-brand text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-1">
            {clinicConfig.address?.[lang] || ""}
          </p>
        </div>

        {/* Divider matching section width and color brand */}
        <hr className="w-full border-t-2 border-brand mb-4 md:mb-2" />

        {/* Map Canvas and Button Combo */}
        <div className="w-full flex flex-col gap-4">
          {/* Map iframe matching container width */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-brand/10 bg-white">
            <iframe
              src={clinicConfig.googleMapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block"
            />
          </div>

          {/* Action Link Button matching section width */}
          <a
            href={clinicConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-white font-medium text-xl bg-brand hover:bg-brand/90 transition-all cursor-pointer shadow-md shadow-brand/10"
          >
            <MapPin className="w-5 h-5 shrink-0" />
            <span>{t.directions}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Map;