import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const title = "Magym";
const description =
  "Welcome to magym, the ultimate online destination for your fitness goals. Whether you want to lose weight, gain muscle, or improve your health, we have the perfect exercises for you. Browse our website and discover how magym can help you transform your body and your life.";
export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
