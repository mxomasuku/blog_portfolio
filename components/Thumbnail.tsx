"use client";


import { IPost, posts } from "@/post";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Thumbnail () {

    const pathname = usePathname().split("/")[2];
    const post = posts.find((post: IPost) => post.slug === pathname )

  return (

    <div className="h-[250px] md:h-[500px] mb-10 overflow-hidden rounded-lg relative">

  <Image src={post?.thumbnail || ""} fill sizes="100vh" alt=""/>

    </div>

  )
}

