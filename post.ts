export interface IPost {
    title: string;
    slug: string;
    author: string;
    date: string;
    category: string;
    thumbnail: string;
}

export const posts: IPost[] = [{
    title: "An Introduction to Flutter Widget Lifecycle",
    slug: "flutter",
    author: "Mxo Masuku",
    date: "2025-01-24",
    category: "Flutter",
    thumbnail: "/images/thumbnails/flutter.jpg"
}]