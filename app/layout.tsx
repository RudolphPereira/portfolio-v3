import type { Metadata } from "next";
import { Montserrat, Caveat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rudolph Pereira | Frontend Engineer & React Developer",
  description:
    "Hey there, I'm Rudolph — a Frontend Engineer and React Developer passionate about building clean, minimal, and interactive user interfaces with modern web technologies like Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Rudolph Pereira",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "UI Engineer",
    "Frontend Developer Portfolio",
    "Modern Web Development",
    "Interactive User Interfaces",
  ],
  openGraph: {
    title: "Rudolph Pereira | Frontend Engineer & React Developer",
    description:
      "Hey there, I'm Rudolph — a Frontend Engineer and React Developer passionate about building clean, minimal, and interactive user interfaces with modern web technologies like Next.js, TypeScript, and Tailwind CSS.",
    url: "https://www.rudolphpereira.com/",
    type: "website",
    images: [
      {
        url: "https://www.rudolphpereira.com/bannerImage.jpg",
        width: 1200,
        height: 630,
        alt: "Rudolph Pereira - Frontend Engineer & React Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudolph Pereira | Frontend Engineer & React Developer",
    description:
      "Hey there, I'm Rudolph — a Frontend Engineer and React Developer passionate about building clean, minimal, and interactive user interfaces with modern web technologies like Next.js, TypeScript, and Tailwind CSS.",
    images: ["https://www.rudolphpereira.com/bannerImage.jpg"],
  },
};

function getJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rudolph Pereira",
    url: "https://www.rudolphpereira.com/",
    jobTitle: "Frontend Engineer & React Developer",
    image: "https://www.rudolphpereira.com/bannerImage.jpg",
    description:
      "Frontend Engineer and React Developer specializing in building clean, minimal, and interactive user interfaces with modern web technologies like Next.js and TypeScript.",
    sameAs: [
      "https://github.com/rudolphpereira",
      "https://www.linkedin.com/in/rudolphpereira",
      "https://portfolio-psi-bice-26.vercel.app/",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rudolph Pereira Portfolio",
    url: "https://www.rudolphpereira.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.rudolphpereira.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return [person, website];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getJsonLd(), null, 2),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${caveat.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
