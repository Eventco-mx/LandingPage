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
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  ¿Cómo quieres usar CELEA?
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Únete a la lista de espera
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <Button
                    onClick={() => setCurrentView("user")}
                    className="h-32 bg-white hover:bg-purple-50 text-gray-900 border-2 border-purple-200 hover:border-purple-400 flex flex-col items-center justify-center gap-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="h-12 w-12 text-purple-600" />
                    Quiero organizar mi evento
                  </Button>
                  <Button
                    onClick={() => setCurrentView("provider")}
                    className="h-32 bg-white hover:bg-purple-50 text-gray-900 border-2 border-purple-200 hover:border-purple-400 flex flex-col items-center justify-center gap-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Users className="h-12 w-12 text-purple-600" />
                    Quiero unirme como proveedor
                  </Button>
                </div>
              </div>
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
                  Volver a opciones
                </Button>
                <ProviderSignup />
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
