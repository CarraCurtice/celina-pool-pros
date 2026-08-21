import { SITE } from "../../lib/config";
import QuoteForm from "../../components/QuoteForm";
import Faq from "../../components/Faq";
import CtaBand from "../../components/CtaBand";

export const metadata = {
  title: "One-Time Pool Cleaning & Green Pool Cleanup in Celina, TX",
  description:
    "One-time pool cleanup in Celina, TX, including green-to-clean recoveries, storm debris cleanup, and pre-event deep cleans. Flat up-front pricing, no service contract required.",
  alternates: { canonical: "/one-time-pool-cleaning/" },
};

const faqItems = [
  {
    q: "My pool is completely green. Can it be saved?",
    a: "Almost always, yes. A green pool is an algae bloom, and the fix is a combination of heavy brushing, shock treatment, filtration time, and sometimes a drain-and-clean if it's been sitting for months. We'll tell you honestly which situation you're in before you spend anything.",
  },
  {
    q: "How long does a green-to-clean take?",
    a: "Typically 3 to 7 days depending on how far gone the water is and how well your filter runs. We front-load the heavy work on day one, then return to re-treat and vacuum settled algae until it holds clear.",
  },
  {
    q: "Do I have to sign up for weekly service to get a one-time clean?",
    a: "No. One-time means one-time. Plenty of Celina customers call us once a year before a graduation party or after a spring storm and that's the whole relationship. If you want weekly service afterward, great, but we'll never make it a condition.",
  },
  {
    q: "What does a one-time cleanup cost?",
    a: "We quote flat, up front, after seeing the pool or good photos of it. A storm-debris cleanup is a different price than a full green recovery, and a green recovery with a working filter is different from one where the equipment needs help too. No hourly meter running.",
  },
];

export default function OneTimeCleaning() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>One-Time Pool Cleaning in Celina, TX</h1>
          <p>
            Green pool recovery, storm cleanup, or a deep clean before the
            party. One flat price, no contract, no pressure to sign up for
            anything.
          </p>
          <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
            {SITE.phone}
          </a>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div>
            <h2>Three Reasons Celina Homeowners Call Us Once</h2>
            <h3>1. The pool turned green</h3>
            <p>
              It happens fast here. A hot week, a filter that quietly stopped
              doing its job, a vacation, and the water goes from cloudy to
              swamp. We do the full recovery: heavy brushing, shock and
              algaecide, filter cleaning, and repeat visits until the water
              holds clear. If the pool has sat long enough that a drain-and-
              clean is the cheaper path, we&rsquo;ll say so.
            </p>
            <h3>2. A storm made a mess</h3>
            <p>
              North Texas spring storms don&rsquo;t ask permission. After a
              night of straight-line winds, pools under the mature trees in
              Mustang Lakes and the older blocks near downtown Celina end up
              full of leaves, small branches, and runoff silt. One visit gets
              the debris out, baskets cleared, and chemistry rebalanced before
              staining sets in.
            </p>
            <h3>3. Company&rsquo;s coming</h3>
            <p>
              Graduation weekend, a birthday, the neighborhood&rsquo;s turn to
              host. A pre-event deep clean gets the waterline tile scrubbed,
              floor vacuumed, and water polished so the pool looks its best in
              the photos.
            </p>
          </div>
          <QuoteForm title="Get a Flat-Price Cleanup Quote" />
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Faq items={faqItems} />
        </div>
      </section>

      <CtaBand
        heading="Send us a photo of your pool"
        sub="Worst case we've seen worse. Call and we'll give you a straight answer on what it'll take."
      />
    </>
  );
}
