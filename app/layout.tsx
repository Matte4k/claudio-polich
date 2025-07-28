import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Claudio Polich - Candidato a Intendente de Corrientes",
  description:
    "Conocé las propuestas y la experiencia de Claudio Polich, candidato a Intendente de la Ciudad de Corrientes. Una nueva visión para nuestra ciudad.",
  keywords:
    "Claudio Polich, Intendente, Corrientes, Argentina, política, candidato, elecciones",
  authors: [{ name: "Claudio Polich" }],
  openGraph: {
    title: "Claudio Polich - Candidato a Intendente de Corrientes",
    description: "Una nueva visión para la Ciudad de Corrientes",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudio Polich - Candidato a Intendente de Corrientes",
    description: "Una nueva visión para la Ciudad de Corrientes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${geist.variable}`}>
      <body
        className="font-geist-medium antialiased bg-white"
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
