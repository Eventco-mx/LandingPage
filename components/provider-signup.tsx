"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Props {
  onCancelHandler: () => void;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
}

export default function ProviderSignup({
  onCancelHandler,
  isSubmitted,
  setIsSubmitted,
}: Props) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    nombre_negocio: "",
    tipo_servicio: "",
    descripcion: "",
    redes: [""],
    consentimiento: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleRedLinkChange = (index: number, value: string) => {
    const updatedLinks = [...formData.redes];
    updatedLinks[index] = value;
    handleChange("redes", updatedLinks);
  };

  const addLinkField = () => {
    handleChange("redes", [...formData.redes, ""]);
  };

  const removeLinkField = (index: number) => {
    if (formData.redes.length > 1) {
      const updatedLinks = formData.redes.filter((_, i) => i !== index);
      handleChange("redes", updatedLinks);
    }
  };

  const validateStepOne = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) newErrors.nombre = "Campo obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "Campo obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Correo electrónico no válido";
    }
    if (!formData.telefono.trim()) newErrors.telefono = "Campo obligatorio";
    if (!formData.ciudad.trim()) newErrors.ciudad = "Campo obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "proveedores"), formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error al enviar a Firebase:", error);
      alert("Ocurrió un error al registrar. Intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (step === 1) return onCancelHandler();
    setStep(step - 1);
  };

  const handleNext = () => {
    if (step === 1 && !validateStepOne()) return;
    setStep(step + 1);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        ¿Eres proveedor de servicios para eventos?
      </h2>
      <p className="text-gray-600 mb-6">
        Sé de los primeros en ofrecer tus servicios en <b>CELEA</b> y aumenta
        tus ventas
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          // Información personal
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Información personal
            </h3>
            <div className="space-y-2">
              <Label htmlFor="provider-name">Nombre completo</Label>
              <Input
                id="provider-name"
                placeholder="Juan Perez"
                required
                value={formData.nombre}
                onChange={(e) => handleChange("nombre", e.target.value)}
              />
              {errors.nombre && (
                <p className="text-sm text-red-500">{errors.nombre}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider-email">Correo electrónico</Label>
              <Input
                id="provider-email"
                type="email"
                placeholder="tu@negocio.com"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider-phone">Teléfono (WhatsApp)</Label>
              <Input
                id="provider-phone"
                type="tel"
                placeholder="Tu número de contacto"
                required
                value={formData.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
              />
              {errors.telefono && (
                <p className="text-sm text-red-500">{errors.telefono}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="provider-city">Ciudad / Zona de cobertura</Label>
              <Input
                id="provider-city"
                placeholder="Cuautitlan Izcalli, Estado de Mexico"
                required
                value={formData.ciudad}
                onChange={(e) => handleChange("ciudad", e.target.value)}
              />
              {errors.ciudad && (
                <p className="text-sm text-red-500">{errors.ciudad}</p>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Información de tu negocio
            </h3>
            <div className="space-y-2">
              <Label htmlFor="provider-business-name">
                Nombre de tu negocio
              </Label>
              <Input
                id="provider-business-name"
                placeholder="Banquetes Estrella"
                required
                value={formData.nombre_negocio}
                onChange={(e) => handleChange("nombre_negocio", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service-type">Tipo de servicio ofrecido</Label>
              <Select
                required
                onValueChange={(value) => handleChange("tipo_servicio", value)}
              >
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
                value={formData.descripcion}
                onChange={(e) => handleChange("descripcion", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Redes sociales o sitio web (opcional)</Label>
              {formData.redes.map((link, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Input
                    placeholder={`Link ${index + 1}`}
                    value={link}
                    onChange={(e) => handleRedLinkChange(index, e.target.value)}
                  />
                  {formData.redes.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeLinkField(index)}
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="ghost" onClick={addLinkField}>
                + Agregar otro enlace
              </Button>
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
