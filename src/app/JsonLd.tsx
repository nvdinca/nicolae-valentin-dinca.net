const SITE_URL = "https://nicolae-valentin-dinca.net";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nicolae-Valentin Dincă",
  url: SITE_URL,
  jobTitle: "Full-Stack Web Developer",
  description:
    "Luxury Real Estate Full-Stack Custom Web Developer. Bespoke digital identities for agents and agencies.",
  sameAs: [
    "https://github.com/nvdinca",
    "https://www.figma.com/@nvdinca",
    "https://linktr.ee/nicolae.valentin.dinca",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nicolae-Valentin Dinca - Portfolio",
  url: SITE_URL,
  description:
    "Portfolio of Nicolae-Valentin Dinca. Custom digital identities for luxury real estate. Design, branding, and strategic digital architecture.",
  author: { "@type": "Person", name: "Nicolae-Valentin Dincă" },
  inLanguage: "en",
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
