import { SITE } from "../lib/config";

export default function QuoteForm({ title = "Get a Free Quote" }) {
  return (
    <div className="quote-form-card">
      <h2 className="quote-form-title">{title}</h2>
      <p className="quote-form-sub">
        Tell us about your pool and we&rsquo;ll get back to you the same
        business day.
      </p>
      {/* Posts to SITE.formEndpoint — wire up Formspree/Basin before launch */}
      <form action={SITE.formEndpoint} method="POST">
        <label>
          Name
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" required autoComplete="tel" />
        </label>
        <label>
          Neighborhood or street
          <input
            type="text"
            name="neighborhood"
            placeholder="e.g. Light Farms, Carter Ranch"
          />
        </label>
        <label>
          What do you need?
          <select name="service" defaultValue="Weekly cleaning">
            <option>Weekly cleaning</option>
            <option>One-time cleanup / green pool</option>
            <option>Equipment repair</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Anything else we should know?
          <textarea name="message" rows="3" />
        </label>
        <button type="submit" className="btn btn-primary btn-block">
          Request My Quote
        </button>
      </form>
    </div>
  );
}
