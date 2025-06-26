"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";

export default function UserSignup() {
  const [date, setDate] = useState<Date>();
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
            Te notificaremos cuando <b>Celea</b> esté disponible en tu ciudad.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        ¿Quieres organizar tu próximo evento?
      </h2>
      <p className="text-gray-600 mb-6">
        Regístrate en nuestra lista de espera y sé de los primeros en disfrutar
        de <b>Celea</b>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="user-name">Nombre</Label>
          <Input id="user-name" placeholder="Tu nombre completo" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="user-email">Correo electrónico</Label>
          <Input
            id="user-email"
            type="email"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="user-city">Ciudad</Label>
          <Input id="user-city" placeholder="¿Dónde vives?" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="event-date">
            Fecha estimada de próximo evento (opcional)
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, "PPP", { locale: es })
                ) : (
                  <span>Selecciona una fecha</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                locale={es}
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Procesando..." : "Únete como cliente"}
        </Button>
      </form>
    </div>
  );
}

import { CheckCircle } from "lucide-react";
