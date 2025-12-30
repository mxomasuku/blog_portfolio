import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mxolisi Masuku",
  description: "Software Development, Information Systems, and personal explorations.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mxomasuku.com",
    title: "Mxolisi Masuku - Software Developer",
    description: "Software Development, Information Systems, and personal explorations.",
    siteName: "Mxolisi Masuku Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mxolisi Masuku - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mxolisi Masuku - Software Developer",
    description: "Software Development, Information Systems, and personal explorations.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>

      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans noise-overlay">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />

          <main className="flex-grow">
            {children}
            <Analytics />
          </main>

          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}