"use client";

import { useState, useEffect, FormEvent } from "react";
import { useLanguage } from "../LanguageContext";
import clinicConfig from "@/clinic.config";

const ContactForm = () => {
  const { lang, isRTL } = useLanguage() as {
    lang: "fr" | "ar";
    isRTL: boolean;
  };
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const labels = {
    fr: {
      formTitle: "Contactez-nous",
      name: "Votre Nom",
      namePlaceholder: "Ex: Khalid",
      email: "Email",
      emailPlaceholder: "nom@exemple.com",
      phone: "Numéro de Téléphone",
      phonePlaceholder: "+212 600 00 00 00",
      message: "Message",
      messagePlaceholder: "Laissez-nous votre message ici...",
      privacy: "Vous acceptez notre politique de confidentialité.",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      success: "Message envoyé ! Nous vous contacterons bientôt.",
    },
    ar: {
      formTitle: "تواصل معنا",
      name: "الاسم",
      namePlaceholder: "مثال: خالد",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@company.com",
      phone: "رقم الهاتف",
      phonePlaceholder: "+212 624 96 584",
      message: "الرسالة",
      messagePlaceholder: "اترك لنا رسالة",
      privacy: "أنت توافق على سياسة الخصوصية.",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال رسالتك! سنتواصل معك قريباً.",
    },
  };

  const t = labels[lang] || labels.fr;

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!clinicConfig.formspreeEndpoint) return;
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
        setChecked(false);
        form.reset();
      }
    } catch {
      console.error("Form submission error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="flex flex-col gap-6 w-full">
      <h3 className="text-accent font-bold text-4xl">{t.formTitle}</h3>

      {submitted ? (
        <div className="flex items-center justify-center h-64 text-center border border-accent/20 rounded-xl bg-white/5 px-4 animate-fade-in">
          <p className="text-accent font-semibold text-base">{t.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-accent text-xl font-medium">{t.name}</label>
            <input
              type="text"
              name="name"
              placeholder={t.namePlaceholder}
              required
              dir={isRTL ? "rtl" : "ltr"}
              className="w-full bg-white rounded-xl px-4 py-3 text-base text-brand placeholder-brand/60 font-medium focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-accent text-xl font-medium">{t.email}</label>
            <input
              type="email"
              name="email"
              placeholder={t.emailPlaceholder}
              required
              dir={isRTL ? "rtl" : "ltr"}
              className="w-full bg-white rounded-xl px-4 py-3 text-base text-brand placeholder-brand/60 font-medium focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-accent text-xl font-medium">{t.phone}</label>
            <input
              type="tel"
              name="phone"
              placeholder={t.phonePlaceholder}
              required
              dir="ltr"
              className={`w-full bg-white rounded-xl px-4 py-3 text-base text-brand placeholder-brand/60 font-medium focus:outline-none ${
                isRTL ? "text-right" : "text-left"
              }`}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-accent text-xl font-medium">{t.message}</label>
            <textarea
              name="message"
              placeholder={t.messagePlaceholder}
              required
              rows={5}
              dir={isRTL ? "rtl" : "ltr"}
              className="w-full bg-white rounded-xl px-4 py-3 text-base text-brand placeholder-brand/60 font-medium focus:outline-none resize-none"
            />
          </div>

          {/* Custom Checkbox Layout Wrapper */}
          <div className="flex items-center gap-3 select-none">
            <div
              onClick={() => setChecked(!checked)}
              className={`w-6 h-6 rounded-lg border-2 border-white flex items-center justify-center cursor-pointer shrink-0 transition-all ${
                checked ? "bg-white/10" : "bg-transparent"
              }`}
            >
              {checked && (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            
            <input 
              type="checkbox" 
              id="privacy-agreement" 
              checked={checked} 
              onChange={(e) => setChecked(e.target.checked)} 
              required 
              className="hidden" 
            />
            
            <label htmlFor="privacy-agreement" className="text-accent text-lg cursor-pointer">
              {t.privacy}
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-bold text-xl bg-[#FFBA00] text-brand hover:bg-[#FFBA00]/90 transition-all disabled:opacity-60 cursor-pointer"
          >
            {loading ? t.sending : t.send}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;