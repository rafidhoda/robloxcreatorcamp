import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roblox Creator Camp - Turn Roblox Time into Real-World Skills",
  description: "2-day online camp for kids ages 9-14. Build a game, create videos, code websites & design with AI. Transform your child from consumer to creator with Rafid Hoda.",
  keywords: "Roblox, coding camp, kids programming, game development, creative skills, online camp, Rafid Hoda",
  authors: [{ name: "Rafid Hoda" }],
  creator: "Rafid Hoda",
  publisher: "Hoda Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://robloxcreatorcamp.com",
    siteName: "Roblox Creator Camp",
    title: "Roblox Creator Camp - Turn Roblox Time into Real-World Skills",
    description: "2-day online camp for kids ages 9-14. Build a game, create videos, code websites & design with AI. Transform your child from consumer to creator.",
    images: [
      {
        url: "https://robloxcreatorcamp.com/social-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roblox Creator Camp - 2-day online camp for kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roblox Creator Camp - Turn Roblox Time into Real-World Skills",
    description: "2-day online camp for kids ages 9-14. Build a game, create videos, code websites & design with AI.",
    images: ["https://robloxcreatorcamp.com/social-image.jpg"],
    creator: "@rafidhoda",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <script 
          defer 
          data-domain="robloxcreatorcamp.com" 
          src="https://plausible.io/js/script.js"
        ></script>
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="e251d2d6-eccb-44c2-b1f3-616b385ee2d2";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
