/**
 * Google Analytics 4 Event Tracking
 * Add your GA_ID in environment variables
 */

interface EventParams {
  [key: string]: string | number | boolean
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

/**
 * Event tracking functions for Dente Altius
 */

export const analyticsEvents = {
  // CTA Clicks
  bookingCTAClicked: () =>
    trackEvent('booking_cta_clicked', {
      section: 'unknown',
    }),

  bookingCTAClickedFrom: (section: string) =>
    trackEvent('booking_cta_clicked', {
      section,
    }),

  // Modal Events
  bookingModalOpened: (source: string) =>
    trackEvent('booking_modal_opened', { source }),

  bookingModalSubmitted: () => trackEvent('booking_form_submitted'),

  bookingModalClosed: () => trackEvent('booking_modal_closed'),

  // Navigation
  navigationClicked: (link: string) =>
    trackEvent('navigation_clicked', { link }),

  phoneButtonClicked: () => trackEvent('phone_button_clicked'),

  // Contact Form
  contactFormSubmitted: () => trackEvent('contact_form_submitted'),

  contactFormAbandoned: () => trackEvent('contact_form_abandoned'),

  // Scroll Events
  sectionViewed: (sectionName: string) =>
    trackEvent('section_viewed', {
      section: sectionName,
    }),

  // Pricing
  pricingPlaneViewed: (planName: string) =>
    trackEvent('pricing_plan_viewed', {
      plan: planName,
    }),

  // Testimonials
  testimonialsViewed: () => trackEvent('testimonials_viewed'),

  // FAQ
  faqItemOpened: (question: string) =>
    trackEvent('faq_item_opened', {
      question,
    }),

  // Links
  externalLinkClicked: (url: string) =>
    trackEvent('external_link_clicked', {
      url,
    }),

  internalLinkClicked: (url: string) =>
    trackEvent('internal_link_clicked', {
      url,
    }),

  // Page Views (auto-tracked by GA4 in Next.js)
  pageViewed: (pagePath: string) =>
    trackEvent('page_viewed', {
      page_path: pagePath,
    }),
}

// Extend window object for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
