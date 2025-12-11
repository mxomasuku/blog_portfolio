import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  categories: string[];
  readingTime: string;
  featured?: boolean;
  draft?: boolean;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  categories: string[];
  readingTime: string;
  featured?: boolean;
  draft?: boolean;
}

export interface Category {
  name: string;
  count: number;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      // Skip drafts in production
      if (data.draft && process.env.NODE_ENV === "production") {
        return null;
      }

      return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "Mxo Masuku",
        categories: data.categories || [],
        readingTime: getReadingTime(content),
        featured: data.featured || false,
        draft: data.draft || false,
      } as BlogPostMeta;
    })
    .filter((post): post is BlogPostMeta => post !== null);

  // Sort by date, newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "Mxo Masuku",
    categories: data.categories || [],
    readingTime: getReadingTime(content),
    featured: data.featured || false,
    draft: data.draft || false,
    content,
  };
}

export function getAllCategories(): Category[] {
  const posts = getAllPosts();
  const categoryMap = new Map<string, number>();

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
    });
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) =>
    post.categories.some(
      (cat) => cat.toLowerCase() === category.toLowerCase()
    )
  );
}

export function getFeaturedPosts(): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured).slice(0, 3);
}

export function getRecentPosts(limit: number = 5): BlogPostMeta[] {
  return getAllPosts().slice(0, limit);
}

export function searchPosts(query: string): BlogPostMeta[] {
  const posts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.categories.some((cat) => cat.toLowerCase().includes(lowerQuery))
  );
}

export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPostMeta[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const posts = getAllPosts().filter((post) => post.slug !== currentSlug);

  // Score posts by category overlap
  const scored = posts.map((post) => {
    const commonCategories = post.categories.filter((cat) =>
      currentPost.categories.includes(cat)
    );
    return { post, score: commonCategories.length };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}
