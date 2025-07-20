import { CheckCircle } from "lucide-react";
import Confetti from "react-confetti";

interface SuccessProps {
  windowSize: { width: number; height: number };
  isUser: boolean;
  setCurrentView: (view: "selection" | "user" | "provider") => void;
}

export default function SuccessMessage({
  windowSize,
  isUser,
  setCurrentView,
}: SuccessProps) {
  return (
    <div className="relative p-8 rounded-xl shadow-lg bg-white border border-purple-100 overflow-hidden">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={300}
        gravity={0.2}
        recycle={true}
        initialVelocityY={-10}
      />
      <div className="text-center py-8 relative">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4 animate-pulse">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          ¡Estamos de fiesta!
        </h3>
        <p className="text-gray-700">
          Tu registro fue exitoso. Pronto te contactaremos con más detalles
          sobre cómo{" "}
          {isUser ? (
            <>
              comenzar a usar <b>CELEA</b>
            </>
          ) : (
            <>
              unirte a <b>CELEA</b> como proveedor.
            </>
          )}
        </p>
        <button
          onClick={() => setCurrentView("selection")}
          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Volver
        </button>
      </div>
    </div>
  );
}
