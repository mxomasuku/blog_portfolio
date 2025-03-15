import PageHeader from "@/components/PageHeader";
import ProjectsCard from "@/components/ProjectsCard";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { sampleProjects } from '@/data/projects'

export default function Home() {
  const pageTitle = "Home Page";

  return (
    <main className="p-6">
      <PageHeader pageTitle={pageTitle} />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="text-center md:text-left flex-1">
        <h1 className="text-3xl font-bold mb-2">Hi, 👋, I&apos;m [Mxo Masuku]</h1>
          <p className="text-lg text-gray-600">
            A passionate Software Developer skilled in React, Node, TypeScript, Firebase, and Flutter.
          </p>
          <div className="mt-4">
            <Link href="/resume.pdf">
              <p className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Download Resume</p>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-green-400">
            <Image 
              src="/profile.jpg" 
              alt="Profile Picture" 
              width={200} 
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex gap-4 text-2xl">
          <span>⚛️ React</span>
          <span>🚀 Node.js</span>
          <span>🟦 TypeScript</span>
          <span>🔥 Firebase</span>
          <span>📱 Flutter</span>
        </div>
      </section>

      {/* Projects */}
      <div className="flex flex-wrap w-full gap-6">
        {sampleProjects.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>

      {/* Social Links */}
      <section className="mt-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Connect with Me</h2>
        <div className="flex justify-center gap-4 text-2xl">
          <Link href="https://github.com/mxomasuku"  target="_blank" className="text-gray-700 hover:text-green-500"><FaGithub />
          </Link>
          <Link href="www.linkedin.com/in/mxolisi-masuku-ba27411a1" target="_blank" className="text-gray-700 hover:text-green-500"><FaLinkedin />
          </Link>
          <Link href="mailto:mxolisi.b.masuku@gmail.com" className="text-gray-700 hover:text-green-500"><FaEnvelope />
          </Link>
        </div>
      </section>
    </main>
  );
}