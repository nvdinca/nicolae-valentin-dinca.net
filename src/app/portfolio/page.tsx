import { getProjects } from "@/lib/projects";
import PortfolioFilters from "@/components/PortfolioFilters";
import Breadcrumbs from "@/components/Breadcrumbs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected projects by Nicolae-Valentin Dinca. Custom digital identities for luxury real estate.",
  openGraph: {
    title: "Portfolio | Nicolae-Valentin Dinca",
    description: "Selected projects. Custom digital identities for luxury real estate.",
    url: "/portfolio",
  },
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage() {
  const projects = await getProjects();
  return (
    <main className="min-h-screen bg-ivory">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
          className="mb-6"
        />
        <h1 className="font-serif text-2xl tracking-wide text-obsidian sm:text-3xl md:text-4xl">
          Portfolio
        </h1>
        <p className="mt-2 font-sans text-sm text-warm-gray sm:mt-3 sm:text-base">
          Selected work. Custom digital identities for luxury real estate.
        </p>
        {projects.length === 0 ? (
          <p className="mt-8 font-sans text-warm-gray sm:mt-12">
            No projects yet.
          </p>
        ) : (
          <div className="mt-8 sm:mt-12">
            <PortfolioFilters projects={projects} />
          </div>
        )}
      </div>
    </main>
  );
}
