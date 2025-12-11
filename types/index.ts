export type ArticleItem = {
    id: string,
    title: string,
    date: string,
    summary: string,
    category: string,
}

export interface Project {
    id: string;
    title: string;
    description: string;
    role: string;
    year: string;
    technologies: string[];
    link?: string;
    github?: string;
    featured?: boolean;
}

export interface WorkExperience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
    highlights?: string[];
}

// Blog types - used by BlogFilter and BlogListItem components
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

// Future: Newsletter subscriber
export interface Subscriber {
    email: string;
    subscribedAt: Date;
    verified: boolean;
}

// Future: Hashnode integration
export interface HashnodePost {
    id: string;
    slug: string;
    title: string;
    brief: string;
    publishedAt: string;
    coverImage?: string;
}