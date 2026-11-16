import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal-page";

export const metadata = pageMetadata(
  "Allgemeine Geschäftsbedingungen",
  "Auf dieser Website sind noch keine verbindlichen Allgemeinen Geschäftsbedingungen veröffentlicht.",
  "/agb",
);

export default function Page() {
  return (
    <LegalPage title="AGB" href="/agb">
      <h2>Vertragsbedingungen</h2>
      <p>
        Auf dieser Website sind noch keine verbindlichen Allgemeinen Geschäftsbedingungen veröffentlicht. Eine Anfrage
        über die Website ist keine automatische Bestellung und begründet für sich allein keinen Werkvertrag.
      </p>
    </LegalPage>
  );
}
