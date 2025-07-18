import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CELEA",
  description: "Aplicación para encontrar proveedores de eventos",
  applicationName: "CELEA",
  generator: "Next.js",
  keywords: [
    "CELEA",
    "proveedores de eventos",
    "plataforma de eventos",
    "eventos",
    "organización de eventos",
    "servicios de eventos",
    "eventos corporativos",
    "eventos sociales",
    "eventos culturales",
    "eventos deportivos",
    "eventos educativos",
  ],
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
  icons: {
    // ✅ Favicon moderno (SVG)
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }, // Escalable
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }, // PNG fallback
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" }, // ICO fallback
    ],
    // ✅ Apple Touch Icon
    apple: "/apple-touch-icon.png",
    // ✅ Android & PWA
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg", // Opcional: para Safari pinned tabs
        color: "#5bbad5",
      },
    ],
  },
  openGraph: {
    title: "CELEA",
    description: "Aplicación para encontrar proveedores de eventos",
    url: "https://tusitio.com", // Cambia a tu dominio
    siteName: "CELEA",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Logo CELEA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CELEA",
    description: "Aplicación para encontrar proveedores de eventos",
    images: ["/android-chrome-512x512.png"],
  },
  // ✅ Windows Tiles (opcional)
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
