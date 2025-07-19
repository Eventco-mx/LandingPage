"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users } from "lucide-react";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import ProviderBenefitsSection from "@/components/provider-benefits-section";
import UserSignup from "@/components/user-signup";
import ProviderSignup from "@/components/provider-signup";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import LoadingAnimation from "@/components/loading-animation";

export default function LandingPage() {
  const [currentView, setCurrentView] = useState<
    "selection" | "user" | "provider"
  >("selection");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ocultar la animación de carga después de 3 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const cancelSignupHandler = () => {
    setCurrentView("selection");
  };

  return (
    <>
      {isLoading && <LoadingAnimation />}

      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
        <HeroSection />
        <BenefitsSection />
        <ProviderBenefitsSection />
        <div
          id="forms-section"
          className="relative container mx-auto px-4 py-16 md:py-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-3xl transform -skew-y-2 shadow-xl"></div>
          <div className="relative z-10">
            {currentView === "selection" && (
              <>
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    ¿Listo para hacer crecer tu negocio?
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Sé parte de los primeros proveedores en <b>CELEA</b> y obtén
                    acceso prioritario cuando lancemos la plataforma.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-6 h-auto text-lg"
                      onClick={() => setCurrentView("provider")}
                    >
                      Únete como proveedor
                    </Button>
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-6 h-auto text-lg"
                      onClick={() => setCurrentView("provider")}
                    >
                      Únete como cliente
                    </Button>
                  </div>
                </div>
              </>
            )}

            {currentView === "user" && (
              <div className="max-w-lg mx-auto">
                <Button
                  onClick={() => setCurrentView("selection")}
                  variant="ghost"
                  className="mb-6 text-purple-600 hover:text-purple-700"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a opciones
                </Button>
                <UserSignup />
              </div>
            )}

            {currentView === "provider" && (
              <div className="max-w-lg mx-auto">
                <Button
                  onClick={() => setCurrentView("selection")}
                  variant="ghost"
                  className="mb-6 text-purple-600 hover:text-purple-700"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver
                </Button>
                <ProviderSignup onCancelHandler={cancelSignupHandler} />
              </div>
            )}
          </div>
        </div>
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
