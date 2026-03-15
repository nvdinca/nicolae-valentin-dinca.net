"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { getImageUrl } from "@/lib/imageUrl";
import type { Project } from "@/types/project";

type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const coverUrl = getImageUrl(project.cover_path);
  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      className="transition-shadow hover:shadow-md"
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block overflow-hidden bg-ivory transition hover:opacity-95"
      >
        <div className="aspect-[4/3] relative overflow-hidden bg-warm-gray/20">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={project.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-warm-gray">
              No image
            </div>
          )}
        </div>
        <div className="border-t border-champagne/30 p-4 sm:p-6">
          <h2 className="font-serif text-lg tracking-wide text-obsidian sm:text-xl">
            {project.title}
          </h2>
          {project.year != null && (
            <p className="mt-1 font-sans text-sm text-warm-gray">{project.year}</p>
          )}
          {project.short_description && (
            <p className="mt-2 line-clamp-2 font-sans text-sm text-obsidian/80">
              {project.short_description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
