/**
 * Visible FAQ section + matching FAQPage JSON-LD.
 * Pass items: [{ q: "...", a: "..." }] — the schema always mirrors
 * exactly what's rendered on the page.
 */
export default function Faq({ items, heading = "Frequently Asked Questions" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <section className="faq-section">
      <h2>{heading}</h2>
      {items.map((i) => (
        <details key={i.q} className="faq-item">
          <summary>{i.q}</summary>
          <p>{i.a}</p>
        </details>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
