import { CheckCircle, Calendar, Clock, ShieldCheck } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <CheckCircle className="h-10 w-10 text-purple-600" />,
      title: "Proveedores verificados y calificados",
      description:
        "Todos nuestros proveedores pasan por un riguroso proceso de verificación y son evaluados constantemente.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-purple-600" />,
      title: "Reservas seguras a través de la plataforma",
      description:
        "Realiza pagos seguros y ten la tranquilidad de que tu evento está respaldado por nuestra garantía.",
    },
    {
      icon: <Clock className="h-10 w-10 text-purple-600" />,
      title: "Ahorra tiempo y evita fraudes",
      description:
        "Encuentra todos los servicios que necesitas en un solo lugar, sin tener que buscar en múltiples sitios.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-purple-600" />,
      title: "Soporte en caso de problemas",
      description:
        "Nuestro equipo está disponible para ayudarte antes, durante y después de tu evento.",
    },
  ];

  return (
    <section id="benefits-section" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            ¿Por qué elegir <b>CELEA</b>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hacemos que organizar tu evento sea más fácil, seguro y divertido
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-purple-50 p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
