"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/project";

type SortOption = "year-desc" | "year-asc" | "title-asc" | "title-desc";

function searchMatch(project: Project, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase().trim();
  const title = (project.title ?? "").toLowerCase();
  const short = (project.short_description ?? "").toLowerCase();
  const long = (project.long_description ?? "").toLowerCase();
  const tech = (project.tech ?? []).join(" ").toLowerCase();
  const category = (project.category ?? "").toLowerCase();
  return [title, short, long, tech, category].some((s) => s.includes(q));
}

function filterAndSort(
  projects: Project[],
  searchQuery: string,
  yearFilter: string,
  techFilter: string,
  categoryFilter: string,
  sort: SortOption
): Project[] {
  let list = projects.filter((p) => searchMatch(p, searchQuery));

  if (yearFilter) {
    const year = Number(yearFilter);
    list = list.filter((p) => p.year === year);
  }
  if (techFilter) {
    list = list.filter((p) => (p.tech ?? []).includes(techFilter));
  }
  if (categoryFilter) {
    list = list.filter((p) => (p.category ?? "") === categoryFilter);
  }

  const sorted = [...list].sort((a, b) => {
    switch (sort) {
      case "year-desc":
        return (b.year ?? 0) - (a.year ?? 0);
      case "year-asc":
        return (a.year ?? 0) - (b.year ?? 0);
      case "title-asc":
        return (a.title ?? "").localeCompare(b.title ?? "");
      case "title-desc":
        return (b.title ?? "").localeCompare(a.title ?? "");
      default:
        return 0;
    }
  });
  return sorted;
}

type PortfolioFiltersProps = { projects: Project[] };

export default function PortfolioFilters({ projects }: PortfolioFiltersProps) {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sort, setSort] = useState<SortOption>("year-desc");

  const years = useMemo(() => {
    const set = new Set(projects.map((p) => p.year).filter((y): y is number => y != null));
    return Array.from(set).sort((a, b) => b - a);
  }, [projects]);

  const techList = useMemo(() => {
    const set = new Set(projects.flatMap((p) => p.tech ?? []));
    return Array.from(set).sort();
  }, [projects]);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category).filter((c): c is string => Boolean(c)));
    return Array.from(set).sort();
  }, [projects]);

  const filtered = useMemo(
    () => filterAndSort(projects, search, yearFilter, techFilter, categoryFilter, sort),
    [projects, search, yearFilter, techFilter, categoryFilter, sort]
  );

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label htmlFor="portfolio-search" className="sr-only">
          Search projects
        </label>
        <input
          id="portfolio-search"
          type="search"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border border-champagne/50 bg-ivory px-3 py-2 font-sans text-sm text-obsidian placeholder:text-warm-gray focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
          aria-label="Search projects"
        />
      </div>

      {/* Filters + Sort */}
      <div className="flex flex-wrap items-center gap-3 gap-y-2">
        <label htmlFor="filter-year" className="font-sans text-xs uppercase tracking-widest text-warm-gray">
          Year
        </label>
        <select
          id="filter-year"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="border border-champagne/50 bg-ivory px-2 py-1.5 font-sans text-sm text-obsidian focus:border-forest focus:outline-none"
        >
          <option value="">All</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        <label htmlFor="filter-tech" className="ml-2 font-sans text-xs uppercase tracking-widest text-warm-gray">
          Tech
        </label>
        <select
          id="filter-tech"
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
          className="border border-champagne/50 bg-ivory px-2 py-1.5 font-sans text-sm text-obsidian focus:border-forest focus:outline-none"
        >
          <option value="">All</option>
          {techList.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        {categories.length > 0 && (
          <>
            <label htmlFor="filter-category" className="ml-2 font-sans text-xs uppercase tracking-widest text-warm-gray">
              Category
            </label>
            <select
              id="filter-category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-champagne/50 bg-ivory px-2 py-1.5 font-sans text-sm text-obsidian focus:border-forest focus:outline-none"
            >
              <option value="">All</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </>
        )}

        <label htmlFor="sort" className="ml-2 font-sans text-xs uppercase tracking-widest text-warm-gray">
          Sort
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="border border-champagne/50 bg-ivory px-2 py-1.5 font-sans text-sm text-obsidian focus:border-forest focus:outline-none"
        >
          <option value="year-desc">Newest first</option>
          <option value="year-asc">Oldest first</option>
          <option value="title-asc">Title A–Z</option>
          <option value="title-desc">Title Z–A</option>
        </select>
      </div>

      <p className="font-sans text-sm text-warm-gray">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      {filtered.length === 0 ? (
        <p className="font-sans text-warm-gray">No projects match the current filters.</p>
      ) : (
        <div className="grid gap-px bg-champagne/20 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
