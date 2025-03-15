import type { Metadata} from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";


const cormorant_Garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormonant-garamond",
  weight: ["400"]
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"]
})

export const metadata: Metadata = {
  title: "Mxolisi Masuku",
  description: "Software Development, Information Systems, and personal explorations.",

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mxolisimasuku.com',
    title: 'Mxolisi Masuku - Software Developer',
    description: 'Software Development, Information Systems, and personal explorations.',
    siteName: 'Mxolisi Masuku Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mxolisi Masuku - Software Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mxolisi Masuku - Software Developer',
    description: 'Software Development, Information Systems, and personal explorations.',
    images: ['/og-image.jpg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant_Garamond.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
<Header/>
<div className="mx-auto w-11/12 md:w-3/5 flex flex-col gap-16 mb-20"> 


{children}



 </div> 
        </ThemeProvider>
      
      </body>
    </html>
  );
}
