import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { Brand } from "@/components/brand";
import { mainServices, specialistServices } from "@/data/services";
import { phoneHref, site } from "@/config/site";
import { CookieSettingsButton } from "@/components/consent-manager";
import { EmailLink, PhoneLink } from "@/components/actions";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand light />
            <p>
              Dacharbeiten in {site.city}.
              <br />
              Von der ersten Frage bis zum letzten Detail.
            </p>
            <span className="footer-location">
              <MapPin size={15} />
              {site.street
                ? site.street + ", " + site.postalCode + " " + site.city
                : site.city + ", " + site.country}
            </span>
            {/* Phone number is listed in the footer on every page. */}
            {phoneHref && (
              <PhoneLink location="footer" className="footer-phone">
                <Phone size={15} aria-hidden="true" />
                {site.phone}
              </PhoneLink>
            )}
            {site.email && (
              <EmailLink location="footer" className="footer-email" href={"mailto:" + site.email}>
                <Mail size={15} aria-hidden="true" />
                {site.email}
              </EmailLink>
            )}
          </div>
          {/* Main services stay primary; hub + specialists keep crawl depth without overcrowding. */}
          <div>
            <h2>Leistungen</h2>
            {mainServices.map((service) => (
              <Link href={"/" + service.slug} key={service.slug}>
                {service.label}
                <ArrowUpRight size={12} />
              </Link>
            ))}
            <Link href="/leistungen">
              Alle Leistungen
              <ArrowUpRight size={12} />
            </Link>
          </div>
          <div>
            <h2>Spezialthemen</h2>
            {specialistServices.map((service) => (
              <Link href={"/" + service.slug} key={service.slug}>
                {service.label}
                <ArrowUpRight size={12} />
              </Link>
            ))}
          </div>
          <div>
            <h2>Rundrdach</h2>
            <Link href="/referenzen">Referenzen</Link>
            <Link href="/kontakt">Kontakt</Link>
            {phoneHref && <PhoneLink location="footer-nav">{site.phone}</PhoneLink>}
            {site.email && (
              <EmailLink location="footer-nav" href={"mailto:" + site.email}>
                {site.email}
              </EmailLink>
            )}
            {site.openingHours && <p>{site.openingHours}</p>}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Rundrdach
          </span>
          <div>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/agb">AGB</Link>
            <CookieSettingsButton />
          </div>
          <span className="footer-country">{site.city.toUpperCase()} / {site.countryCode}</span>
        </div>
      </div>
    </footer>
  );
}
