import "./globals.scss";
import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  CREATOR,
  CREATOR_URL,
  CREATOR_TWITTER_ID,
  CREATOR_TWITTER_NAME,
} from "@/types/siteData";
import { Lato } from "next/font/google";
import Navbar from "@/sections/Navbar/Navbar";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const title = SITE_NAME;
const description = `Welcome to ${SITE_NAME}, the ultimate online destination for your fitness goals. Whether you want to lose weight, gain muscle, or improve your health, we have the perfect exercises for you. Browse our website and discover how magym can help you transform your body and your life.`;
export const metadata: Metadata = {
  title,
  description,
  keywords: ["Magym", "Gym", "Strength", "Health", "Exercises", "Fitness"],
  authors: [{ name: CREATOR, url: CREATOR_URL }],
  creator: CREATOR,
  publisher: CREATOR,
  twitter: {
    card: "summary_large_image",
    title,
    description,
    siteId: CREATOR_TWITTER_ID,
    creator: CREATOR_TWITTER_NAME,
    creatorId: CREATOR_TWITTER_ID,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
