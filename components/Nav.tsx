"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "blog", path: "/blog" },
  { name: "projects", path: "/projects" },
  { name: "work", path: "/work" },
  // { name: "funstuff", path: "/funstuff" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = pathname === link.path || pathname.startsWith(link.path + "/");
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize font-medium transition-all hover:text-red-400 ${
              isActive ? "text-red-400 border-b-2 border-red-400" : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;