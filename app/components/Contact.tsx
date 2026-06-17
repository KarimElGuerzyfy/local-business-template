"use client";

import { useLanguage } from "../LanguageContext";
import Image from "next/image";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const { isRTL } = useLanguage() as { isRTL: boolean };

  return (
    <section
      id="contact"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-full bg-brand pt-16 pb-20 text-white overflow-hidden"
    >
      {/* Optimized Background Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image 
          src="/contact/contact-bg.svg" 
          alt="" 
          role="presentation" 
          fill
          priority
          className="object-cover select-none" 
        />
      </div>

      {/* Structural Layer Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-accent">
            Contact
          </h2>
          <div className="mt-8 mx-auto w-full h-px bg-white" />
        </div>

        {/* Symmetrical Two Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="w-full">
            <ContactForm />
          </div>
          <div className="w-full">
            <ContactInfo />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;