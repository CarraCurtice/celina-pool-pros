import { SITE } from "../../lib/config";
import QuoteForm from "../../components/QuoteForm";
import Faq from "../../components/Faq";
import CtaBand from "../../components/CtaBand";

export const metadata = {
  title: "Pool Equipment Repair in Celina, TX | Pumps, Filters & Timers",
  description:
    "Pool pump repair, filter service, timer and equipment-pad fixes in Celina, TX. Honest diagnosis first. We repair when it makes sense and advise on replacement when it doesn't.",
  alternates: { canonical: "/pool-equipment-repair/" },
};

const faqItems = [
  {
    q: "My pool pump is loud or screeching. What does that mean?",
    a: "Usually failing motor bearings, sometimes cavitation from a suction-side air leak. Bearings on an older single-speed pump often mean it's worth pricing a variable-speed replacement instead of a repair, since newer pumps cost far less to run all season. We'll give you both numbers and let you decide.",
  },
  {
    q: "The pump runs but water isn't moving. Is that serious?",
    a: "It's the most common call we get. Could be a clogged impeller, a full pump basket, a suction leak, or a filter that's overdue for cleaning. Most of these are same-visit fixes. Don't keep running it dry. That's how a cheap fix becomes a new pump.",
  },
  {
    q: "How often should a filter be cleaned in Celina?",
    a: "Cartridge filters here typically need cleaning every 3–6 months, more if you're under trees or your pool saw heavy storm debris. Celina's hard fill water also loads filters with calcium over time. If your pressure gauge reads 8–10 PSI over its clean baseline, it's time.",
  },
  {
    q: "Do you handle warranty or brand-specific equipment?",
    a: "We work on the common residential brands installed by builders across Celina's newer communities. If your equipment is still under a builder or manufacturer warranty, we'll tell you before touching it so you don't void anything.",
  },
];

export default function EquipmentRepair() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Pool Equipment Repair in Celina, TX</h1>
          <p>
            Pumps, filters, timers, valves, and the mystery leak at the
            equipment pad. Diagnosed honestly. We repair what&rsquo;s worth
            repairing and tell you straight when it isn&rsquo;t.
          </p>
          <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
            {SITE.phone}
          </a>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div>
            <h2>What We Repair</h2>
            <ul>
              <li>Pool pumps: bearings, seals, impellers, priming problems</li>
              <li>Variable-speed pump upgrades from old single-speed units</li>
              <li>Cartridge and DE filter cleaning, rebuilds, and replacement</li>
              <li>Timers, automation clocks, and freeze-guard settings</li>
              <li>Equipment-pad plumbing leaks, valves, and unions</li>
              <li>O-rings, gauges, air-relief valves, and the small stuff</li>
            </ul>

            <h2>The Celina Equipment Story</h2>
            <p>
              Celina has two kinds of pools. The newer communities, like Light
              Farms, Lilyana, Sutton Fields, and Cambridge Crossing, have
              builder-installed equipment that&rsquo;s mostly still young, where
              the common calls are priming issues, timer programming, and
              freeze-guard setup before the first real cold snap. Then there
              are the established pools in Carter Ranch and around old-town
              Celina, where pumps and filters installed 10–20 years ago are
              reaching end of life, and the honest question is repair versus
              replace.
            </p>
            <p>
              We answer that question with numbers, not pressure: what the
              repair costs, what a replacement costs, and what a variable-speed
              pump saves on your electric bill over a Texas summer. You pick.
            </p>
            <p>
              One more local note: our hard water is rough on seals and
              o-rings, and 100°+ summers are rough on motor capacitors. If your
              equipment is original and your neighborhood was built before
              2012, a once-a-year equipment checkup is cheap insurance.
            </p>
          </div>
          <QuoteForm title="Describe the Problem, Get a Quote" />
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Faq items={faqItems} />
        </div>
      </section>

      <CtaBand
        heading="Equipment acting up?"
        sub="Describe the noise, the leak, or the error light, and we'll tell you what it likely is before we roll a truck."
      />
    </>
  );
}
