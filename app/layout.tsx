import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://transportesfink.com.br"),
  title: "Transportes Fink | Transporte Rodoviário para Empresas",
  description:
    "Transporte rodoviário para empresas que não podem parar. Operações B2B com segurança, agilidade, transparência e atuação do Sul a São Paulo.",
  keywords: [
    "transporte rodoviário de cargas",
    "transportadora para empresas",
    "logística B2B",
    "transportadora Rio Grande do Sul São Paulo",
    "gestão logística",
  ],
  other: {
    "contact:email": "transportadorafink@gmail.com",
    "contact:instagram": "https://www.instagram.com/transportesfink/",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Transportes Fink",
    title: "Transportes Fink | Transporte Rodoviário para Empresas",
    description: "Movemos o que move o Brasil.",
    images: [
      {
        url: "/images/hero-truck.png",
        width: 1536,
        height: 1024,
        alt: "Caminhão da Transportes Fink em rota rodoviária",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportes Fink",
    description: "Movemos o que move o Brasil.",
    images: ["/images/hero-truck.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
