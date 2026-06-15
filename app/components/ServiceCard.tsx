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
  const IconComponent = iconMap[icon] || Stethoscope;

  return (
    <div className="w-[302px] h-[360px] rounded-3xl overflow-hidden bg-white shadow-md flex flex-col shrink-0 scroll-snap-align-start">

      {/* Photo area — Fixed height + internal padding */}
      <div className="relative w-full h-[197px] p-2 pb-0 shrink-0">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt=""
            role="presentation"
            fill
            sizes="286px"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>

      {/* Content area — Rigid directional layout formatting */}
      <div className={`flex flex-col px-4 pt-3 pb-4 grow w-full ${isRTL ? "items-end" : "items-start"}`}>
        
        {/* Icon wrapper — Explicit directional alignment override */}
        <div className={`w-[30px] h-[30px] rounded-lg bg-brand flex items-center justify-center shrink-0 mt-3 ${isRTL ? "ml-auto" : "mr-auto"}`}>
          <IconComponent className="w-5 h-5 text-white" />
        </div>
        
        {/* Title — Full width container with text positioning */}
        <h3 className={`text-brand font-bold text-sm leading-tight mt-1 w-full ${isRTL ? "text-right" : "text-left"}`}>
          {title}
        </h3>
        
        {/* Description — Full width container with text positioning */}
        <p className={`text-[#274F94] text-[12px] font-semibold leading-normal line-clamp-2 mt-3 w-full ${isRTL ? "text-right" : "text-left"}`}>
          {description}
        </p>
      </div>

    </div>
  );
};

export default ServiceCard;