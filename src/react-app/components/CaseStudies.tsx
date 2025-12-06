import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';
import { MessageCircle, ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    name: 'Marina A.',
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/before-after-1.png',
    problem: 'Manchas e desgaste dos dentes',
    solution: 'Clareamento + Lentes de Contato',
    result: 'Sorriso renovado em apenas 2 semanas',
  },
  {
    id: 2,
    name: 'Carlos M.',
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/before-after-2.png',
    problem: 'Perda de dentes por acidente',
    solution: 'Implantes de Titânio',
    result: 'Recuperou confiança e função mastigatória',
  },
  {
    id: 3,
    name: 'Juliana S.',
    image: 'https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/before-after-3.png',
    problem: 'Dentes desalinhados',
    solution: 'Ortodontia Invisível + Restaurações',
    result: 'Transformação completa em 8 meses',
  },
];

export default function CaseStudies() {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappNumber = '5511991111222';

  const handleResultClick = (caseName: string) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Olá! Vi o resultado de ${caseName} e quero um resultado assim também!`,
      '_blank'
    );
  };

  return (
    <section id="casos-sucesso" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformações Reais Que <span className="text-gradient-strong">Inspiram</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Casos reais de pacientes que transformaram seus sorrisos conosco
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {cases.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className="relative glass-card rounded-3xl overflow-hidden hover-lift transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Case Number Badge */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-deep-blue to-indigo rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                {caseStudy.id}
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={`Caso ${caseStudy.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gradient-warm">{caseStudy.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-coral font-bold flex-shrink-0">Problema:</span>
                    <span className="text-gray-200">{caseStudy.problem}</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-50">
                    <ArrowRight className="w-4 h-4 text-coral" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo font-bold flex-shrink-0">Solução:</span>
                    <span className="text-gray-200">{caseStudy.solution}</span>
                  </div>
                  <div className="flex items-center gap-2 opacity-50">
                    <ArrowRight className="w-4 h-4 text-coral" />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-warm-orange font-bold flex-shrink-0">Resultado:</span>
                    <span className="text-gray-200">{caseStudy.result}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleResultClick(caseStudy.name)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-coral to-warm-orange text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 transition-smooth"
                  aria-label={`Quero resultado como ${caseStudy.name}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Quero Um Resultado Assim
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-300">
            💯 <span className="font-semibold">Mais de 500 transformações realizadas</span> nos últimos 3 anos
          </p>
        </div>
      </div>
    </section>
  );
}
