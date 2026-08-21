import { SITE } from "../../lib/config";
import Faq from "../../components/Faq";
import CtaBand from "../../components/CtaBand";

export const metadata = {
  title: "Celina, TX Pool Service Areas | Neighborhoods We Serve",
  description:
    "Pool cleaning across Celina, TX: Light Farms, Mustang Lakes, Lilyana, Cambridge Crossing, Sutton Fields, Carter Ranch, The Columns, Glen Crossing, Ownsby Farms, and old-town Celina.",
  alternates: { canonical: "/service-areas/" },
};

const hoods = [
  {
    name: "Light Farms",
    blurb:
      "Celina's biggest master-planned community, off the Dallas North Tollway extension. Mostly 2015-and-newer builder pools with modern equipment. Our visits here are about keeping chemistry tight through heavy summer use and keeping filters ahead of construction dust from the phases still building out.",
  },
  {
    name: "Mustang Lakes",
    blurb:
      "Off Frontier Parkway east of Preston Road, with larger lots and the mature trees left over from its ranch days. More trees means more organic load. Pools here get real leaf drop in fall and storm debris in spring, and we plan service accordingly.",
  },
  {
    name: "Lilyana",
    blurb:
      "South Celina along Frontier Parkway. A newer community where we see a lot of first-time pool owners and recent pool starts. New-plaster startups and getting a maintenance rhythm established are the common jobs here.",
  },
  {
    name: "Cambridge Crossing",
    blurb:
      "Growing community with new construction still underway nearby. Builder-grade equipment, young pools, and the usual new-neighborhood issue: fine dust from ongoing construction that shows up as cloudy water a day after every dry, windy stretch.",
  },
  {
    name: "Sutton Fields",
    blurb:
      "Northwest Celina. A mix of pool sizes including smaller cocktail pools that heat up fast in July. Small pools swing chemistry harder than big ones, and we dose them accordingly.",
  },
  {
    name: "Carter Ranch",
    blurb:
      "One of Celina's established neighborhoods on the east side. Pools here are old enough that equipment questions come up. We do a lot of filter rebuilds and repair-versus-replace conversations in Carter Ranch.",
  },
  {
    name: "The Columns & Glen Crossing",
    blurb:
      "Newer communities off Punk Carter Parkway and north of Light Farms. Young pools, warranty-conscious owners. We work carefully around builder warranties and say so before touching anything covered.",
  },
  {
    name: "Ownsby Farms & Old-Town Celina",
    blurb:
      "East Celina and the established streets around the downtown square. The old-town lots have the biggest trees in the city, which we love, and their pools collect everything those trees drop, which we handle. Some of Celina's oldest pools are here and they need a different touch than a 2022 build.",
  },
];

const faqItems = [
  {
    q: "Do you serve all of Celina?",
    a: "Yes. If you're inside Celina city limits or its immediate ETJ, you're in our service area. That includes every neighborhood listed on this page plus the rural properties off FM 455 and Preston Road north of town.",
  },
  {
    q: "Do you go outside Celina?",
    a: "Our route is built around Celina, which is how we keep service days reliable. For homes just over the line, like the Prosper side of Frontier Parkway or out toward Weston, call and ask. If it fits the route, we'll take it.",
  },
  {
    q: "My neighborhood isn't listed. Can you still service my pool?",
    a: "Almost certainly. Celina is growing fast and new communities open every year. The list on this page covers where most of our pools are today, not the limit of where we go.",
  },
];

export default function ServiceAreas() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Where We Clean Pools in Celina, TX</h1>
          <p>
            Our whole route is Celina. Not Frisco, not McKinney with Celina
            tacked on. Just Celina. Here&rsquo;s where our trucks spend the week,
            and what pools in each neighborhood actually deal with.
          </p>
          <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
            {SITE.phone}
          </a>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="hood-grid">
            {hoods.map((h) => (
              <div className="hood" key={h.name}>
                <h3>{h.name}</h3>
                <p>{h.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container two-col">
          <div>
            <h2>Why Being Celina-Only Matters</h2>
            <p>
              A pool route that stretches from Little Elm to Anna spends half
              the day on US 380. Ours doesn&rsquo;t. Staying inside Celina means
              your service day doesn&rsquo;t slip, storm-week catch-ups happen
              fast, and when your pump quits on a Friday afternoon in July,
              we&rsquo;re minutes away, not the other side of the tollway.
            </p>
            <p>
              It also means we know the local conditions cold: which
              neighborhoods are still throwing construction dust, which streets
              flood their pool decks in a hard rain, and when Celina ISD lets
              out for summer and every pool in town suddenly triples its
              bather load.
            </p>
          </div>
          <iframe
            src={SITE.mapEmbedSrc}
            className="map-embed"
            title="Map of Celina, TX"
            loading="lazy"
          />
        </div>
      </section>

      <section>
        <div className="container">
          <Faq items={faqItems} heading="Service Area Questions" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
