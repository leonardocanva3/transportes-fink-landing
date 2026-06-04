import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://transportesfink.com.br"),
  title: "Transportes Fink | Transporte Rodoviário de Cargas",
  description: "Soluções em transporte rodoviário de cargas com segurança, agilidade e confiabilidade. Atendimento no Sul e Sudeste do Brasil.",
  keywords: ["transporte rodoviário de cargas", "transportadora", "logística nacional", "Sul e Sudeste"],
  other: { "contact:email": "transportadorafink@gmail.com", "contact:instagram": "https://www.instagram.com/transportesfink/" },
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", url: "/", siteName: "Transportes Fink", title: "Transportes Fink | Transporte Rodoviário de Cargas", description: "Movemos o que move o Brasil.", images: [{ url: "/images/hero-truck.png", width: 1536, height: 1024, alt: "Transportes Fink" }] },
  twitter: { card: "summary_large_image", title: "Transportes Fink", description: "Movemos o que move o Brasil.", images: ["/images/hero-truck.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
