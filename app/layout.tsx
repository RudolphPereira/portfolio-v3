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
  title: "Rudolph Pereira | Frontend Engineer",
  description:
    "Hey there, I am Rudolph. A frontend engineer with a passion for building minimal, clean and interactive user interfaces.",
  openGraph: {
    title: "Rudolph Pereira | Frontend Engineer",
    description:
      "Hey there, I am Rudolph. A frontend engineer with a passion for building minimal, clean and interactive user interfaces.",
    url: "https://yourdomain.com",
    type: "website",
    images: [
      {
        url: "/images/share-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rudolph Pereira Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudolph Pereira | Frontend Engineer",
    description:
      "Hey there, I am Rudolph. A frontend engineer with a passion for building minimal, clean and interactive user interfaces.",
    images: ["/images/share-image.jpg"], // <-- Change this to your Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${caveat.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
