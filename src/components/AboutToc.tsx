const links = [
  { href: "#bio-heading", label: "Bio" },
  { href: "#top-skills-heading", label: "Top skills" },
  { href: "#focus-heading", label: "Technical focus" },
  { href: "#expertise-heading", label: "Core expertise" },
  { href: "#testimonials-heading", label: "What clients say" },
  { href: "#experience-heading", label: "Experience" },
];

export default function AboutToc() {
  return (
    <nav aria-label="On this page" className="mt-6 border-b border-champagne/20 pb-6">
      <p className="font-sans text-xs font-medium uppercase tracking-widest text-warm-gray">
        On this page
      </p>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-obsidian/80 transition hover:text-forest focus:outline-none focus:ring-2 focus:ring-forest/40 focus:ring-offset-2 rounded"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
