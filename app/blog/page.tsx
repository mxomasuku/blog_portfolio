import PageHeader from "@/components/PageHeader";
import { posts } from "@/post";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const pageTitle = "Welcome to my Blog & Notes";
  console.log("posts", posts);

  return (
    <>
      <PageHeader pageTitle={pageTitle} />

 <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
  {posts.map((post, idx) => (
    <Link
      key={idx}
      href={`/blog/${post.slug}`}
      className="group w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-shadow hover:shadow-md"
    >
      <div className="relative w-full h-[200px] overflow-hidden rounded-md">
        <Image
          src={post.thumbnail}
          alt={`${post.title} - thumbnail`}
          fill
          sizes="100vw"
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <p className="text-xs bg-gray-100 dark:bg-gray-700/95 text-blue-700 dark:text-blue-500 font-semibold my-2 w-fit px-2 py-1 rounded-sm">
        {post.category}
      </p>
      <h2 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
        {post.title}
      </h2>
      <div className="text-gray-500 text-xs space-x-10 py-2">
        {post.date}
      </div>
    </Link>
  ))}
</section>
    </>
  );
};

export default Blog;