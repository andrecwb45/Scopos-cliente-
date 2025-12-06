import { MessageCircle, Phone } from 'lucide-react';

export default function CTAFinal() {
  const whatsappNumber = '5511991111222';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Quero transformar meu sorriso!`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+${whatsappNumber}`;
  };

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-8 md:p-12 neon-border-coral">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Pronto Para o Sorriso
            <br />
            <span className="text-gradient-warm">Dos Seus Sonhos?</span>
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Agende sua avaliação gratuita e descubra como podemos transformar seu sorriso.
            Atendimento rápido e sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-gradient-to-r from-coral to-warm-orange text-white font-semibold rounded-full flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-105 transition-smooth"
              aria-label="Agendar pelo WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </button>
            <button
              onClick={handleCall}
              className="px-8 py-4 glass-card neon-border-indigo text-white font-semibold rounded-full flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-105 transition-smooth"
              aria-label="Ligar agora"
            >
              <Phone className="w-5 h-5" />
              (11) 99111-1222
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>📍 Av. Paulista, 1000 - São Paulo, SP</p>
            <p className="mt-1">🕐 Segunda a Sexta: 8h às 18h | Sábado: 9h às 13h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
