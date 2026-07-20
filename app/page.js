import Link from "next/link";
import { SITE } from "../lib/config";
import QuoteForm from "../components/QuoteForm";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import Faq from "../components/Faq";
import CtaBand from "../components/CtaBand";

export const metadata = {
  title: "Pool Cleaning in Celina, TX — Weekly Service, Cleanups & Repairs",
  description:
    "Local pool cleaning for Celina, TX. Weekly maintenance, one-time green-pool cleanups, and equipment repair for Light Farms, Mustang Lakes, Carter Ranch and more. Free quotes.",
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    q: "How does weekly pool cleaning scheduling work?",
    a: "You get a set service day each week. We text when we're on the way and again when your pool is done, with a quick note on water condition. If a spring storm rolls through before your day, tell us and we'll factor the extra debris into that visit.",
  },
  {
    q: "Do I need to be home for service?",
    a: "No. Most Celina customers just leave the side gate unlocked on service day, or give us a gate code. We close and latch gates behind us every time — especially important for homes with dogs or kids.",
  },
  {
    q: "What chemicals do you use, and are they included?",
    a: "Standard sanitizer, balancers, and algaecide as needed are part of routine service, and we tell you up front what is and isn't included in your quote. Celina's municipal water runs hard, so we also watch calcium levels to protect your plaster and tile line.",
  },
  {
    q: "Can you handle a pool that's turned green?",
    a: "Yes — that's our one-time cleanup service. We'll assess it, give you a flat quote, and get it from green to swimmable. Many customers then move to weekly service so it never happens again, but there's no obligation.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Pool Cleaning in Celina, TX</h1>
            <p className="hero-sub">
              We&rsquo;re a small, local crew that keeps Celina pools clean,
              balanced, and swim-ready — from Light Farms to the neighborhoods
              off the downtown square. Weekly service, one-time cleanups, and
              equipment repair.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
              {SITE.phone}
            </a>
            <div className="trust-bar">
              <span className="trust-item">Locally operated in Celina</span>
              <span className="trust-item">Free, same-day quotes</span>
              <span className="trust-item">No long-term contracts</span>
              <span className="trust-item">Text updates every visit</span>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>What We Do</h2>
          <p>
            Three services, done well. Every visit ends with a text so you know
            exactly what was done and how your water looked.
          </p>
          <div className="cards-grid">
            <div className="card">
              <PhotoPlaceholder note="Real photo: tech skimming a Celina backyard pool (get customer permission, shoot in Light Farms or Mustang Lakes)" />
              <h3>
                <Link href="/weekly-pool-cleaning/">Weekly Pool Cleaning</Link>
              </h3>
              <p>
                Skim, brush, vacuum, empty baskets, test and balance water —
                every week, same day, rain or shine.
              </p>
            </div>
            <div className="card">
              <PhotoPlaceholder note="Real photo: before/after of a green-to-clean job (side-by-side of an actual local cleanup)" />
              <h3>
                <Link href="/one-time-pool-cleaning/">One-Time Cleanup</Link>
              </h3>
              <p>
                Green pool, storm mess, or pre-party refresh — a single deep
                clean with a flat, up-front price.
              </p>
            </div>
            <div className="card">
              <PhotoPlaceholder note="Real photo: tech working on pool pump/filter equipment pad at a local home" />
              <h3>
                <Link href="/pool-equipment-repair/">Equipment Repair</Link>
              </h3>
              <p>
                Pumps, filters, timers, and leaks at the equipment pad —
                diagnosed honestly, fixed quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Call or send the form</h3>
              <p>
                Tell us your neighborhood and what your pool needs. We quote
                most Celina pools the same business day.
              </p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>We come take a look</h3>
              <p>
                First visit includes a full walk-around: water test, equipment
                check, and an honest read on anything that needs attention.
              </p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>Your pool stays ready</h3>
              <p>
                Same service day every week, a text after every visit, and no
                contract locking you in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div>
            <h2>A Celina Pool Has Celina Problems</h2>
            <p>
              Pools here deal with a specific mix: blackland-prairie dust that
              clouds water after a dry spell, live oak and cedar elm drop in
              spring and fall, and hard municipal water that scales tile lines
              faster than most owners expect. Swim season runs long — pools in
              Celina get real use from April into October — so small problems
              compound fast.
            </p>
            <p>
              We service pools across{" "}
              <Link href="/service-areas/">Light Farms, Mustang Lakes,
              Lilyana, Carter Ranch, Sutton Fields, Cambridge Crossing</Link>{" "}
              and the established streets near the downtown square. Newer
              builds and older pools have different needs — we treat them
              differently.
            </p>
            <p>
              <Link href="/service-areas/">See our full Celina service area →</Link>
            </p>
          </div>
          <iframe
            src={SITE.mapEmbedSrc}
            className="map-embed"
            title="Map of Celina, TX service area"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Faq items={faqItems} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
