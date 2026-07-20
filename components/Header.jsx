import Link from "next/link";
import { SITE, NAV_LINKS } from "../lib/config";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">CP</span>
          <span className="logo-text">{SITE.name}</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${SITE.phoneTel}`} className="btn btn-phone">
          Call {SITE.phone}
        </a>
      </div>
    </header>
  );
}
