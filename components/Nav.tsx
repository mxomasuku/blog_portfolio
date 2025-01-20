"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "blog",
        path: "/blog"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "work",
        path: "/work"
    },
  
]

const Nav = () => {

    const pathname = usePathname()
    console.log(pathname);

  return (
<nav className="flex gap-8">
  {links.map((link, index) => {
    return <Link href={link.path} key={index} className={`${link.path === pathname &&  "text-red-400 border-b-2 border-red-400"} capitalize font-medium hover:text-red-400 transition-all`}>
        {link.name}
    </Link>
  })}
</nav>
  )
}

export default Nav