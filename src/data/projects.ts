import type { Project } from "@/types/project";

/**
 * Static portfolio data. Edit this file to add or update projects.
 * Cover: path under public/ (e.g. "/portfolio/covers/name.jpg") or external URL (e.g. Unsplash).
 */
export const projectsData: Project[] = [
  {
    id: "1",
    slug: "agent-imobiliar",
    title: "Real Estate Agent Website",
    short_description:
      "A dedicated website for a real estate agent at agent.nicolae-valentin-dinca.net: property listings, contact, and a modern React-based interface with high-quality imagery.",
    long_description: `A full website built for a real estate agent, focused on presenting the professional profile, current listings, and clear contact options. The project delivers a fast, responsive experience tailored to clients searching for properties.

The site showcases featured properties with large imagery, concise descriptions, and direct call-to-action for enquiries. The layout is designed to work equally well on desktop and mobile, with clear navigation and a professional visual identity aligned with the luxury real estate segment.

Technologies used include React for the UI, Tailwind CSS for styling, and high-quality images (sourced from Unsplash where needed) to keep the content fresh and visually strong. The result is a complete, production-ready presence that the agent can use as their primary online touchpoint.`,
    year: 2025,
    tech: ["React", "Tailwind CSS", "Unsplash API"],
    category: "Agent",
    live_url: "https://agent.nicolae-valentin-dinca.net",
    repo_url: null,
    cover_path:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    gallery_paths: [],
    published: true,
    sort_order: 0,
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z",
  },
  {
    id: "2",
    slug: "agentie-imobiliara",
    title: "Real Estate Agency Website",
    short_description:
      "A full website for a real estate agency at agency.nicolae-valentin-dinca.net: team, property portfolio, services, and contact—built with React and a clean, professional design.",
    long_description: `An online presence for a real estate agency, designed to present the company, its team, property portfolio, and services in a clear and trustworthy way. The site serves as the main digital hub for the agency and supports both brand awareness and lead generation.

The homepage introduces the agency’s mission and value proposition. A dedicated section highlights the team with short bios and roles, building credibility. The property section showcases a selection of listings with images and key details, with clear paths to contact or request more information. The design uses a consistent colour palette and typography to reinforce a professional, reliable image.

Built with React and Tailwind CSS, the site is fully responsive and performant. Imagery is handled via Unsplash (or equivalent) to maintain a high standard of visuals. The outcome is a complete agency website that is easy to update and ready for real-world use.`,
    year: 2025,
    tech: ["React", "Tailwind CSS", "Unsplash"],
    category: "Agency",
    live_url: "https://agency.nicolae-valentin-dinca.net",
    repo_url: null,
    cover_path:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    gallery_paths: [],
    published: true,
    sort_order: 1,
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z",
  },
  {
    id: "3",
    slug: "dezvoltator-imobiliar",
    title: "Real Estate Developer Website",
    short_description:
      "A website for a real estate developer at developer.nicolae-valentin-dinca.net: projects, completed work, and contact—focused on clarity and conversion with a modern React stack.",
    long_description: `A dedicated website for a real estate developer, aimed at presenting current and completed projects, company expertise, and clear paths for partnership or enquiries. The content and layout are structured to support trust and conversion rather than only branding.

The site includes an overview of the developer’s track record and a projects section where each development is presented with imagery, location, scale, and status. Descriptions are written to highlight quality, timeline, and key selling points. Contact and enquiry options are prominent so investors, buyers, or partners can reach out easily.

Implementation uses React for the front end and Tailwind CSS for a consistent, responsive layout. Images are sourced from Unsplash (or similar) to keep project visuals strong and up to date. The result is a clear, conversion-oriented developer website that communicates professionalism and readiness for new projects.`,
    year: 2025,
    tech: ["React", "Tailwind CSS", "Unsplash"],
    category: "Developer",
    live_url: "https://developer.nicolae-valentin-dinca.net",
    repo_url: null,
    cover_path:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    gallery_paths: [],
    published: true,
    sort_order: 2,
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z",
  },
];
