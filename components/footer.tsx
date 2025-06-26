"use client"

import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

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
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              EVENT.CO
            </h2>
            <p className="text-purple-200 mb-6 max-w-md">
              La plataforma que conecta eventos perfectos con proveedores verificados. Hacemos que organizar tu
              celebración sea fácil, seguro y divertido.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const benefitsSection = document.getElementById("benefits-section")
                    if (benefitsSection) {
                      benefitsSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const providerBenefitsSection = document.getElementById("provider-benefits-section")
                    if (providerBenefitsSection) {
                      providerBenefitsSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Proveedores
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-purple-200">
            &copy; {new Date().getFullYear()} EVENT.CO. Todos los derechos reservados.
            <span className="block md:inline md:ml-2 mt-2 md:mt-0">Hecha para crear momentos inolvidables.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
