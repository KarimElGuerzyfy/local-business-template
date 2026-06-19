"use client";

import { useLanguage } from "../LanguageContext";
import { Star, Quote } from "lucide-react";

type TestimonialCardProps = {
  text: string;
  author: string;
};

const TestimonialCard = ({ text, author }: TestimonialCardProps) => {
  const { isRTL } = useLanguage() as { isRTL: boolean };

  const cleanAuthor = author?.trim() || "?";
  const avatarLetter = cleanAuthor.charAt(0).toUpperCase();

  return (
    <div className="w-70 h-75 rounded-3xl bg-white flex flex-col shrink-0 scroll-snap-align-start p-4 shadow-[8px_8px_10px_0px_rgba(0,0,0,0.1)] mb-4">

      <div className="flex items-start justify-between flex-row">
        {/* Avatar circle with initial */}
        <div className="w-10.5 h-10.5 rounded-full bg-brand flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-base">
            {avatarLetter}
          </span>
        </div>
        
        <Quote className={`w-7 h-7 text-brand/40 ${isRTL ? "scale-x-[-1]" : ""}`} />
      </div>

      <h3 className="text-brand text-xl font-semibold mt-3 w-full">
        {author}
      </h3>

      <div className="flex items-center gap-0.5 mt-1 w-full">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-brand text-base font-medium leading-tight mt-5 flex-1 overflow-y-auto">
        {text}
      </p>

    </div>
  );
};

export default TestimonialCard;