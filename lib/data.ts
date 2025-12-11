import { Project, WorkExperience } from "@/types";

export const projects: Project[] = [
    {
        id: "fleet-dashboard",
        title: "Fleet Management Dashboard",
        description:
            "A cloud-hosted fleet & operations platform for managing drivers, vehicles, income, and service tracking. Features real-time analytics, comprehensive reporting, and role-based access control.",
        role: "Full Stack Developer",
        year: "2024",
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Redux Toolkit Query",
            "Firebase Auth",
            "Firestore",
            "Express",
            "Cloud Run",
        ],
        link: "https://trogern-logistics.web.app",
        featured: true,
    },
    {
        id: "shiftcatcher",
        title: "ShiftCatcher Dashboard",
        description:
            "Scalable shift & session tracking system with real-time analytics, state management, and clean UI design. Transformed from a customer service dashboard into a full business management system.",
        role: "Lead Frontend Developer",
        year: "2023-2024",
        technologies: ["React", "Firebase", "Node.js", "Chakra UI", "Recharts"],
        featured: true,
    },
    {
        id: "biosync",
        title: "BioSync",
        description:
            "Health tracking application designed to monitor medical data including sleep patterns, VO2 max, heart rate, and recovery metrics. Focus on long-term autonomy and doctor-usable insights.",
        role: "Solo Developer",
        year: "2024",
        technologies: ["Flutter", "Firebase", "Dart", "Clean Architecture"],
        github: "https://github.com/mxomasuku/biosync",
    },
    {
        id: "syrhema",
        title: "Syrhema Projects Website",
        description:
            "Complete digital identity creation for a local business. Led the design workflow organization and site launch, proving ability to build systems in real-world African business contexts.",
        role: "Digital Consultant & Web Developer",
        year: "2025",
        technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    },
];

export const workExperience: WorkExperience[] = [
    {
        id: "syrhema",
        company: "Syrhema Projects",
        role: "Digital Consultant & Web Developer",
        period: "2025",
        description:
            "Led the creation of Syrhema's first digital identity. From organizing design workflows to launching the site, this was my first full local contract — proving my ability to build systems in real-world African business contexts.",
        highlights: [
            "Complete brand identity development",
            "Website design and development",
            "Design system creation",
        ],
    },
    {
        id: "clearsky",
        company: "Clearsky (Open Source)",
        role: "Volunteer Frontend Contributor",
        period: "2025",
        description:
            "Joined via BlueSky. First real open-source contribution beyond tutorial-level code. Helped improve frontend component design and modular code practices in a real dev environment.",
        highlights: [
            "Component architecture improvements",
            "Code modularity optimization",
            "Collaborative development experience",
        ],
    },
    {
        id: "shiftcatcher",
        company: "ShiftCatcher",
        role: "Lead Frontend Developer",
        period: "2023 – 2024",
        description:
            "Hired to build a customer service dashboard. Ended up turning it into a business management system. Specialized in data insights, UI state syncing, and scalable frontend logic.",
        highlights: [
            "Real-time analytics implementation",
            "Complex state management",
            "UI/UX design and development",
        ],
    },
    {
        id: "freelance",
        company: "Independent",
        role: "Freelance Developer",
        period: "2022 – Present",
        description:
            "2,500+ hours logged on Upwork. Focused on startup tooling, dashboards, and business systems. I specialize in fast delivery and long-term maintainability using React, Firebase, and clean UI logic.",
        highlights: [
            "2,500+ hours on Upwork",
            "2 long-term contracts",
            "100% client satisfaction",
        ],
    },
];

export const technologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Flutter",
    "Firebase",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
];

export const socialLinks = {
    github: "https://github.com/mxomasuku",
    linkedin: "https://www.linkedin.com/in/mxolisi-masuku-ba27411a1",
    upwork: "https://www.upwork.com/freelancers/~01c3f7729035b325ad",
    bluesky: "https://bsky.app/profile/mxomasuku.bsky.social",
    email: "mailto:mxomasuku@email.com",
};
