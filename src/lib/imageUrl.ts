/**
 * Pentru site static: cover_path și gallery_paths sunt path-uri din public/
 * (ex: "/portfolio/covers/villa.jpg"). Returnează path-ul nemodificat.
 */
export function getImageUrl(path: string | null): string | null {
  if (!path) return null;
  return path;
}
