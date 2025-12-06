import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';
import { MessageCircle, Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: 'Básico',
    price: 'A partir de R$ 299',
    installments: '12x de R$ 29,90',
    benefits: [
      'Consulta completa + raio-X',
      'Limpeza profissional',
      'Plano de tratamento personalizado',
    ],
    gradient: 'from-gray-600 to-gray-700',
  },
  {
    id: 2,
    name: 'Completo',
    price: 'A partir de R$ 899',
    installments: '12x de R$ 89,90',
    benefits: [
      'Tudo do plano Básico',
      'Clareamento dental profissional',
      'Restaurações estéticas (até 3)',
    ],
    gradient: 'from-coral to-warm-orange',
    featured: true,
  },
  {
    id: 3,
    name: 'Premium',
    price: 'A partir de R$ 2.499',
    installments: '18x de R$ 149,90',
    benefits: [
      'Tudo do plano Completo',
      'Lentes de contato dental',
      'Acompanhamento VIP por 12 meses',
    ],
    gradient: 'from-deep-blue to-indigo',
  },
];

export default function Plans() {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappNumber = '5511991111222';

  const handlePlanClick = (planName: string) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse no plano ${planName}. Gostaria de mais informações!`,
      '_blank'
    );
  };

  return (
    <section id="planos" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos Flexíveis Para Seu <span className="text-gradient-warm">Novo Sorriso</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Valores acessíveis, opções de parcelamento e total transparência
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative glass-card rounded-3xl p-8 hover-lift transition-smooth ${
                plan.featured ? 'neon-border-coral scale-105 md:scale-110' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-coral to-warm-orange rounded-full text-white text-sm font-bold shadow-lg">
                  Mais Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${plan.gradient} mb-3`}>
                  <p className="text-white font-bold text-lg">{plan.price}</p>
                </div>
                <p className="text-gray-300 text-sm">{plan.installments}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanClick(plan.name)}
                className={`w-full px-6 py-4 bg-gradient-to-r ${plan.gradient} text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 transition-smooth`}
                aria-label={`Contratar plano ${plan.name}`}
              >
                <MessageCircle className="w-5 h-5" />
                Quero Este Plano
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-300 text-sm">
            ⏰ <span className="font-semibold">Agenda aberta esta semana</span> - Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
}
