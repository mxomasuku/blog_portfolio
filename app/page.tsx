"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


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
          <span className="text-4xl font-extrabold text-primary">+2500</span> hours and
          <span className="text-4xl font-extrabold text-primary ml-2">2</span> long-term contracts on Upwork
        </p>
      </section>

      {/* Favourite Project */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2">My Favourite Project</h2>
            <h3 className="text-2xl font-bold mb-2">
              Fleet Management Dashboard <span className="text-sm font-normal">(originally designed for personal use)</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A cloud-hosted fleet & operations platform for managing drivers, vehicles, income, and service tracking.
              Built with <span className="font-medium">React (Vite + TypeScript)</span>, Tailwind CSS, Redux Toolkit Query,
              Firebase Auth & Firestore, and an Express/Node API deployed on Google Cloud Run.
              Frontend is hosted on Firebase with CI/CD powered by Cloud Build.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "React", "Vite", "TypeScript", "Tailwind", "Redux Toolkit Query",
                "Firebase Auth", "Firestore", "Express", "Cloud Run", "Firebase Hosting"
              ].map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://trogern-logistics.web.app"
                target="_blank"
                className="px-4 py-2 rounded-md border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition dark:border-gray-100 dark:text-gray-100"
                aria-label="Go to Dashboard Login"
              >
                Sign Up <span className="text-xs font-light">(open beta)</span>
              </Link>
            </div>
          </div>
        </section>
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
          I like to build software that gets integrated
        </p>
      </section>
      <section className="mt-4 flex justify-center">
        <div>
          <Link href="/contact">
            <Button className="animate-bounce">Contact Me</Button>
          </Link>
        </div>
      </section>


    </main>
  );
}
