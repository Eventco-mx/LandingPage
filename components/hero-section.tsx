"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* ✅ Logo flotante siempre visible */}
      <div className="fixed bottom-4 right-4 z-50">
        <Image
          src="/logo-celea.svg" // Ajusta a tu archivo real
          alt="CELEA Logo"
          width={80}
          height={80}
          className="w-16 md:w-20 lg:w-24 h-auto object-contain drop-shadow-lg cursor-pointer"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 font-medium">
              ¡Próximamente!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
              Organiza fácil, Celebra seguro
            </h1>
            <h2 className="relative text-2xl md:text-3xl lg:text-4xl font-semibold italic tracking-tight text-purple-700">
              Encuentra todo para tu evento en un solo lugar
              <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-purple-300 rounded-full"></span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-[600px]">
              <b>CELEA</b> te conecta con los mejores servicios para tu evento,
              todo desde una sola app. Encuentra inflables, DJs, catering,
              mobiliario y más.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-6 h-auto text-lg"
              onClick={() => {
                const formsSection = document.getElementById("forms-section");
                if (formsSection) {
                  formsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Únete a la lista de espera
            </Button>
            <p className="text-sm text-gray-500 italic">
              Únete a la lista de espera{" "}
              <span className="font-medium text-purple-700">
                completamente gratis
              </span>{" "}
              y obtén acceso anticipado a <b>CELEA</b>.
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/colorful-dance-party.png"
              alt="Celebración de evento con CELEA"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
