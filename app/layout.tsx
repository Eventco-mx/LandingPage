import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CELEA",
  description:
    "Descubre la app que conecta organizadores y proveedores. Únete a la lista y sé el primero en usar CELEA. ¡Es gratis! 🎉",
  applicationName: "CELEA",
  generator: "Next.js",
  keywords: [
    "CELEA",
    "proveedores de eventos",
    "plataforma de eventos",
    "organización de fiestas",
    "servicios para eventos",
    "renta de inflables",
    "DJ para fiestas",
    "organización de bodas",
    "cumpleaños",
    "eventos sociales",
  ],
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  openGraph: {
    title: "CELEA | 👉 Organiza tu evento fácil y seguro con CELEA",
    description:
      "Descubre la app que conecta organizadores y proveedores. Únete a la lista y sé el primero en usar CELEA. ¡Es gratis! 🎉",
    url: "https://www.celea.app",
    siteName: "CELEA",
    images: [
      {
        url: "https://www.celea.app/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "CELEA - Organiza tu evento",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CELEA | 👉 Organiza tu evento fácil y seguro con CELEA",
    description:
      "Descubre la app que conecta organizadores y proveedores. Únete a la lista y sé el primero en usar CELEA. ¡Es gratis! 🎉",
    images: ["https://www.celea.app/android-chrome-512x512.png"],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/mstile-150x150.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
