import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

// Configure a fonte Inter (para corpo de texto)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500"]
});

// Configure a fonte Montserrat (para títulos)
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["700"]
});

export const metadata: Metadata = {
  title: "Focol - Plataforma Omnichannel de Atendimento e Vendas",
  description: "Unifique seus canais de comunicação, automatize com inteligência e escale seu atendimento sem perder o controle.",
  keywords: "omnichannel, atendimento, vendas, chatbot, automação, whatsapp, instagram, messenger",
  authors: [{ name: "Focol Tech Solutions" }],
  robots: "index, follow",
  openGraph: {
    title: "Focol - Plataforma Omnichannel de Atendimento e Vendas",
    description: "Unifique seus canais de comunicação, automatize com inteligência e escale seu atendimento sem perder o controle.",
    url: "https://focol.com.br",
    siteName: "Focol",
    images: [
      {
        url: "/images/focol-og-image.png",
        width: 1200,
        height: 630,
        alt: "Focol - Plataforma Omnichannel"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Focol - Plataforma Omnichannel de Atendimento e Vendas",
    description: "Unifique seus canais de comunicação, automatize com inteligência e escale seu atendimento sem perder o controle.",
    images: ["/images/focol-twitter-image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
