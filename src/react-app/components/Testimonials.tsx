import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    text: 'Transformaram meu sorriso! Atendimento impecável e resultado além das expectativas. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    id: 2,
    name: 'João Santos',
    text: 'Profissionais extremamente qualificados. Fiz implantes e o resultado ficou perfeito. Equipe nota 10!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Costa',
    text: 'Melhor clínica que já conheci! Ambiente acolhedor, tecnologia moderna e atendimento humanizado.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="depoimentos" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Dizem Nossos <span className="text-gradient-warm">Pacientes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Centenas de sorrisos transformados e vidas mudadas
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-card rounded-2xl p-6 hover-lift transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warm-orange text-warm-orange" />
                ))}
              </div>
              <p className="text-gray-200 mb-4 leading-relaxed">"{testimonial.text}"</p>
              <p className="font-semibold text-gradient-warm">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
