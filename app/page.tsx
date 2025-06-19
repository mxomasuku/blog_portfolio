"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Mxo Masuku</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Full Stack Developer | System Thinker | Minimalist
        </p>
        <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
          Crafting thoughtful code and radical digital experiences using React, Flutter, and Firebase.
        </p>
      </section>

      {/* Authority Section */}
      <section className="text-center mb-12">
        <p className="text-xl font-semibold">
          +2500 hours and 2 long term contracts on Upwork
        </p>
      </section>

      {/* Favourite Project */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">My Favourite Project</h2>
          <h3 className="text-2xl font-bold mb-2">Collaboration Hub</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Development of a platform for local artists and developers to share and create projects, featuring a clean codebase with Node.js and Firebase.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/your-repo"
              target="_blank"
              className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black transition"
            >
              View Code
            </Link>
            <Link
              href="https://your-live-demo.com"
              target="_blank"
              className="px-4 py-2 rounded-md border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              Live Demo
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800">
            <Image src="/profile.jpg" alt="Mxo" width={160} height={160} className="object-cover" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="text-center mb-12">
        <h2 className="text-lg font-semibold mb-2">Philosophy</h2>
        <p className="text-2xl font-bold">
          Most devs build. I question why we build what we build.
        </p>
      </section>

      <footer className="mt-24 py-6 border-t text-center flex flex-col items-center gap-4">
  <div className="flex gap-4">
    <Link href="https://github.com/mxomasuku" target="_blank" aria-label="GitHub">
      <FaGithub className="text-2xl hover:text-accent transition" />
    </Link>

    <Link href="https://www.upwork.com/freelancers/~01c3f7729035b325ad" target="_blank" aria-label="Upwork">
      <FaUpwork className="text-2xl hover:text-accent transition" />
    </Link>

    <Link href="https://www.linkedin.com/in/mxolisi-masuku-ba27411a1" target="_blank" aria-label="LinkedIn">
      <FaLinkedin className="text-2xl hover:text-accent transition" />
    </Link>
  </div>

  <p className="text-sm text-gray-500 dark:text-gray-400">
    © 2025 Mxo Masuku. All rights reserved.
  </p>
</footer>
    </main>
  );
}
