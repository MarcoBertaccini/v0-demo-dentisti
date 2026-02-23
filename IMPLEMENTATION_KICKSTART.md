# Dente Altius Landing Page - Implementation Kickstart Plan

## Project Overview
Premium dental clinic landing page prototype for Dente Altius. Modern, responsive, dark-themed with teal accent color. Mobile-first approach with smooth animations and glass-morphism effects.

**Status:** Prototype Phase  
**Target Users:** Italian professionals, health-conscious patients  
**Deployment:** Vercel with Next.js 15  
**No State Management:** Use placeholders for all dynamic data initially

---

## 🎨 Design System

### Color Palette (Design Tokens)
```css
/* Primary Accent */
--accent-primary: #0F766E (Teal - CTA buttons, highlights, borders)

/* Dark Theme Base */
--background: #0F172A (Very dark navy)
--surface: #1E293B (Dark navy - cards, containers)
--surface-hover: #334155 (Slightly lighter for hover states)

/* Text Colors */
--text-primary: #F8FAFC (Off-white - primary headings, body text)
--text-secondary: #CBD5E1 (Light gray - secondary text, muted descriptions)
--text-muted: #94A3B8 (Medium gray - placeholders, disabled states)

/* Glass Effect */
--glass-bg: rgba(30, 41, 59, 0.7) (surface at 70% opacity)
--glass-border: rgba(148, 163, 184, 0.1) (border with subtle visibility)
```

### Typography
- **Font Family:** Geist Sans (primary), Geist Mono (code/numbers)
- **Heading Scale:** 48px (H1) → 32px → 24px → 20px
- **Body Text:** 16px (line-height: 1.6)
- **Small Text:** 14px
- **Font Weights:** 400 (regular), 600 (semibold), 700 (bold)

### Glass Morphism Cards
- Background: `rgba(30, 41, 59, 0.7)` with backdrop blur
- Border: `1px solid rgba(148, 163, 184, 0.1)`
- Hover: Slight background increase to `rgba(30, 41, 59, 0.9)` + shadow
- Transitions: `all 300ms cubic-bezier(0.4, 0, 0.2, 1)`

### Responsive Breakpoints
- **Mobile:** `< 640px` (default)
- **Tablet:** `640px - 1024px`
- **Desktop:** `> 1024px`

---

## 📐 Component Architecture

### File Structure (Keep Components < 600 LOC)
```
components/
├── layout/
│   ├── Header.tsx (150 LOC)
│   ├── Navigation.tsx (120 LOC)
│   ├── MobileMenu.tsx (100 LOC)
│   ├── Footer.tsx (180 LOC)
│   └── BackToTop.tsx (80 LOC)
├── sections/
│   ├── HeroSection.tsx (150 LOC)
│   ├── FeaturesSection.tsx (180 LOC)
│   ├── TestimonialsSection.tsx (200 LOC)
│   ├── PricingSection.tsx (180 LOC)
│   ├── TrustSection.tsx (140 LOC)
│   ├── FAQSection.tsx (160 LOC)
│   └── CTASection.tsx (120 LOC)
├── modals/
│   ├── BookingModal.tsx (200 LOC)
│   └── Modal.tsx (80 LOC - reusable wrapper)
├── cards/
│   ├── FeatureCard.tsx (80 LOC - glass effect)
│   ├── TestimonialCard.tsx (100 LOC - glass effect)
│   ├── PricingCard.tsx (120 LOC - glass effect)
│   └── TrustCard.tsx (70 LOC - glass effect)
└── ui/
    ├── Button.tsx (60 LOC - primary, secondary variants)
    ├── Carousel.tsx (150 LOC - testimonials carousel)
    └── Accordion.tsx (140 LOC - FAQ accordion)

app/
├── layout.tsx (updated with metadata, fonts, GA4)
├── page.tsx (main landing page - 50 LOC)
├── contact/
│   ├── page.tsx (contact form page - 120 LOC)
│   └── ContactForm.tsx (140 LOC)
├── api/
│   ├── contact/route.ts (placeholder for future email)
│   └── analytics/route.ts (GA4 event tracking)
└── globals.css (design tokens, base styles, glass effects)
```

---

## 🎬 Animation Strategy

### Scroll Animations (Intersection Observer)
- **Fade-in-up:** Sections fade in as they enter viewport (delay: 0.1s increments)
- **Scale-in:** Cards scale from 0.95 to 1 on scroll
- **Slide-in-left/right:** Alternating sections slide in from sides
- **Stagger effect:** Child elements animate with 50ms delays

### Interactive Animations
- **Button hover:** Scale 1.05 + shadow deepening (200ms)
- **Card hover:** Glass effect background increase + slight lift (200ms)
- **Smooth scroll:** Back-to-top button, section jumps
- **Carousel transitions:** 400ms ease-in-out
- **Modal entrance:** Fade + scale (200ms)
- **Menu toggle:** Hamburger rotation + slide animation (250ms)

### Subtle Effects
- **Loading pulse:** Placeholder images have subtle pulse (infinite)
- **Dot pulse:** Small accent elements pulse at 2s interval
- **Gradient fade:** Text gradients fade from teal accent

### Framer Motion Implementation
```tsx
// Standard fade-in-up
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "0px 0px -100px 0px" }
}

// Stagger container for child elements
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}
```

---

## 📱 Responsive Design Approach

### Mobile-First Strategy
1. **Base Styles:** Mobile defaults (100% width, stacked layout)
2. **Tablet Breakpoint (640px):** 2-column grids, improved spacing
3. **Desktop Breakpoint (1024px):** Full multi-column layouts, max-width containers

### Navigation
- **Mobile:** Hamburger menu (3-line icon) → Overlay menu
- **Tablet:** Hamburger until 1024px
- **Desktop:** Horizontal navigation bar

### Grid Layouts
- **Features:** 1 column (mobile) → 3 columns (desktop)
- **Pricing:** 1 column (mobile) → 3 columns (desktop)
- **Testimonials:** Carousel on all screens (single visible item swapping)

### Spacing Adjustments
- **Mobile:** `p-4`, `gap-4` (16px)
- **Tablet:** `md:p-6`, `md:gap-6` (24px)
- **Desktop:** `lg:p-8`, `lg:gap-8` (32px)

---

## 🖼️ Image Generation Strategy

### Placeholder Images (To be replaced later)
All images generated via GenerateImage tool with professional dental clinic aesthetic:

1. **Hero Image** (`public/images/hero.jpg`)
   - Prompt: "Modern dental clinic interior with professional treatment room, bright lights, clean white surfaces, premium equipment"
   - Dimensions: 1920x1080, full-width hero

2. **Before/After Testimonials** (3 images)
   - `public/images/testimonial-1.jpg`: Professional headshot, smiling patient
   - `public/images/testimonial-2.jpg`: Different patient, confident smile
   - `public/images/testimonial-3.jpg`: Another patient variant

3. **Feature Icons/Images** (3 images)
   - `public/images/feature-advanced.jpg`: Advanced dental technology
   - `public/images/feature-comfort.jpg`: Comfortable clinic environment
   - `public/images/feature-expertise.jpg`: Dentist with patient

4. **Trust Section**
   - `public/images/clinic-exterior.jpg`: Clinic building front

### Image Implementation
- Use Next.js `Image` component for optimization
- `priority={true}` for hero image
- `lazy` loading for below-fold images
- `width` and `height` props for all images

---

## 🔘 CTA Strategy

### CTA Placement (Minimum 3 instances)

1. **Header Navigation** (Desktop: Top-right | Mobile: In menu)
   - "Prenota Check-up Gratis" → Opens booking modal
   - Button style: Primary teal background

2. **Hero Section** (Prominent below headline)
   - "Prenota Check-up Gratis" → Opens booking modal
   - Size: Large (48px height)

3. **Features Section** (End of features)
   - Secondary CTA: "Scopri i Nostri Servizi" → Scrolls to pricing
   - Or: Another "Prenota" button

4. **Testimonials Section** (Below carousel)
   - "Inizia il Tuo Percorso" → Opens booking modal

5. **Pricing Section** (On each pricing card)
   - "Scegli Questo Piano" → Opens booking modal with pre-selected plan
   - Button style: Outline teal on teal card, filled on others

6. **Footer CTA**
   - Final "Prenota Oggi" button → Opens booking modal
   - Contact link → Links to `/contact` page

### Modal Behavior
- Opens on CTA click with smooth fade-in
- Contains form fields: Name, Phone, Email, Preferred Date, Service Type
- Success message on submit (placeholder, no actual email yet)
- Close button + escape key to close

---

## 📞 Contact Page (`/contact`)

### Structure
- Similar header/footer to landing page
- Full-width contact form (left) + Contact info (right) on desktop, stacked mobile
- Form fields: Name, Email, Phone, Message
- Validation + success/error states
- No submission processing yet (placeholder)

### Glass Effect Applied
- Form container: Glass morphism card
- Input fields: Dark background with subtle border

---

## 🔝 Back-to-Top Button

- Fixed position (bottom-right, `24px` from edges)
- Only visible after 300px scroll
- Smooth scroll to top (1s duration)
- Hover animation: Scale + color change to accent
- Z-index: Ensure visibility above all content

---

## 📊 SEO Optimization

### Meta Tags (layout.tsx)
- `title`: "Dente Altius | Clinica Dentale Premium a Roma"
- `description`: "Scopri la clinica dentale di eccellenza con tecnologie avanzate e professionisti esperti"
- `keywords`: "dentista, clinica dentale, Roma, implantologia, estetica dentale"

### Structured Data (JSON-LD)
- Organization schema (clinic details, address, phone)
- LocalBusiness schema (location, hours, services)
- BreadcrumbList schema (for contact page)

### On-Page SEO
- Semantic HTML (heading hierarchy, sections)
- Alt text on all images
- Descriptive button text ("Prenota Check-up" not "Click here")
- Mobile-friendly viewport meta tag

---

## 🔍 Google Analytics 4 Setup

### Events to Track
- `button_click`: CTA button clicks (track which section)
- `modal_open`: Booking modal opens
- `form_submit`: Contact form submissions
- `page_scroll`: Scroll depth tracking
- `link_click`: Footer/contact page links

### Implementation
- GA4 script in layout.tsx (via gtag)
- Custom event wrapper utility function
- Track at component level (non-invasive)

---

## 🛠️ Technical Stack

### Dependencies (To Add)
```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "framer-motion": "^11.0.0",
  "embla-carousel-react": "^8.0.0",
  "@radix-ui/react-accordion": "^1.0.0",
  "@radix-ui/react-dialog": "^1.0.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "next-themes": "^0.2.0"
}
```

### Removed/Not Needed
- No Redux or complex state management
- No backend database (placeholders only)
- No email service (future implementation)

---

## 🎯 Implementation Sequence

### Phase 1: Foundation (Design System + Layout)
- [ ] Update `globals.css` with design tokens
- [ ] Update `layout.tsx` with metadata, fonts (Geist), GA4
- [ ] Create `tailwind.config.ts` with design tokens
- [ ] Create base reusable components: Button, Carousel, Accordion

### Phase 2: Core Components
- [ ] Header + Navigation + MobileMenu
- [ ] Footer
- [ ] Modal wrapper + BookingModal
- [ ] Glass effect cards (FeatureCard, TestimonialCard, PricingCard)

### Phase 3: Sections
- [ ] HeroSection
- [ ] FeaturesSection
- [ ] TestimonialsSection
- [ ] PricingSection
- [ ] TrustSection
- [ ] FAQSection
- [ ] CTASection

### Phase 4: Utilities & Polish
- [ ] Generate all placeholder images
- [ ] BackToTop component
- [ ] Scroll animations (Framer Motion)
- [ ] Contact page + ContactForm
- [ ] API routes (placeholder)

### Phase 5: Testing & Optimization
- [ ] Responsive design testing (mobile, tablet, desktop)
- [ ] Animation performance review
- [ ] GA4 event tracking verification
- [ ] Color contrast review (accessibility)
- [ ] SEO meta tags verification

---

## 📋 Component-Level Implementation Notes

### Reusability & Future-Proofing
- **Props-based configuration:** All components accept props for text, colors, states
- **Variant system:** Buttons support `variant="primary" | "secondary" | "outline"`
- **Flexible layouts:** Cards support flexible sizing and content
- **No hardcoded data:** All text, colors, spacing via props/config files

### Short Files (< 600 LOC)
- Split complex sections into smaller sub-components
- Keep styling in Tailwind classes, not inline CSS
- Use shared utilities for animation configs
- Organize props interfaces at top of each file

### Example File Pattern
```tsx
// components/cards/FeatureCard.tsx
import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-surface/50 backdrop-blur-md border border-glass-border rounded-lg p-6 hover:bg-surface-hover transition-colors"
    >
      {/* Content */}
    </motion.div>
  )
}
```

---

## ✅ Validation Checklist

Before marking implementation complete:
- [ ] All components render without errors
- [ ] Responsive design works on mobile (320px), tablet (768px), desktop (1024px+)
- [ ] Animations smooth (60fps, no jank)
- [ ] Images load fast (optimized via Next.js Image)
- [ ] Glass effects render properly (check browser support)
- [ ] Color contrast passes WCAG AA (8 CTA instances tested)
- [ ] All 6+ CTAs functional (open modal or navigate)
- [ ] Back-to-top smooth scroll works
- [ ] Contact page fully responsive
- [ ] GA4 events fire correctly
- [ ] SEO tags present and accurate
- [ ] No console errors

---

## 📝 Future Implementation Notes

### Phase 2 (Post-Prototype)
- Replace placeholder images with real clinic photos
- Integrate Google Business API for live review ratings
- Add email service for contact form & booking confirmations
- Implement appointment booking system backend
- Add patient testimonial database
- Replace hardcoded pricing with dynamic data

### Phase 3 (Production)
- Add SSL/security headers
- Implement rate limiting on contact API
- Add GDPR compliance features
- Create admin dashboard for content management
- Add multi-language support (EN/IT toggle)

---

## 🚀 Ready to Build

This plan outlines:
✅ Complete design system with glass effects and teal accent  
✅ Fully responsive mobile-first approach with burger menu  
✅ Subtle scroll & hover animations throughout  
✅ Organized component architecture (< 600 LOC each)  
✅ Image generation strategy for placeholders  
✅ 6+ CTA placements across landing page  
✅ Contact page with separate route  
✅ SEO optimization strategy  
✅ GA4 event tracking setup  
✅ Back-to-top smooth scroll  

**Next Step:** Begin Phase 1 implementation

