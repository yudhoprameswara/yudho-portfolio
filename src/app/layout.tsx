import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yudho Prameswara | Frontend Developer",
  description: "Portfolio of Yudho Prameswara, a Frontend Developer specializing in Angular, building scalable and modern web applications with engineering precision.",
  keywords: ["Yudho Prameswara", "Frontend Developer", "Angular Developer", "React", "Next.js", "Web Developer Indonesia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-primary/30 selection:text-primary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
