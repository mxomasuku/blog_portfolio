import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { BlogListItemCompact } from "@/components/BlogListItem";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Mxo Masuku`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(slug, 3);

    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            {/* Back Link */}
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-10">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category) => (
                        <Badge key={category} variant="secondary">
                            {category}
                        </Badge>
                    ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                    {post.title}
                </h1>

                {/* Description */}
                {post.description && (
                    <p className="text-lg text-muted-foreground mb-6">
                        {post.description}
                    </p>
                )}

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
                    <span className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readingTime}
                    </span>
                </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-primary hover:prose-a:underline prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-code:text-sm">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                </ReactMarkdown>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <aside className="mt-16 pt-8 border-t border-border">
                    <h2 className="text-lg font-semibold mb-4">Related Posts</h2>
                    <div className="divide-y divide-border">
                        {relatedPosts.map((relatedPost, index) => (
                            <BlogListItemCompact
                                key={relatedPost.slug}
                                post={relatedPost}
                                index={index}
                            />
                        ))}
                    </div>
                </aside>
            )}
        </main>
    );
}
