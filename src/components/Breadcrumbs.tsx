import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`font-sans text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-warm-gray">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-x-2">
            {i > 0 && (
              <span className="text-champagne/70" aria-hidden>
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="transition hover:text-forest focus:outline-none focus:ring-2 focus:ring-forest/40 focus:ring-offset-2 rounded"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-obsidian/90" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
