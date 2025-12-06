import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';
import { Calendar, Stethoscope, Sparkles } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Calendar,
    title: 'Agende Sua Avaliação',
    description: 'Entre em contato pelo WhatsApp ou telefone. Atendemos você rapidamente.',
  },
  {
    id: 2,
    icon: Stethoscope,
    title: 'Consulta Personalizada',
    description: 'Nossa equipe avalia suas necessidades e cria um plano de tratamento exclusivo.',
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Transforme Seu Sorriso',
    description: 'Realize seu tratamento com conforto, segurança e resultados excepcionais.',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="processo" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="text-gradient-strong">Funciona</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Seu novo sorriso em 3 passos simples
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-coral to-indigo opacity-30" />
                )}
                
                <div className="relative z-10 inline-flex items-center justify-center w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-coral/20 to-indigo/20 glass-card">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-warm-orange flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-deep-blue to-indigo rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                  {step.id}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
