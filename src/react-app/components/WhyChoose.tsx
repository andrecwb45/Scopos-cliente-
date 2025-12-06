import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';
import { Award, Shield, Heart, Zap } from 'lucide-react';

const reasons = [
  {
    id: 1,
    icon: Award,
    title: 'Excelência Comprovada',
    description: '+ de 15 anos transformando sorrisos com tecnologia de ponta',
  },
  {
    id: 2,
    icon: Shield,
    title: 'Segurança Total',
    description: 'Protocolos rigorosos e equipamentos de última geração',
  },
  {
    id: 3,
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Cuidado personalizado e acolhedor em cada etapa',
  },
  {
    id: 4,
    icon: Zap,
    title: 'Resultados Rápidos',
    description: 'Tratamentos modernos com recuperação acelerada',
  },
];

export default function WhyChoose() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="por-que-escolher" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Escolher a <span className="text-gradient-warm">Sorridere</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="glass-card rounded-2xl p-6 hover-lift transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-coral to-warm-orange flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
