import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const pageTitle = "Home Page";

  return (
    <main className="p-6">
      <PageHeader pageTitle={pageTitle} />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">Hi, 👋, I'm [Mxo Masuku] </h1>
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
        <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-green-400">
          <Image src="/profile.jpg" alt="Profile Picture" width={200} height={200} />
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
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md shadow">
            <h3 className="text-lg font-semibold">Project Name</h3>
            <p className="text-sm text-gray-600">Short project description...</p>
            <Link href="https://github.com/yourrepo" className="text-green-500 mt-2 inline-block">View on GitHub
            </Link>
          </div>
        </div>
      </section>

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