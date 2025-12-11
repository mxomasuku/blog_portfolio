"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Mxo Masuku</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Full Stack Developer | System Thinker | Minimalist
        </p>

      </section>



      {/* Authority Section */}
      <section className="text-center mb-12">
        <p className="text-xl font-semibold">
          <span className="text-4xl font-extrabold">+2500</span> hours and
          <span className="text-4xl font-extrabold ml-2">2</span> long-term contracts on Upwork
        </p>
      </section>

      {/* Favourite Project */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-1">
            <span className="inline-flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-12 h-px bg-primary" />
              Featured Project
            </span>
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

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4 pt-4"
              >


                <Link
                  href="https://trogern-logistics.web.app"
                  target="_blank"
                  className="group inline-flex items-center gap-2 px-6 py-4 font-display text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
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
          Always aspire to build software that is intuitively useful to the user
        </p>
      </section>
      <section className="mt-4 flex justify-center">

      </section>


    </main>
  );
}
