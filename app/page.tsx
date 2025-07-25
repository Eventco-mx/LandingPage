"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users } from "lucide-react";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import ProviderBenefitsSection from "@/components/provider-benefits-section";
import UserSignup from "@/components/user-signup";
import ProviderSignup from "@/components/provider-signup";
import SuccessMessage from "@/components/success-message";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import LoadingAnimation from "@/components/loading-animation";

export default function LandingPage() {
  const [currentView, setCurrentView] = useState<
    "selection" | "user" | "provider"
  >("selection");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (currentView === "selection") {
      setIsSubmitted(false);
    }
  }, [currentView]);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const cancelSignupHandler = () => {
    setCurrentView("selection");
    setIsSubmitted(false);
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
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  ¿Cómo quieres usar <b>CELEA</b>?
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Sé parte de los primeros usuarios en <b>CELEA</b> y obtén
                  acceso prioritario cuando lancemos la plataforma.
                </p>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setCurrentView("user")}
                    className="flex flex-col items-center justify-center rounded-2xl border border-purple-200 bg-white shadow-sm hover:shadow-md hover:border-purple-400 transition-all duration-300 px-6 py-5"
                  >
                    <Calendar className="h-6 w-6 mb-2 text-purple-600" />
                    <span className="text-lg font-medium text-gray-900">
                      Quiero organizar mi evento
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentView("provider")}
                    className="flex flex-col items-center justify-center rounded-2xl border border-purple-200 bg-white shadow-sm hover:shadow-md hover:border-purple-400 transition-all duration-300 px-6 py-5"
                  >
                    <Users className="h-6 w-6 mb-2 text-purple-600" />
                    <span className="text-lg font-medium text-gray-900">
                      Quiero unirme como proveedor
                    </span>
                  </button>
                </div>
              </div>
            )}

            {currentView === "user" && (
              <div className="max-w-lg mx-auto">
                {isSubmitted ? (
                  <SuccessMessage
                    windowSize={windowSize}
                    isUser={true}
                    setCurrentView={setCurrentView}
                  />
                ) : (
                  <>
                    <Button
                      onClick={() => setCurrentView("selection")}
                      variant="ghost"
                      className="mb-6 text-purple-600 hover:text-purple-700"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Volver a opciones
                    </Button>
                    <UserSignup
                      isSubmitted={isSubmitted}
                      setIsSubmitted={setIsSubmitted}
                    />
                  </>
                )}
              </div>
            )}

            {currentView === "provider" && (
              <div className="max-w-lg mx-auto">
                {isSubmitted ? (
                  <>
                    <SuccessMessage
                      windowSize={windowSize}
                      isUser={false}
                      setCurrentView={setCurrentView}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        setCurrentView("selection");
                        setIsSubmitted(false);
                      }}
                      variant="ghost"
                      className="mb-6 text-purple-600 hover:text-purple-700"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Volver
                    </Button>
                    <ProviderSignup
                      onCancelHandler={cancelSignupHandler}
                      isSubmitted={isSubmitted}
                      setIsSubmitted={setIsSubmitted}
                    />
                  </>
                )}
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
