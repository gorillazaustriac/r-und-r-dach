export const site = {
  name: "Rundrdach",
  city: "Berlin",
  // Bezirk of the published business address, shown beside the street on Standort cards.
  district: "Tempelhof-Schöneberg",
  country: "Deutschland",
  countryCode: "DE",
  locale: "de_DE",
  serviceArea: ["Berlin"],
  // Display format for the phone; WhatsApp expects digits only for wa.me.
  phone: "+49 152 16870987",
  whatsapp: "+4915216870987",
  // Business contact — used in footer, Kontakt, Impressum and schema.
  email: "Dach2021gmbh@gmail.com",
  street: "Attilastraße 158",
  postalCode: "12105",
  openingHours: "",
  socialLinks: [] as string[],
  // Set true after checking the offered materials and services with the business.
  contentApproved: false,
};

function validSiteUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || !url.hostname.includes(".") || url.hostname === "localhost" || url.username || url.password) return null;
    return url.origin;
  } catch { return null; }
}

/** Production domain for canonicals, sitemap, Open Graph and JSON-LD. */
const PRODUCTION_SITE_URL = "https://www.r-und-r-dach.de";

export const siteUrl = validSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ?? PRODUCTION_SITE_URL;
// Indexing stays on for production unless explicitly disabled; Vercel previews remain noindex.
export const indexingEnabled = Boolean(
  siteUrl &&
    process.env.NEXT_PUBLIC_INDEXING_ENABLED !== "false" &&
    (process.env.VERCEL_ENV === undefined || process.env.VERCEL_ENV === "production"),
);
export const gtmId = /^GTM-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GTM_ID ?? "") ? process.env.NEXT_PUBLIC_GTM_ID! : "";
// No Ads account is bundled with the Germany site. A tag loads only from a valid env ID.
export const googleAdsId = /^AW-\d+$/.test(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "")
  ? process.env.NEXT_PUBLIC_GOOGLE_ADS_ID!
  : "";
// Conversion labels stay empty so this site cannot send the Austrian Ads actions.
export const adsConversions = {
  phone: "",
  whatsapp: "",
  email: "",
} as const;
// Search Console token is omitted until a Germany property supplies one. Never fall back to the Austria token.
export const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";
export const contactReady = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL && process.env.CONTACT_TO_EMAIL);
export const phoneHref = /^\+?[0-9 ()/-]{7,}$/.test(site.phone) ? "tel:" + site.phone.replace(/[^+\d]/g, "") : null;
// Opens the visitor's mail client with the business address and a concrete subject.
export const mailtoHref = site.email
  ? "mailto:" + site.email + "?subject=" + encodeURIComponent("Anfrage Dacharbeiten Berlin")
  : null;
// Pre-filled German greeting keeps the first WhatsApp message concrete for Berlin roofing enquiries.
const whatsappDigits = site.whatsapp.replace(/\D/g, "");
export const whatsappHref = /^\+?\d{8,15}$/.test(site.whatsapp)
  ? "https://wa.me/" +
    whatsappDigits +
    "?text=" +
    encodeURIComponent("Guten Tag, ich interessiere mich für Dacharbeiten in Berlin und hätte gerne eine kurze Beratung.")
  : null;
