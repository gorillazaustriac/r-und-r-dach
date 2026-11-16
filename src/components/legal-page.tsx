import { Breadcrumb, Eyebrow } from "@/components/sections";
import { site } from "@/config/site";
export function LegalPage({ title, href, children }: { title: string; href: string; children: React.ReactNode }) {
  return <><section className="page-hero legal-hero"><div className="container"><Breadcrumb current={title} href={href}/><Eyebrow>{"RUNDRDACH · " + site.city.toUpperCase()}</Eyebrow><h1>{title}</h1></div></section><section className="section legal-section"><div className="container"><article className="legal-content">{children}</article></div></section></>;
}
