"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              <b>Celea</b>
            </h2>
            <p className="text-purple-200 mb-6 max-w-md">
              La plataforma que conecta eventos perfectos con proveedores
              verificados. Hacemos que organizar tu celebración sea fácil,
              seguro y divertido.
            </p>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-purple-200">
            &copy; {new Date().getFullYear()} <b>Celea</b>.
            <span className="block md:inline md:ml-2 mt-2 md:mt-0">
              Hecha para crear momentos inolvidables.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
