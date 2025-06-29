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
},
{
    title: "Solution Architecture - A Freelancer's Systems Thinking Primer",
    slug: "solutions_architecture_notes",
    author: "Mxo Masuku",
    date: "2025-01-27",
    category: "Systems Thinking",
    thumbnail: "/images/thumbnails/system_thinking.png"
},
{
    title: "Handling Build Context After An Async Gap",
    slug: "handling_build_context",
    author: "Mxo Masuku",
    date: "2025-01-29",
    category: "Flutter",
    thumbnail: "/images/thumbnails/flutter.jpg"
},
]