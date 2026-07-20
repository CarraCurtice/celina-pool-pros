import Link from "next/link";
import { SITE } from "../../lib/config";
import QuoteForm from "../../components/QuoteForm";
import PhotoPlaceholder from "../../components/PhotoPlaceholder";
import Faq from "../../components/Faq";
import CtaBand from "../../components/CtaBand";

export const metadata = {
  title: "Weekly Pool Cleaning in Celina, TX",
  description:
    "Weekly pool maintenance in Celina, TX: skimming, brushing, vacuuming, water testing and balancing on a set day each week. Text updates after every visit. Free quotes.",
  alternates: { canonical: "/weekly-pool-cleaning/" },
};

const faqItems = [
  {
    q: "What's included in a weekly pool cleaning visit?",
    a: "Every visit: surface skim, brush walls and steps, vacuum as needed, empty skimmer and pump baskets, test water, and balance chemicals. We also eyeball your equipment pad each week so pump or filter issues get caught early.",
  },
  {
    q: "How much does weekly pool cleaning cost in Celina?",
    a: "It depends on pool size, trees over the water, and equipment condition — a screened new-build pool in Sutton Fields is a different job than a pool under mature oaks near downtown. We quote each pool individually and the price is flat per month, chemicals discussed up front.",
  },
  {
    q: "Do you skip visits when it rains?",
    a: "No — rain weeks are when your pool needs us most. Storm runoff and debris throw off water chemistry fast, so we service on your regular day and note anything the storm stirred up.",
  },
  {
    q: "Can I pause service in winter?",
    a: "Texas pools run year-round, but winter visits are lighter. Many customers switch to a reduced winter cadence from December through February. We'll set that up when the time comes — no contract changes needed.",
  },
];

export default function WeeklyPoolCleaning() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Weekly Pool Cleaning in Celina, TX</h1>
          <p>
            A set day, every week, all season. Your pool stays clear and
            balanced without you touching a test strip.
          </p>
          <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
            {SITE.phone}
          </a>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div>
            <h2>What Every Visit Covers</h2>
            <ul>
              <li>Skim surface and remove debris from the water</li>
              <li>Brush walls, steps, and tile line</li>
              <li>Vacuum floor as conditions require</li>
              <li>Empty skimmer baskets and pump basket</li>
              <li>Test water and balance sanitizer, pH, and alkalinity</li>
              <li>Visual check of pump, filter, and equipment pad</li>
              <li>Text summary when we leave, every single time</li>
            </ul>
            <h2>Why Weekly Matters Here</h2>
            <p>
              Celina&rsquo;s swim season is long and its weather is not gentle.
              Spring storms dump leaves and runoff into pools in Mustang Lakes
              and the older, tree-heavy lots near the square. Summer heat over
              100° burns through sanitizer in days, not weeks. And the
              municipal water most of us fill with is hard enough that calcium
              scale creeps up tile lines quietly until it&rsquo;s a real
              cleaning project.
            </p>
            <p>
              A weekly rhythm catches all of that while it&rsquo;s still small.
              It also means an experienced set of eyes on your equipment pad 52
              times a year — most of the{" "}
              <Link href="/pool-equipment-repair/">pump and filter repairs</Link>{" "}
              we do started as something a weekly customer never had to worry
              about, because we caught it during a routine visit.
            </p>
            <PhotoPlaceholder
              tall
              note="Real photo: your tech mid-service at a Celina pool — brushing tile line or testing water. Candid, not staged stock."
            />
          </div>
          <QuoteForm title="Get a Weekly Service Quote" />
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Faq items={faqItems} />
        </div>
      </section>

      <CtaBand
        heading="Want your weekends back?"
        sub="One call and your pool goes on the schedule."
      />
    </>
  );
}
