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

interface Props {
  onCancelHandler: () => void;
}

export default function ProviderSignup({ onCancelHandler }: Props) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleBack = () => {
    if (step === 1) return onCancelHandler(); // se puede ajustar para salir del registro
    setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
        {" "}
        <div className="text-center py-8">
          {" "}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            {" "}
            <CheckCircle className="h-8 w-8 text-green-600" />{" "}
          </div>{" "}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Gracias por registrarte!
          </h3>{" "}
          <p className="text-gray-600">
            Nos pondremos en contacto contigo pronto para darte más información
            sobre cómo unirte a <b>Celea</b> como proveedor.{" "}
          </p>{" "}
        </div>{" "}
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
      {" "}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        ¿Eres proveedor de servicios para eventos?{" "}
      </h2>{" "}
      <p className="text-gray-600 mb-6">
        Sé de los primeros en ofrecer tus servicios en <b>Celea</b> y aumenta
        tus ventas{" "}
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Información personal
            </h3>
            <div className="space-y-2">
              <Label htmlFor="provider-name">Nombre completo</Label>
              <Input id="provider-name" placeholder="Juan Perez" required />
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
              <Label htmlFor="provider-phone">Teléfono (WhatsApp)</Label>
              <Input
                id="provider-phone"
                type="tel"
                placeholder="Tu número de contacto"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider-city">Ciudad / Zona de cobertura</Label>
              <Input
                id="provider-city"
                placeholder="Cuautitlan Izcalli, Estado de Mexico"
                required
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Información de tu negocio
            </h3>
            <div className="space-y-2">
              <Label htmlFor="provider-name">Nombre de tu negocio</Label>
              <Input
                id="provider-name"
                placeholder="Banquetes Estrella"
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
                  <SelectItem value="catering">Banquetes / Catering</SelectItem>
                  <SelectItem value="mobiliario">Mobiliario</SelectItem>
                  <SelectItem value="decoracion">Decoración</SelectItem>
                  <SelectItem value="fotografia">Fotografía / Video</SelectItem>
                  <SelectItem value="animacion">
                    Animación / Entretenimiento
                  </SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider-description">
                ¿Qué ofreces o qué te hace diferente?
              </Label>
              <Input
                id="provider-description"
                placeholder="Cuéntanos brevemente sobre tu servicio"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider-socials">
                Redes sociales o sitio web (opcional)
              </Label>
              <Input
                id="provider-socials"
                placeholder="Link a Instagram, Facebook, etc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider-portfolio">
                Portafolio / muestra de tu trabajo (opcional)
              </Label>
              <Input
                id="provider-portfolio"
                type="file"
                multiple
                accept="image/*"
              />
            </div>
            <div className="flex items-center space-x-2 gap-2">
              <input type="checkbox" id="consent" required />
              <Label htmlFor="consent">
                Acepto que <b>Celea</b> me contacte por WhatsApp o correo.
              </Label>
            </div>
          </div>
        )}

        <div className="flex justify-between gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            className="w-full"
          >
            {step === 1 ? "Cancelar" : "Regresar"}
          </Button>

          {step < 2 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Siguiente
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Procesando..." : "Enviar registro"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
