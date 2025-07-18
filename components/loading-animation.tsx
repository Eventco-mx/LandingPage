"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Music,
  PartyPopper,
  SnowflakeIcon as Confetti,
  Cake,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoadingAnimation() {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simular tiempo de carga y luego iniciar la animación de salida
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700",
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="relative w-72 h-72">
        {/* Círculo principal */}
        <div
          className="absolute inset-0 border-8 border-t-purple-600 border-r-purple-600 border-b-transparent border-l-transparent rounded-full animate-spin"
          style={{ animationDuration: "2s" }}
        ></div>

        {/* Círculo secundario */}
        <div
          className="absolute inset-4 border-8 border-t-transparent border-r-transparent border-b-purple-300 border-l-purple-300 rounded-full animate-spin"
          style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
        ></div>

        {/* Texto central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-purple-600 tracking-widest animate-pulse">
            <b>CELEA</b>
          </span>
        </div>

        {/* Elementos festivos animados */}
        <div className="absolute w-full h-full">
          {/* Confeti y elementos de fiesta con animaciones */}
          <Confetti
            className="absolute text-yellow-300 h-8 w-8 animate-bounce"
            style={{ top: "10%", left: "10%", animationDelay: "0.2s" }}
          />
          <PartyPopper
            className="absolute text-pink-400 h-8 w-8 animate-ping"
            style={{
              top: "20%",
              right: "10%",
              animationDelay: "0.5s",
              animationDuration: "2s",
            }}
          />
          <Music
            className="absolute text-purple-300 h-8 w-8 animate-pulse"
            style={{ bottom: "20%", left: "15%", animationDelay: "0.7s" }}
          />
          <Cake
            className="absolute text-green-300 h-8 w-8 animate-bounce"
            style={{ bottom: "15%", right: "15%", animationDelay: "0.9s" }}
          />
          <Heart
            className="absolute text-red-400 h-8 w-8 animate-ping"
            style={{
              top: "45%",
              right: "5%",
              animationDelay: "0.3s",
              animationDuration: "2.5s",
            }}
          />
        </div>
      </div>
    </div>
  );
}
