import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Código Patrimonio — Negocios, inversión y crecimiento personal",
  description:
    "Una plataforma de contenido premium sobre negocios, inversión, patrimonio, mercados globales y crecimiento personal con una mirada internacional.",
  keywords:
    "patrimonio, negocios, inversión, crecimiento personal, mercados globales, disciplina, estrategia, cultura financiera",
  openGraph: {
    title: "El Código Patrimonio",
    description:
      "Negocios, inversión y crecimiento personal con una mirada global.",
    type: "website",
    locale: "es_ES",
    siteName: "El Código Patrimonio",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Código Patrimonio",
    description:
      "Negocios, inversión y crecimiento personal con una mirada global.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
