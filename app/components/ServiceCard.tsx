"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageContext";
import {
  Stethoscope,
  Shield,
  AlignCenter,
  Sparkles,
  Anchor,
  Scissors,
  Circle,
  Heart,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  shield: Shield,
  "align-center": AlignCenter,
  sparkles: Sparkles,
  anchor: Anchor,
  scissors: Scissors,
  circle: Circle,
  heart: Heart,
};

type ServiceCardProps = {
  image: string;
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ image, icon, title, description }: ServiceCardProps) => {
  const { isRTL } = useLanguage() as { isRTL: boolean };
  
  // Resolve component dynamically, fallback cleanly to Stethoscope component reference
  const IconComponent = iconMap[icon] || Stethoscope;

  return (
    <div className="rounded-2xl overflow-hidden border-2 border-brand bg-brand flex flex-col w-full">
      {/* Photo area with overlay */}
      <div className="relative w-full h-52">
        <Image
          src={image}
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
        {/* Dark gradient overlay at bottom of photo */}
        <div className="absolute inset-0 bg-linear-to-t from-brand/90 via-brand/30 to-transparent" />
        
        {/* Responsive, Bi-directional (RTL/LTR) Icon pill + title */}
        <div className={`absolute bottom-3 flex flex-col gap-1 px-3 w-full ${isRTL ? "right-0 text-right" : "left-0 text-left"}`}>
          <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0">
            <IconComponent className="w-5 h-5 text-brand" />
          </div>
          <h3 className="text-white font-bold text-base leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Description area */}
      <div className="px-4 py-3 flex-grow flex items-center justify-center">
        <p className="text-accent text-sm text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;