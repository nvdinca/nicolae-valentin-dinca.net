import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import Testimonials from "@/components/Testimonials";
import Breadcrumbs from "@/components/Breadcrumbs";
import AboutToc from "@/components/AboutToc";
import ShareAndCopy from "@/components/ShareAndCopy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nicolae-Valentin Dincă — Full-Stack Web Developer for luxury real estate. Bespoke digital identities, high-performance architecture, and strategic design.",
  openGraph: {
    title: "About | Nicolae-Valentin Dincă",
    description:
      "Full-Stack Web Developer specializing in custom digital platforms for real estate. Architecture, design, and digital prestige.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

const bioParagraphs = [
  "I create bespoke digital identities for luxury real estate professionals who understand that their brand is an asset — one that must reflect the caliber of the properties they represent.",
  "My work is defined by cinematic design, refined aesthetics, and a strategic approach that elevates agents into market authorities.",
  "Every project is crafted with the precision of an architect and the restraint of a luxury interior designer. I focus on clarity, balance, and the subtle details that shape perception.",
  "The result is a digital presence that feels unmistakably premium: calm, confident, and built to attract discerning clients.",
  "I collaborate with top agents and boutique agencies who value excellence, discretion, and a design partner who understands the psychology of high‑end buyers.",
  "For them, I don't simply build websites — I build digital prestige.",
];

const topSkills = [
  "Full-Stack Development",
  "Web Development",
  "Responsive Web Design",
  "Search Engine Optimization (SEO)",
  "Page Speed Optimization",
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "AWS",
  "Vercel",
  "Serverless",
];

const coreExpertise = [
  {
    title: "Architecture & Infrastructure",
    items: [
      "Modular, component‑driven architecture",
      "REST & GraphQL API development",
      "Cloud‑optimized deployments (AWS, Vercel)",
      "CI/CD pipelines and automated build processes",
    ],
  },
  {
    title: "Front‑End Engineering",
    items: [
      "Custom UI/UX development with React & Next.js",
      "TypeScript‑based component systems",
      "SEO optimization, Core Web Vitals, and performance tuning",
      "Interactive features: map‑based search, dynamic routing, advanced filtering",
    ],
  },
  {
    title: "Back‑End Development",
    items: [
      "Node.js, Express, serverless functions",
      "Database design with PostgreSQL, MongoDB, Prisma ORM",
      "MLS/IDX integrations, CRM connections, lead‑management automations",
      "Real‑time data syncing for listings and inventory updates",
    ],
  },
  {
    title: "Security & Performance",
    items: [
      "Authentication systems (JWT, OAuth)",
      "Input sanitization, rate limiting, secure API design",
      "CDN optimization, caching layers, image optimization pipelines",
    ],
  },
  {
    title: "Intelligent Systems & Automation",
    items: [
      "Property recommendation algorithms",
      "Behavioral personalization and dynamic content delivery",
      "Custom dashboards with analytics for agents and brokers",
    ],
  },
];

const experience = [
  {
    period: "Present",
    role: "Luxury Real Estate Full-Stack Custom Web Developer",
    summary:
      "Bespoke sites for agents, agencies, and developers. Design and build of digital identities and strategic web presence.",
  },
  {
    period: "Ongoing",
    role: "Design & development",
    summary:
      "Design systems, branding, and full-stack architecture for real estate and related sectors.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ivory text-obsidian">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "About" }]}
          className="mb-6"
        />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl tracking-wide text-obsidian sm:text-3xl md:text-4xl">
              About
            </h1>
            <p className="mt-2 font-sans text-sm uppercase tracking-widest text-warm-gray sm:mt-3">
              Nicolae-Valentin Dincă
            </p>
          </div>
          <ShareAndCopy path="/about" title="About | Nicolae-Valentin Dincă" />
        </div>
        <AboutToc />

        {/* Bio */}
        <AnimateIn>
          <section className="mt-8 sm:mt-12" aria-labelledby="bio-heading">
            <h2 id="bio-heading" className="sr-only">
              Bio
            </h2>
            <div className="space-y-4 font-sans text-obsidian/90 [&_p]:leading-relaxed sm:text-base">
              {bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm italic text-forest sm:text-base">
              Quiet luxury. Strategic design. A signature experience for those who lead in the real estate world.
            </p>
          </section>
        </AnimateIn>

        {/* Top skills */}
        <AnimateIn delay={0.05}>
          <section className="mt-12 sm:mt-16" aria-labelledby="top-skills-heading">
            <h2 id="top-skills-heading" className="font-serif text-xl tracking-wide text-obsidian sm:text-2xl">
              Top skills
            </h2>
            <p className="mt-3 font-sans text-sm text-obsidian/85 sm:text-base">
              {topSkills.join(" • ")}
            </p>
          </section>
        </AnimateIn>

        {/* Full-stack focus */}
        <AnimateIn delay={0.08}>
          <section className="mt-12 sm:mt-16" aria-labelledby="focus-heading">
            <h2 id="focus-heading" className="sr-only">
              Technical focus
            </h2>
            <p className="font-sans text-obsidian/90 leading-relaxed sm:text-base">
              I am a Full‑Stack Web Developer specializing in custom digital platforms for the real estate industry, with a focus on high‑performance architecture, scalable infrastructure, and seamless integration with property‑driven workflows.
            </p>
            <p className="mt-4 font-sans text-obsidian/90 leading-relaxed sm:text-base">
              My technical work spans the full development lifecycle, from system architecture to deployment, using a modern and robust technology stack: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Prisma, AWS, Vercel, and serverless environments.
            </p>
            <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-sans text-sm text-warm-gray">
              {techStack.map((tech) => (
                <span key={tech} className="rounded bg-champagne/20 px-2 py-0.5">
                  {tech}
                </span>
              ))}
            </p>
          </section>
        </AnimateIn>

        {/* Core Technical Expertise */}
        <AnimateIn delay={0.1}>
          <section className="mt-12 sm:mt-16" aria-labelledby="expertise-heading">
            <h2 id="expertise-heading" className="font-serif text-xl tracking-wide text-obsidian sm:text-2xl">
              Core Technical Expertise
            </h2>
            <ul className="mt-6 space-y-8">
              {coreExpertise.map(({ title, items }) => (
                <li key={title}>
                  <h3 className="font-sans text-sm font-medium uppercase tracking-widest text-forest">
                    {title}
                  </h3>
                  <ul className="mt-2 space-y-1.5 font-sans text-sm text-obsidian/85">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-champagne/60" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        </AnimateIn>

        {/* Closing */}
        <AnimateIn delay={0.12}>
          <p className="mt-12 font-sans text-obsidian/90 leading-relaxed sm:mt-16 sm:text-base">
            My engineering approach blends technical precision with a deep understanding of real estate operations, enabling me to build digital platforms that enhance visibility, streamline workflows, and support top‑tier agents in winning competitive listings.
          </p>
        </AnimateIn>

        {/* Testimonials */}
        <AnimateIn delay={0.12}>
          <Testimonials className="mt-12 sm:mt-16" />
        </AnimateIn>

        {/* Experience timeline */}
        <AnimateIn delay={0.15}>
          <section className="mt-12 sm:mt-16" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="font-serif text-xl tracking-wide text-obsidian sm:text-2xl">
              Experience
            </h2>
            <ul className="mt-6 space-y-6 border-l-2 border-champagne/40 pl-5">
              {experience.map(({ period, role, summary }) => (
                <li key={period + role}>
                  <p className="font-sans text-xs uppercase tracking-widest text-warm-gray">
                    {period}
                  </p>
                  <p className="mt-0.5 font-sans font-medium text-obsidian">
                    {role}
                  </p>
                  <p className="mt-1 font-sans text-sm text-obsidian/85">
                    {summary}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </AnimateIn>

        <p className="mt-12 font-sans text-sm italic text-warm-gray sm:mt-16">
          Quiet luxury. Strategic design. A signature experience for those who lead in the real estate world.
        </p>
      </div>
    </main>
  );
}
