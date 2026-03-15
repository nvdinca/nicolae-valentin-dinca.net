import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import AnimateIn from "@/components/AnimateIn";
import Testimonials from "@/components/Testimonials";
import NowSection from "@/components/NowSection";

export const metadata: Metadata = {
  title: "Nicolae-Valentin Dinca - Portfolio",
  description:
    "Portfolio of Nicolae-Valentin Dinca. Custom digital identities for luxury real estate. Design, branding, and strategic digital architecture.",
  openGraph: {
    title: "Nicolae-Valentin Dinca - Portfolio",
    description:
      "Portfolio of Nicolae-Valentin Dinca. Custom digital identities for luxury real estate.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const featured = await getProjects(3);
  return (
    <main className="bg-ivory text-obsidian">
      <AnimateIn as="section" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <h1 className="font-serif text-3xl font-light tracking-wide text-obsidian sm:text-4xl md:text-5xl lg:text-6xl">
          Custom digital identities for luxury real estate.
        </h1>
        <p className="mt-4 max-w-xl font-sans text-base text-warm-gray sm:mt-6 sm:text-lg">
          Quiet luxury, in digital form.
        </p>
        <Link
          href="/portfolio"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center border border-forest px-6 py-3 font-sans text-sm uppercase tracking-widest text-obsidian transition hover:bg-forest hover:text-ivory sm:mt-10"
        >
          View portfolio
        </Link>
      </AnimateIn>

      {featured.length > 0 && (
        <section className="border-t border-champagne/20 bg-ivory text-obsidian">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <AnimateIn delay={0.1}>
              <h2 className="font-serif text-2xl tracking-wide md:text-3xl">
                Featured work
              </h2>
            </AnimateIn>
            <div className="mt-8 grid gap-px bg-champagne/20 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <Link
              href="/portfolio"
              className="mt-8 inline-flex min-h-[48px] items-center font-sans text-sm uppercase tracking-widest text-forest transition hover:text-champagne sm:mt-10"
            >
              See all projects →
            </Link>
          </div>
        </section>
      )}

      <AnimateIn as="section" className="border-t border-champagne/20 bg-ivory px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm text-obsidian/90 sm:text-base">
            I design and build custom digital identities for luxury real estate
            agents and boutique agencies. Cinematic design, refined branding,
            and strategic digital architecture to elevate your online presence.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-4 font-sans text-sm text-obsidian sm:mt-8 sm:gap-6">
            <li>Bespoke design</li>
            <li>Luxury-aligned aesthetics</li>
            <li>Strategic lead generation</li>
            <li>Premium collaboration</li>
          </ul>
          <div className="mx-auto mt-12 max-w-2xl border-t border-champagne/20 pt-12 sm:mt-16 sm:pt-16">
            <Testimonials maxItems={2} />
          </div>
        </div>
      </AnimateIn>

      <NowSection />
    </main>
  );
}
