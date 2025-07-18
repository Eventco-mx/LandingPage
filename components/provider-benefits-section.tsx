"use client";

import {
  TrendingUp,
  Shield,
  Users,
  Clock,
  Star,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProviderBenefitsSection() {
  const providerBenefits = [
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: "Aumenta tus ventas",
      description:
        "Accede a una base creciente de clientes que buscan servicios para eventos. Más visibilidad = más oportunidades de negocio.",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Pagos seguros garantizados",
      description:
        "Recibe tus pagos de forma segura y puntual. Nuestra plataforma protege tanto a proveedores como a clientes.",
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Clientes verificados",
      description:
        "Trabaja con clientes serios y verificados. Reduce el riesgo de cancelaciones de último momento o problemas de pago.",
    },
    {
      icon: <Clock className="h-12 w-12 text-orange-600" />,
      title: "Gestión simplificada",
      description:
        "Administra tus reservas, calendario y pagos desde una sola plataforma. Ahorra tiempo en tareas administrativas.",
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-600" />,
      title: "Sistema de reputación",
      description:
        "Construye tu reputación con reseñas reales de clientes. Los mejores proveedores obtienen más visibilidad.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-indigo-600" />,
      title: "Comisiones competitivas",
      description:
        "Tarifas justas y transparentes. Sin costos ocultos ni sorpresas. Tú te enfocas en tu negocio, nosotros en la tecnología.",
    },
  ];

  return (
    <section
      id="provider-benefits-section"
      className="bg-gradient-to-br from-gray-50 to-purple-50 py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-purple-100 px-4 py-2 text-sm text-purple-800 font-medium mb-4">
            Para Proveedores
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Haz crecer tu negocio con <b>CELEA</b>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Únete a la plataforma líder en servicios para eventos y lleva tu
            negocio al siguiente nivel. Conecta con miles de clientes que buscan
            exactamente lo que ofreces.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {providerBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-6 p-3 bg-gray-50 rounded-xl w-fit">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 text-center">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              500+
            </div>
            <div className="text-gray-600">Proveedores esperando</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              10K+
            </div>
            <div className="text-gray-600">Usuarios registrados</div>
          </div>
        </div>
      </div>
    </section>
  );
}
