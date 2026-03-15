/**
 * Social and external links. Source: https://linktr.ee/nicolae.valentin.dinca
 * Replace href with direct profile URLs if desired.
 */
export const LINKTREE_URL = "https://linktr.ee/nicolae.valentin.dinca" as const;

export const socialLinks = [
  { name: "LinkedIn", href: LINKTREE_URL, icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/nvdinca", icon: "github" },
  { name: "GitLab", href: LINKTREE_URL, icon: "gitlab" },
  { name: "YouTube", href: LINKTREE_URL, icon: "youtube" },
  { name: "X", href: LINKTREE_URL, icon: "x" },
  { name: "TikTok", href: LINKTREE_URL, icon: "tiktok" },
  { name: "Behance", href: LINKTREE_URL, icon: "behance" },
  { name: "Figma", href: "https://www.figma.com/@nvdinca", icon: "figma" },
  { name: "Substack", href: LINKTREE_URL, icon: "substack" },
] as const;
