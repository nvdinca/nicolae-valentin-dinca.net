import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjects, getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { getImageUrl } from "@/lib/imageUrl";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import ShareAndCopy from "@/components/ShareAndCopy";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project)
    return { title: "Project | Nicolae-Valentin Dincă - Portfolio" };
  const title = `${project.title} | Nicolae-Valentin Dinca`;
  const description =
    project.short_description ?? "Project by Nicolae-Valentin Dinca.";
  return {
    title: project.title,
    description,
    openGraph: (() => {
      const imageUrl = getImageUrl(project.cover_path);
      return {
        title,
        description,
        url: `/portfolio/${slug}`,
        type: "article",
        ...(imageUrl && {
          images: [{ url: imageUrl, alt: project.title }],
        }),
      };
    })(),
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: `/portfolio/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const related = await getRelatedProjects(slug, 2);
  const coverUrl = getImageUrl(project.cover_path);
  const galleryUrls = (project.gallery_paths ?? [])
    .map(getImageUrl)
    .filter((u): u is string => u != null);

  return (
    <main className="min-h-screen bg-ivory text-obsidian">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Portfolio", href: "/portfolio" },
            { label: project.title },
          ]}
          className="mb-6 sm:mb-8"
        />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="font-serif text-2xl tracking-wide sm:text-3xl md:text-4xl">
            {project.title}
          </h1>
          <ShareAndCopy path={`/portfolio/${slug}`} title={project.title} />
        </div>
        {(project.year != null || project.tech?.length) && (
          <div className="mt-3 flex flex-wrap gap-4 font-sans text-sm text-warm-gray">
            {project.year != null && <span>{project.year}</span>}
            {project.tech?.length > 0 && (
              <span>{project.tech.join(" · ")}</span>
            )}
          </div>
        )}
        {coverUrl && (
          <div className="relative mt-6 aspect-[16/10] overflow-hidden sm:mt-8">
            <Image
              src={coverUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        )}
        {project.short_description && (
          <p className="mt-6 font-sans text-base text-obsidian/90 sm:mt-8 sm:text-lg">
            {project.short_description}
          </p>
        )}
        {project.long_description && (
          <div className="mt-4 space-y-4 font-sans text-obsidian/85 [&_p]:leading-relaxed sm:mt-6 sm:text-base">
            {project.long_description.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        {(project.live_url || project.repo_url) && (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-champagne/30 pt-6 sm:mt-10 sm:gap-4 sm:pt-8">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center border border-forest bg-forest px-5 py-2.5 font-sans text-sm uppercase tracking-widest text-ivory transition hover:opacity-90"
              >
                View live
              </a>
            )}
            {project.repo_url && (
              <a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center border border-champagne px-5 py-2.5 font-sans text-sm uppercase tracking-widest text-obsidian transition hover:bg-champagne/20"
              >
                Repository
              </a>
            )}
          </div>
        )}
        {galleryUrls.length > 0 && (
          <div className="mt-12 grid gap-3 sm:mt-16 sm:gap-4 sm:grid-cols-2">
            {galleryUrls.map((url, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden bg-warm-gray/20"
              >
                <Image
                  src={url}
                  alt={`${project.title} gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}
        {related.length > 0 && (
          <section className="mt-12 border-t border-champagne/30 pt-10 sm:mt-16 sm:pt-12" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-serif text-xl tracking-wide text-obsidian sm:text-2xl">
              Related projects
            </h2>
            <div className="mt-6 grid gap-px bg-champagne/20 sm:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
