export interface IPost {
    title: string;
    slug: string;
    author: string;
    date: string;
    category: string[];
    thumbnail: string;
}

export const posts: IPost[] = [{
    title: "An Introduction to Flutter Widget Lifecycle",
    slug: "flutter",
    author: "Mxo Masuku",
    date: "2025-01-24",
    category: ["Flutter"],
    thumbnail: "/images/thumbnails/flutter.jpg"
},
{
    title: "Solution Architecture - A Freelancer's Systems Thinking Primer",
    slug: "solutions_architecture_notes",
    author: "Mxo Masuku",
    date: "2025-01-27",
    category: ["Systems Thinking", "Architecture"],
    thumbnail: "/images/thumbnails/system_thinking.png"
},
{
    title: "Handling Build Context After An Async Gap",
    slug: "handling_build_context",
    author: "Mxo Masuku",
    date: "2025-01-29",
    category: ["Flutter"],
    thumbnail: "/images/thumbnails/flutter.jpg"
},

{
    title: "Intro To Simple Flutter State Management With Provider",
    slug: "state_mgmt_with_provider",
    author: "Mxo Masuku",
    date: "2025-02-2",
    category: ["Flutter"],
    thumbnail: "/images/thumbnails/flutter.jpg"
},
{
    title: "Dart's Extension Method",
    slug: "dart_extensions",
    author: "Mxo Masuku",
    date: "2025-02-6",
    category: ["Flutter"],
    thumbnail: "/images/thumbnails/flutter.jpg"
},
{
    title: "iOS and Android Errors After Installing Firebase in Your Project",
    slug: "ios_and_android_errors_on_firebase_installation",
    author: "Mxo Masuku",
    date: "2025-02-13",
    category: ["Flutter"],
    thumbnail: "/images/thumbnails/flutter.jpg"
},
{
    title: "Software Architecture and the Future for Software Developers (Especially If You Wanna Build a SaaS)",
    slug: "architecture_for_saas_future",
    author: "Mxo Masuku",
    date: "2025-03-21",
    category: ["Architecture"],
    thumbnail: "/images/thumbnails/system_thinking.png"
},
{
    title: "Test Firebase Auth with Node.js and Emulators: Why You Need Server-Created Session Cookies",
    slug: "firebase_auth_session_cookies",
    author: "Mxo Masuku",
    date: "2025-08-04",
    category: ["Node.js", "Firebase", "Security", "Backend"],
    thumbnail: "/images/thumbnails/node_firebase.png"
},
]