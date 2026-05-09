# IMPLEMENTATION PLAN - SEO, AEO & GEO

This document outlines the strategic implementation plan to bring the **Dente Altius** website to "perfect conditions" for Search Engine Optimization (SEO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO).

## 🎯 Priority Checklist

### 1. Structural SEO & Crawlability (SEO)
- [x] **robots.txt**: Create `app/robots.txt` or `app/robots.ts` to guide search engine crawlers, allowing indexing of public pages and blocking private routes.
- [x] **XML Sitemap**: Create `app/sitemap.ts` to automatically generate a dynamic sitemap for Google Search Console, ensuring all routes (`/`, `/contact`, etc.) are indexed.
- [x] **Canonical URLs**: Add `alternates: { canonical: 'https://dentealtius.it' }` to the main layout to prevent duplicate content penalizations.

### 2. Advanced Metadata & OpenGraph (SEO / Social)
- [x] **Twitter Cards**: Add Twitter-specific metadata (`twitter:card`, `twitter:image`, etc.) to `layout.tsx`.
- [x] **Default OpenGraph Image**: Add an `og:image` reference so links shared on WhatsApp, LinkedIn, or Facebook generate an attractive visual preview.
- [x] **Refined Page Titles/Descriptions**: Ensure dynamic or distinct metadata for secondary pages like `/contact` to avoid duplicate titles.

### 3. Answer & Generative Engine Optimization (AEO / GEO)
*AI tools (like Perplexity, ChatGPT Search, Google SGE) rely on Structured Data (JSON-LD) to understand context and extract facts.*
- [x] **LocalBusiness / MedicalClinic Schema**: Inject JSON-LD in the `RootLayout` defining the clinic's name, address (Milano), phone number, opening hours, and geo-coordinates.
- [x] **FAQPage Schema**: Inject JSON-LD into the `FAQ` component. This allows AI engines to directly parse and display your questions/answers in search results.
- [x] **Review Schema**: Inject AggregateRating JSON-LD in the `Trust` or `Testimonials` component to show the "4.9/5" rating directly in search engine snippets.

### 4. Semantic strictness & Accessibility (A11y / GEO)
*AI engines parse document structure to determine relevance and hierarchy.*
- [x] **Heading Hierarchy Audit**: Ensure there is only one `<h1>` per page (Hero section), followed by sequential `<h2>` and `<h3>` tags without skipping levels.
- [x] **Descriptive Alt Text**: Audit all `<Image>` tags. Update generic alt texts (e.g., "Team") to highly descriptive, context-rich texts (e.g., "Team di dentisti professionisti nello studio Dente Altius a Milano").
- [x] **ARIA Labels**: Ensure all interactive elements (buttons, modals, sliders) have clear `aria-label` or `aria-expanded` attributes for screen readers and AI parsers.

### 5. Performance & Core Web Vitals
- [x] **Image Preloading**: Ensure LCP (Largest Contentful Paint) images, like the Hero background, use `priority={true}` in Next.js `<Image>`.
- [x] **Font Optimization**: Verify `next/font/google` is fully utilized without render-blocking behavior.

---

## 🚀 Execution Strategy
Once approved, the implementation will begin by creating the required base files (`sitemap.ts`, `robots.txt`), followed by injecting the JSON-LD schemas into the respective React components, and finally auditing the HTML semantics.
