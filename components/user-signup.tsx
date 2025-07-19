"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";

export default function UserSignup() {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    ciudad: "",
    fecha_evento: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Campo obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "Campo obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Correo electrónico no válido";
    }
    if (!formData.ciudad.trim()) newErrors.ciudad = "Campo obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const dataToSave = {
        ...formData,
        fecha_evento: date ? format(date, "yyyy-MM-dd") : "",
      };
      await addDoc(collection(db, "usuarios"), dataToSave);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error al guardar en Firebase:", error);
      alert("Ocurrió un error. Intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
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
            Te notificaremos cuando <b>CELEA</b> esté disponible en tu ciudad.
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
        de <b>CELEA</b>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="user-name">Nombre</Label>
          <Input
            id="user-name"
            placeholder="Tu nombre completo"
            required
            value={formData.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
          />
          {errors.nombre && (
            <p className="text-sm text-red-500">{errors.nombre}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="user-email">Correo electrónico</Label>
          <Input
            id="user-email"
            type="email"
            placeholder="tu@email.com"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="user-city">Ciudad</Label>
          <Input
            id="user-city"
            placeholder="¿Dónde vives?"
            required
            value={formData.ciudad}
            onChange={(e) => handleChange("ciudad", e.target.value)}
          />
          {errors.ciudad && (
            <p className="text-sm text-red-500">{errors.ciudad}</p>
          )}
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
