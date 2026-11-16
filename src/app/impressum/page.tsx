import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/config/site";

export const metadata = pageMetadata(
  "Impressum",
  "Impressum von Rundrdach in Berlin: Anschrift und Kontakt.",
  "/impressum",
);

export default function Page() {
  return (
    <LegalPage title="Impressum" href="/impressum">
      {/* Public contact details for the Berlin site. No company register is shown. */}
      <h2>Kontakt</h2>
      <dl className="legal-dl">
        <dt>Marke</dt>
        <dd>{site.name}</dd>
        <dt>Anschrift</dt>
        <dd>
          {site.street}, {site.postalCode} {site.city}, {site.country}
        </dd>
        <dt>Bezirk</dt>
        <dd>{site.district}</dd>
        <dt>Telefon</dt>
        <dd>{site.phone}</dd>
        <dt>E-Mail</dt>
        <dd>{site.email}</dd>
      </dl>
      <p>Die Seiten informieren über Dacharbeiten in {site.city} und dienen der Kontaktaufnahme.</p>
    </LegalPage>
  );
}
