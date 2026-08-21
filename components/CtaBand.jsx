import Link from "next/link";
import { SITE } from "../lib/config";

export default function CtaBand({
  heading = "Ready for a cleaner pool?",
  sub = "Call or send the quick form. We answer fast during business hours.",
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>{heading}</h2>
        <p>{sub}</p>
        <div className="cta-actions">
          <a href={`tel:${SITE.phoneTel}`} className="btn btn-light">
            Call {SITE.phone}
          </a>
          <Link href="/contact/" className="btn btn-outline-light">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
