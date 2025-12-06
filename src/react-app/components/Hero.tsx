import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '5511991111222';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma avaliação.`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+${whatsappNumber}`;
  };

  return (
    <section id="inicio" className="relative min-h-[60vh] md:min-h-[45vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://mocha-cdn.com/019af22a-a5d1-7387-a499-b9376818743a/hero-clinic.png"
          alt="Clínica Sorridere - Ambiente moderno e acolhedor"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-800/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Transforme Seu Sorriso,
            <br />
            <span className="text-gradient-warm">Transforme Sua Vida</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tecnologia de ponta aliada ao atendimento humanizado.
            Sua melhor versão começa aqui.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsApp}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-coral to-warm-orange text-white font-semibold rounded-full flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-105 transition-smooth"
              aria-label="Agendar avaliação pelo WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Avaliação
            </button>
            <button
              onClick={handleCall}
              className="group w-full sm:w-auto px-8 py-4 glass-card neon-border-indigo text-white font-semibold rounded-full flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-105 transition-smooth"
              aria-label="Ligar agora"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-coral rounded-full" />
              Avaliação sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo rounded-full" />
              Atendimento humanizado
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-coral rounded-full" />
              Tecnologia de ponta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
