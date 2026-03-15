import type { Project } from "@/types/project";
import { projectsData } from "@/data/projects";

export async function getProjects(limit?: number): Promise<Project[]> {
  const published = projectsData
    .filter((p) => p.published)
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
  if (limit != null) return published.slice(0, limit);
  return published;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = projectsData.find(
    (p) => p.published && p.slug === slug
  ) ?? null;
  return project;
}

/** Get related projects (same category or year, excluding current slug). */
export async function getRelatedProjects(
  currentSlug: string,
  limit = 2
): Promise<Project[]> {
  const current = await getProjectBySlug(currentSlug);
  if (!current) return [];
  const all = await getProjects();
  const others = all.filter((p) => p.slug !== currentSlug);
  const scored = others.map((p) => {
    let score = 0;
    if (current.category && p.category === current.category) score += 2;
    if (current.year != null && p.year === current.year) score += 1;
    const sharedTech = (current.tech ?? []).filter((t) => (p.tech ?? []).includes(t)).length;
    score += Math.min(sharedTech, 2);
    return { project: p, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.project);
}
