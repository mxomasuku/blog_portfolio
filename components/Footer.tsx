import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork, FaBluesky } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-24 py-6 border-t text-center flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Link href="https://github.com/mxomasuku" target="_blank" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-primary transition-colors" />
        </Link>

        <Link href="https://www.upwork.com/freelancers/~01c3f7729035b325ad" target="_blank" aria-label="Upwork">
          <FaUpwork className="text-2xl hover:text-primary transition-colors" />
        </Link>

        <Link href="https://www.linkedin.com/in/mxolisi-masuku-ba27411a1" target="_blank" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-primary transition-colors" />
        </Link>

        <Link href="https://bsky.app/profile/mxomasuku.bsky.social" target="_blank" aria-label="Bluesky">
          <FaBluesky className="text-2xl hover:text-primary transition-colors" />
        </Link>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2025 Mxo Masuku. All rights reserved.
      </p>
    </footer>
  );
}