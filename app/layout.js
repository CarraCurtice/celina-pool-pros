import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE } from "../lib/config";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — Pool Cleaning in Celina, TX`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Weekly pool cleaning, one-time cleanups, and equipment repair for Celina, TX homes — Light Farms, Mustang Lakes, Carter Ranch, and every neighborhood in between.",
  openGraph: {
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description:
    "Residential pool cleaning and equipment repair service for Celina, Texas.",
  url: SITE.domain,
  telephone: SITE.phoneTel, // TODO: TWILIO TRACKING NUMBER (updates automatically from lib/config.js)
  areaServed: {
    "@type": "City",
    name: "Celina",
    containedInPlace: { "@type": "State", name: "Texas" },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHours: "Mo-Sa 08:00-18:00",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
