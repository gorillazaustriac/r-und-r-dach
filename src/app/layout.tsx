import type { Metadata } from "next";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/500.css";
import "@fontsource/source-sans-3/600.css";
import "@fontsource/source-sans-3/700.css";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/600.css";
import "@fontsource/source-serif-4/700.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ConsentManager } from "@/components/consent-manager";
import { FloatingEmailButton, WhatsAppButton } from "@/components/actions";
import { JsonLd } from "@/lib/seo";
import { googleSiteVerification, indexingEnabled, site, siteUrl } from "@/config/site";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "Rundrdach – Dacharbeiten in Berlin", template: "%s | Rundrdach" },
  description:
    "Rundrdach in Berlin: Dacheindeckung, Dachreparatur, Dachabdichtung, Dachsanierung und weitere Dachleistungen. Ihr Dachprojekt verständlich planen und ein Angebot anfragen.",
  applicationName: site.name,
  robots: { index: indexingEnabled, follow: indexingEnabled },
  // Search Console token is omitted until a .de property is verified.
  ...(googleSiteVerification ? { verification: { google: googleSiteVerification } } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Schema uses the published Berlin address and phone. No company register is attached.
  const businessReady = siteUrl && site.street && site.postalCode && site.phone;
  return (
    <html lang="de-DE" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* Floating contact stack — E-Mail above WhatsApp, fixed bottom-right. */}
        <div className="floating-actions">
          <FloatingEmailButton />
          <WhatsAppButton />
        </div>
        <ConsentManager />
        {businessReady && (
          <JsonLd
            value={{
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "@id": siteUrl + "/#business",
              name: site.name,
              url: siteUrl,
              telephone: site.phone,
              ...(site.email ? { email: site.email } : {}),
              address: {
                "@type": "PostalAddress",
                streetAddress: site.street,
                postalCode: site.postalCode,
                addressLocality: site.city,
                addressCountry: site.countryCode,
              },
              areaServed: { "@type": "City", name: site.city },
              ...(site.socialLinks.length ? { sameAs: site.socialLinks } : {}),
            }}
          />
        )}
      </body>
    </html>
  );
}
