import Link from "next/link";
import { SITE, NAV_LINKS } from "../lib/config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">{SITE.name}</p>
          <p>{SITE.legalLine}</p>
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
            <br />
            {SITE.hours}
          </p>
        </div>
        <div>
          <p className="footer-heading">Pages</p>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-heading">Service Area</p>
          <p>
            Celina, TX, including Light Farms, Mustang Lakes, Lilyana, Carter
            Ranch, Sutton Fields, and the neighborhoods around the downtown
            square.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {SITE.name}. Serving Celina, Texas.</p>
      </div>
    </footer>
  );
}
