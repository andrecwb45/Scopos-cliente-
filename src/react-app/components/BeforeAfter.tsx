import { useState } from 'react';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';
import { X } from 'lucide-react';

const transformations = [
  {
    id: 1,
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/before-after-1.png',
    title: 'Transformação Completa',
  },
  {
    id: 2,
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/before-after-2.png',
    title: 'Clareamento Premium',
  },
  {
    id: 3,
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/before-after-3.png',
    title: 'Lentes de Contato',
  },
];

export default function BeforeAfter() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="antes-depois" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados <span className="text-gradient-strong">Reais</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Veja as transformações de nossos pacientes
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {transformations.map((item, index) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden hover-lift transition-smooth cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={transformations.find((t) => t.id === selectedImage)?.image}
            alt={transformations.find((t) => t.id === selectedImage)?.title}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}
