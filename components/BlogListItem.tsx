"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatDateShort } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { BlogPostMeta } from "@/types";

interface BlogListItemProps {
  post: BlogPostMeta;
  index: number;
}

export function BlogListItem({ post, index }: BlogListItemProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block py-6 border-b border-border hover:bg-muted/30 transition-colors duration-300 -mx-4 px-4 rounded-lg"
      >
        <div className="flex items-start gap-4 md:gap-6">
          {/* Index Number */}
          <span className="font-mono text-xs text-muted-foreground/60 tabular-nums shrink-0 w-6 pt-1">
            {formattedIndex}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-2">
            {/* Title Row */}
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                {post.title}
              </h2>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1" />
            </div>

            {/* Description */}
            {post.description && (
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {post.description}
              </p>
            )}

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
              {/* Date */}
              <span className="text-xs text-muted-foreground">
                {formatDateShort(post.date)}
              </span>

              {/* Reading Time */}
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>

              {/* Categories */}
              <div className="flex items-center gap-1.5">
                {post.categories.slice(0, 2).map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="text-xs px-2 py-0"
                  >
                    {category}
                  </Badge>
                ))}
                {post.categories.length > 2 && (
                  <span className="text-xs text-muted-foreground">
                    +{post.categories.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// Compact variant for sidebar or related posts
interface BlogListItemCompactProps {
  post: BlogPostMeta;
  index?: number;
}

export function BlogListItemCompact({ post, index }: BlogListItemCompactProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-center gap-3 py-3 hover:text-primary transition-colors duration-200"
    >
      {index !== undefined && (
        <span className="font-mono text-xs text-muted-foreground/60 tabular-nums shrink-0 w-5">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium truncate">{post.title}</h3>
        <p className="text-xs text-muted-foreground">{formatDateShort(post.date)}</p>
      </div>
      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
    </Link>
  );
}
