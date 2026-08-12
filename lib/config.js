// Central site config — everything that gets wired later lives here.

export const SITE = {
  name: "Celina Pool Pros",
  legalLine: "Celina Pool Pros is a locally operated pool service business serving Celina, TX.",
  domain: "https://celinapoolpros.com", // suggested exact-match domain — update if a different one is purchased
  city: "Celina",
  state: "TX",

  // Twilio tracking number
  // phone    = display format shown to visitors
  // phoneTel = tel: link format (+1 followed by 10 digits)
  phone: "(972) 382-5649",
  phoneTel: "+19723825649",

  // ============================================================
  // TODO: FORM ENDPOINT — create a Formspree (or similar) form
  // and paste its POST URL here. Static export = no server code.
  // ============================================================
  formEndpoint: "https://formspree.io/f/REPLACE_ME",

  hours: "Monday – Saturday, 8:00 AM – 6:00 PM",
  geo: { lat: 33.3243, lng: -96.7847 }, // Celina, TX
  mapEmbedSrc: "https://www.google.com/maps?q=Celina,+TX&output=embed",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/weekly-pool-cleaning/", label: "Weekly Cleaning" },
  { href: "/one-time-pool-cleaning/", label: "One-Time Cleanup" },
  { href: "/pool-equipment-repair/", label: "Equipment Repair" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/contact/", label: "Contact" },
];
