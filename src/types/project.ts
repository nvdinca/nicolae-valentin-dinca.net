export type Project = {
  id: string;
  slug: string;
  title: string;
  short_description: string | null;
  long_description: string | null;
  year: number | null;
  tech: string[];
  /** Optional category for filter (e.g. "Agent", "Agency", "Developer"). */
  category?: string | null;
  live_url: string | null;
  repo_url: string | null;
  cover_path: string | null;
  gallery_paths: string[];
  published: boolean;
  sort_order: number | null;
  created_at: string;
  updated_at: string;
};
