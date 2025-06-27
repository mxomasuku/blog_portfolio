import Link from "next/link";
import Image from "next/image";
export interface Project {
  slug: string;
  title: string;
  summary: string;
  thumbnail: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "biosync-health",
    title: "BioSync – Health Data Sync App",
    summary: "A personal health record management app for storing medical data, scans, and wellness metrics using Flutter + Firebase.",
    thumbnail: "/images/projects/biosync.jpg",
    tags: ["Flutter", "Firebase", "HealthTech", "OCR"],
  },
  {
    slug: "shiftcatcher-dashboard",
    title: "ShiftCatcher Admin Dashboard",
    summary: "An internal dashboard for tracking user shifts, performance insights, and grabber metrics using Chakra UI and Recharts.",
    thumbnail: "/images/projects/shiftcatcher.jpg",
    tags: ["React", "Chakra UI", "Recharts", "Analytics"],
  },
  {
    slug: "mxo-blog",
    title: "Personal Blog & Portfolio",
    summary: "A developer blog built with Next.js, MDX, and TailwindCSS to document my journey, ideas, and technical writing.",
    thumbnail: "/images/projects/blog.jpg",
    tags: ["Next.js", "TailwindCSS", "MDX", "Writing"],
  },
  {
    slug: "urban-taxi-tracker",
    title: "Urban Taxi Business Tracker",
    summary: "A financial tracking system for a local taxi business to log mileage, expenses, and weekly cash flow metrics.",
    thumbnail: "/images/projects/taxi.jpg",
    tags: ["Node.js", "MongoDB", "Business Tools"],
  },
  {
    slug: "spotify-vibes",
    title: "Spotify Vibe Mirror",
    summary: "A mood-driven music playlist generator that links blog post themes to curated Spotify tracks.",
    thumbnail: "/images/projects/spotify.jpg",
    tags: ["Spotify API", "TypeScript", "UX Experiment"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="relative h-48">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-3">
                  {p.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-sm bg-gray-100 dark:bg-gray-700/50 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}