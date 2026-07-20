import { SITE } from "../../lib/config";
import QuoteForm from "../../components/QuoteForm";
import Faq from "../../components/Faq";

export const metadata = {
  title: "Contact Celina Pool Pros — Free Pool Service Quotes",
  description:
    "Get a free pool cleaning quote in Celina, TX. Call or send the form — we respond the same business day, Monday through Saturday.",
  alternates: { canonical: "/contact/" },
};

const faqItems = [
  {
    q: "How fast will I hear back?",
    a: "Phone calls during business hours get answered or returned the same day. Form submissions get a reply the same business day, usually within a couple of hours.",
  },
  {
    q: "What should I have ready when I call?",
    a: "Your neighborhood, roughly how big the pool is, and what's going on with it. Photos help a lot for cleanup and repair quotes — we can often price from good photos without a first visit.",
  },
  {
    q: "Do you charge for quotes?",
    a: "No. Quotes are free, whether it's weekly service, a one-time cleanup, or a repair diagnosis over the phone.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Celina Pool Pros</h1>
          <p>
            Call, or send the form and we&rsquo;ll call you. Either way you get
            a real answer the same business day.
          </p>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div>
            <h2>Reach Us</h2>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
              <br />
              <strong>Hours:</strong> {SITE.hours}
            </p>
            <p>
              <strong>Service area:</strong> Celina, TX — Light Farms, Mustang
              Lakes, Lilyana, Cambridge Crossing, Sutton Fields, Carter Ranch,
              The Columns, Glen Crossing, Ownsby Farms, and old-town Celina.
            </p>
            <iframe
              src={SITE.mapEmbedSrc}
              className="map-embed"
              title="Map of Celina, TX service area"
              loading="lazy"
            />
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Faq items={faqItems} heading="Before You Call" />
        </div>
      </section>
    </>
  );
}
