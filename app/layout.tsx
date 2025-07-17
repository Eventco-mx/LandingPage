import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celea",
  description: "Aplicación para encontrar proveedores de eventos",
  generator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const testEnvVariables = {
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || "default",
  };

  console.log("Test Environment Variables:", testEnvVariables);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
