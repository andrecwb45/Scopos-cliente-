import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';
import { MessageCircle } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Implantes Dentários',
    description: 'Recupere a função e estética do seu sorriso com implantes de última geração.',
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/service-implantes.png',
  },
  {
    id: 2,
    title: 'Clareamento Dental',
    description: 'Dentes mais brancos e brilhantes em poucas sessões, com resultados duradouros.',
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/service-clareamento.png',
  },
  {
    id: 3,
    title: 'Ortodontia',
    description: 'Alinhadores invisíveis e aparelhos modernos para o sorriso perfeito.',
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/service-ortodontia.png',
  },
  {
    id: 4,
    title: 'Restaurações Estéticas',
    description: 'Lentes de contato dental e facetas para um sorriso natural e harmonioso.',
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/service-restauracao.png',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappNumber = '5511991111222';

  const handleWhatsApp = (serviceName: string) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre ${serviceName}.`,
      '_blank'
    );
  };

  return (
    <section id="servicos" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-gradient-warm">Serviços</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Soluções completas para seu sorriso perfeito
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group glass-card rounded-3xl overflow-hidden hover-lift transition-smooth cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-coral to-warm-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {service.id}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral to-warm-orange text-white font-semibold rounded-full hover:shadow-lg transition-smooth opacity-0 group-hover:opacity-100"
                  aria-label={`Agendar ${service.title}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
