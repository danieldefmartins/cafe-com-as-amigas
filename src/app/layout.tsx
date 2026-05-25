import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe com as Amigas | Encontro Real com Jesus",
  description:
    "Um movimento de mulheres em Boston buscando cura, libertacao e um encontro real com Jesus. Espiritualidade, crescimento pessoal e profissional fundamentados na Palavra de Deus.",
  keywords: [
    "cafe com as amigas",
    "mulheres cristaas",
    "boston",
    "encontro com jesus",
    "cura interior",
    "libertacao",
    "mulheres brasileiras",
  ],
  openGraph: {
    title: "Cafe com as Amigas",
    description:
      "Um encontro real com Jesus. Cura, libertacao e proposito para mulheres em Boston.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
