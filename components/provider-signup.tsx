"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProviderSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Gracias por registrarte!
          </h3>
          <p className="text-gray-600">
            Nos pondremos en contacto contigo pronto para darte más información
            sobre cómo unirte a <b>Celea</b> como proveedor.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        ¿Eres proveedor de servicios para eventos?
      </h2>
      <p className="text-gray-600 mb-6">
        Sé de los primeros en ofrecer tus servicios en <b>Celea</b> y aumenta
        tus ventas
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="provider-name">Nombre del proveedor / empresa</Label>
          <Input
            id="provider-name"
            placeholder="Nombre de tu negocio"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service-type">Tipo de servicio ofrecido</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un tipo de servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inflables">Inflables</SelectItem>
              <SelectItem value="dj">DJ / Música</SelectItem>
              <SelectItem value="catering">Catering</SelectItem>
              <SelectItem value="mobiliario">Mobiliario</SelectItem>
              <SelectItem value="decoracion">Decoración</SelectItem>
              <SelectItem value="fotografia">Fotografía/Video</SelectItem>
              <SelectItem value="animacion">
                Animación/Entretenimiento
              </SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="provider-email">Correo electrónico</Label>
          <Input
            id="provider-email"
            type="email"
            placeholder="tu@negocio.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="provider-phone">Teléfono</Label>
          <Input
            id="provider-phone"
            type="tel"
            placeholder="Tu número de contacto"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="provider-city">Ciudad</Label>
          <Input
            id="provider-city"
            placeholder="¿Dónde ofreces tus servicios?"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Procesando..." : "Únete como proveedor"}
        </Button>
      </form>
    </div>
  );
}
