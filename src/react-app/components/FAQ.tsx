import { useState } from 'react';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Quanto tempo dura o tratamento?',
    answer: 'O tempo varia conforme o tipo de procedimento. Clareamento pode ser feito em 1-2 sessões, enquanto implantes levam de 3 a 6 meses. Na avaliação, apresentamos um cronograma detalhado.',
  },
  {
    id: 2,
    question: 'Os procedimentos causam dor?',
    answer: 'Utilizamos técnicas modernas e anestesia adequada para garantir seu conforto. A maioria dos pacientes relata pouco ou nenhum desconforto durante e após os procedimentos.',
  },
  {
    id: 3,
    question: 'Posso parcelar o tratamento?',
    answer: 'Sim! Oferecemos diversas opções de pagamento e parcelamento para facilitar seu acesso aos tratamentos. Consulte nossas condições especiais.',
  },
  {
    id: 4,
    question: 'Qual a durabilidade dos implantes?',
    answer: 'Com os cuidados adequados, implantes dentários podem durar a vida toda. Seguindo as orientações de higiene e fazendo manutenções regulares, você terá resultados duradouros.',
  },
  {
    id: 5,
    question: 'Como é feita a primeira consulta?',
    answer: 'A primeira consulta é uma avaliação completa onde conhecemos suas necessidades, fazemos exames e criamos um plano de tratamento personalizado. Sem compromisso!',
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-gradient-strong">Frequentes</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Tire suas dúvidas sobre nossos tratamentos
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="glass-card rounded-2xl overflow-hidden transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                aria-expanded={openId === faq.id}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
