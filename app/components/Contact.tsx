"use client";
import { useState, FormEvent } from "react";
import { useLanguage } from "../LanguageContext";
import clinicConfig from "../../clinic.config";
import { Phone, Clock, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { lang, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const hours = clinicConfig.hours?.[lang] || [];

  const labels = {
    fr: {
      title: "Contact",
      hoursTitle: "Horaires d'ouverture",
      formTitle: "Laisser un message",
      name: "Nom complet",
      phone: "Téléphone",
      message: "Message",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      success: "Message envoyé ! Nous vous contacterons bientôt.",
      directions: "Obtenir l'itinéraire",
      callNow: "Appeler maintenant",
      whatsapp: "WhatsApp",
    },
    ar: {
      title: "التواصل",
      hoursTitle: "ساعات العمل",
      formTitle: "أرسل رسالة",
      name: "الاسم الكامل",
      phone: "الهاتف",
      message: "الرسالة",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال رسالتك! سنتواصل معك قريباً.",
      directions: "الحصول على الاتجاهات",
      callNow: "اتصل الآن",
      whatsapp: "واتساب",
    },
  };

  const t = labels[lang] || labels.fr;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!clinicConfig.formspreeEndpoint) {
      console.error("Formspree endpoint is missing in config");
      return;
    }

    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(clinicConfig.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      console.error("Form submission error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t.title}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-teal-600" />
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* Left Column: Hours + Call + WhatsApp */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-teal-600" />
                <h3 className="text-lg font-bold text-gray-900">{t.hoursTitle}</h3>
              </div>
              <div className="flex flex-col gap-3">
                {hours.map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-sm font-medium text-gray-600">{item.days}</span>
                    <span className="text-sm font-bold text-gray-900">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 flex-shrink-0 text-teal-600" />
                <span>{clinicConfig.address?.[lang] || ""}</span>
              </div>

              <a
                href={`tel:${clinicConfig.phone}`}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white font-bold text-lg bg-teal-600 shadow-lg shadow-teal-600/10 hover:bg-teal-700 transition-all text-center"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                <span dir="ltr">{clinicConfig.phone}</span>
              </a>

              <a
                href={`https://wa.me/${clinicConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all text-center"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489.1694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{t.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-5 h-5 flex-shrink-0 text-teal-600" />
              <h3 className="text-lg font-bold text-gray-900">{t.formTitle}</h3>
            </div>

            {submitted ? (
              <div className="flex items-center justify-center h-48 text-center">
                <p className="text-teal-600 font-semibold text-base">{t.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t.name}
                  required
                  dir="auto"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.phone}
                  required
                  dir="auto"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors"
                />
                <textarea
                  name="message"
                  placeholder={t.message}
                  required
                  rows={4}
                  dir="auto"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-white font-bold text-sm bg-teal-600 hover:bg-teal-700 transition-all disabled:opacity-60"
                >
                  {loading ? t.sending : t.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;