import type { Metadata } from "next";
import { Inter, Outfit, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const pixel = Press_Start_2P({
  weight: '400',
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youssef Ben Abdesselem | Full Stack Developer",
  description: "Premium Portfolio of Youssef Ben Abdesselem, Full Stack Developer specializing in AI, Web Scraping, and scalable architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${pixel.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
