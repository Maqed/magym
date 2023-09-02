import "./globals.scss";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers";
import { Lato } from "next/font/google";
import Navbar from "@/sections/Navbar/Navbar";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
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
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
