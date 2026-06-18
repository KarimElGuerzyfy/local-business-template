# 🦷 Clinic Fez — Local Business Website Template

A high-performance, fully bilingual (FR/AR) static website template built for local clinics and medical professionals in Fez, Morocco. Designed to convert mobile visitors into appointments through frictionless CTAs, trust signals, and a clean modern UI.

---

## 🚀 Live Demo

**Client:** Dr. Amine Marbouh — Dentiste & Orthodontiste, Fès  
**Repository:** [KarimElGuerzyfy/local-business-template](https://github.com/KarimElGuerzyfy/local-business-template)  
**Deployment:** Vercel

---

## 📋 Features

- ⚡ **Lightning-fast** static site generation via Next.js App Router
- 🌍 **Bilingual FR/AR** with full RTL support — language toggle built-in
- 📱 **Mobile-first** responsive design with tap-to-call CTAs
- 🎨 **Dark navy design system** with consistent design tokens
- 🗺️ **Google Maps** embed with directions button
- 📬 **Serverless contact form** via Formspree
- 💬 **WhatsApp integration** for direct patient contact
- ♿ **Accessible** semantic HTML with proper ARIA attributes
- 🔄 **Reusable template** — duplicate folder per client, edit one config file

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 App Router | Framework + Static Site Generation |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling with design tokens |
| `next/font/google` | Optimized font loading (Hind + Cairo) |
| `lucide-react` | Icon library |
| `next/image` | Optimized image rendering |
| Formspree | Serverless contact form |
| Vercel | CDN deployment |

---

## 📁 Project Structure

```
clinic-fez/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Sticky header with logo and CTA
│   │   ├── Nav.tsx             # Desktop nav + mobile fullscreen menu
│   │   ├── Hero.tsx            # Hero section with stats and marquee
│   │   ├── Services.tsx        # Horizontal carousel of service cards
│   │   ├── ServiceCard.tsx     # Reusable service card component
│   │   ├── Testimonials.tsx    # Patient reviews carousel
│   │   ├── TestimonialCard.tsx # Reusable testimonial card component
│   │   ├── Contact.tsx         # Contact section with background SVG
│   │   ├── ContactForm.tsx     # Formspree-powered contact form
│   │   ├── ContactInfo.tsx     # Email, phone, WhatsApp, hours panel
│   │   ├── Map.tsx             # Google Maps embed + directions button
│   │   └── Footer.tsx          # Three-column footer with nav links
│   ├── LanguageContext.tsx     # Global FR/AR language state
│   ├── globals.css             # Design tokens + animations
│   ├── layout.tsx              # Root layout with fonts
│   └── page.tsx                # Main page assembly
├── public/
│   ├── logo.svg
│   ├── globe.svg
│   ├── doctor.svg
│   ├── hero-bg.svg
│   ├── contact/
│   │   ├── contact-bg.svg
│   │   └── whatsapp-logo.svg
│   └── services/
│       ├── diagnostic.jpg
│       ├── decay.jpg
│       ├── orthodontie.jpg
│       ├── whitening.jpg
│       ├── implant.jpg
│       ├── removal.jpg
│       ├── crowns.jpg
│       └── kids.jpg
├── clinic.config.ts            # ← All client data lives here
└── next.config.ts
```

---

## ⚙️ Configuration

All client-specific data lives in **`clinic.config.ts`** at the project root. To reuse this template for a new client:

1. Duplicate the project folder
2. Edit `clinic.config.ts` with the new client's data
3. Replace images in `/public/services/` and `/public/logo.svg`
4. Push to a new GitHub repo and deploy to Vercel

### Config fields reference

```typescript
clinicConfig.name[lang]           // Doctor name (FR/AR)
clinicConfig.clinicName[lang]     // Clinic name
clinicConfig.specialty[lang]      // Specialty string
clinicConfig.phone                // Phone number
clinicConfig.whatsapp             // WhatsApp number
clinicConfig.email                // Email address
clinicConfig.formspreeEndpoint    // Formspree form URL
clinicConfig.address[lang]        // Full address
clinicConfig.neighborhood[lang]   // Short neighborhood
clinicConfig.googleMapsUrl        // Google Maps link
clinicConfig.googleMapsEmbed      // Google Maps embed URL
clinicConfig.since                // Year opened
clinicConfig.tagline[lang]        // Short tagline
clinicConfig.stats[lang]          // Array of stat objects
clinicConfig.hours[lang]          // Array of opening hours
clinicConfig.trustMessage[lang]   // Trust strip message
clinicConfig.insurance            // Accepted insurance badges
clinicConfig.rating               // Google rating info
clinicConfig.serviceImages        // Array of service image paths
clinicConfig.services[lang]       // Array of service objects
clinicConfig.testimonials[lang]   // Array of patient reviews
```

---

## 🎨 Design System

All design tokens are defined in `app/globals.css` inside the `@theme` block:

```css
--color-brand: #001841;      /* Navy — primary background */
--color-accent: #CBDFE4;     /* Light blue — buttons, accents */
--color-lightbg: #EEEDFF;    /* Light purple — section backgrounds */
--color-menubtn: #96BFC8;    /* Mobile menu button color */
--color-muted: #BCBCBC;      /* Muted grey text */
```

**Never hardcode hex values in components** — always use design tokens.

---

## 🌍 Bilingual / RTL Support

Language state is managed via `LanguageContext.tsx`:

```typescript
const { lang, toggleLanguage, isRTL } = useLanguage() as {
  lang: "fr" | "ar";
  toggleLanguage: () => void;
  isRTL: boolean;
};
```

- `lang` — current language (`"fr"` or `"ar"`)
- `isRTL` — `true` when Arabic is active
- `toggleLanguage()` — switches between FR and AR

---

## 🎬 Animations

Two marquee animations defined in `globals.css`:

```css
/* Hero address strip */
@utility animate-marquee-hero {
  animation: marquee-ltr 50s linear infinite;
}

/* Insurance strip */
@utility animate-marquee-services {
  animation: marquee-ltr 80s linear infinite;
}
```

Adjust the duration values to control scroll speed.

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🚢 Deployment

This project is deployed on **Vercel**. Every push to `main` triggers an automatic deployment.

```bash
# Deploy manually
vercel --prod
```

---

## 👥 Credits

**Design:** Driss Bourkkadi  
**Development:** Karim El Guerzyfy

---

## 📄 License

This template is proprietary. All rights reserved.  
© 2026 Karim El Guerzyfy
