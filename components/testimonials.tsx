import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="bg-purple-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Nuestra visión
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md relative">
          <Quote className="absolute text-purple-200 h-24 w-24 -top-6 -left-6 opacity-50" />
          <blockquote className="relative z-10">
            <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
              "En EVENT.CO creemos que organizar una celebración debería ser tan divertido como la fiesta misma. 
              Nuestra misión es conectar a las personas con proveedores confiables para crear momentos inolvidables, 
              sin estrés y con total seguridad."
            </p>
            <footer className="text-right">
              <p className="font-semibold text-gray-900">El equipo de EVENT.CO</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
