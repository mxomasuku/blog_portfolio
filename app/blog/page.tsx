import PageHeader from "@/components/PageHeader";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { BlogFilter } from "@/components/BlogFilter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Notes | Mxo Masuku",
  description: "Thoughts on Flutter, React, Firebase, system architecture, and building SaaS products.",
};

const Blog = () => {
  const pageTitle = "Blog & Notes";
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <PageHeader pageTitle={pageTitle} />

      <section className="max-w-4xl mx-auto px-4 py-8">
        <BlogFilter posts={posts} categories={categories} />
      </section>
    </>
  );
};

export default Blog;