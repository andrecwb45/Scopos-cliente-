import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = '5511991111222';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Quero começar minha transformação!`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+${whatsappNumber}`;
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contato@sorridere.com.br';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 bg-gray-900/50 border-t border-coral/20">
      {/* Mini CTA Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Pronto Para Começar Sua <span className="text-gradient-warm">Transformação?</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-gradient-to-r from-coral to-warm-orange text-white font-semibold rounded-full flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-105 transition-smooth"
              aria-label="Agendar avaliação"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Avaliação
            </button>
            <button
              onClick={handleCall}
              className="px-8 py-4 glass-card neon-border-indigo text-white font-semibold rounded-full flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-105 transition-smooth"
              aria-label="Falar com atendente"
            >
              <Phone className="w-5 h-5" />
              Falar Com Atendente
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content - 3 Horizontal Sections */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1: Logo & Description */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4 text-gradient-warm">Sorridere</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Clínica odontológica premium com tecnologia de ponta e atendimento humanizado. Transformando sorrisos há mais de 15 anos.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-coral/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-coral/20 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-coral/20 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links & Hours */}
          <div className="text-center md:text-left">
            <h5 className="font-bold text-lg mb-4">Links Rápidos</h5>
            <ul className="space-y-2 mb-6">
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-coral transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('planos')}
                  className="text-gray-300 hover:text-coral transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('equipe')}
                  className="text-gray-300 hover:text-coral transition-colors"
                >
                  Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-gray-300 hover:text-coral transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-coral transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
            
            <h5 className="font-bold text-lg mb-4 mt-6">Horários</h5>
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="font-semibold">Segunda a Sexta: 8h às 18h</p>
              <p className="font-semibold">Sábado: 9h às 13h</p>
              <p className="text-gray-500">Domingo: Fechado</p>
            </div>
          </div>

          {/* Section 3: Contact Info */}
          <div className="text-center md:text-left">
            <h5 className="font-bold text-lg mb-4">Contato</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                <span>Av. Paulista, 1000<br />São Paulo, SP<br />CEP 01310-100</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-coral flex-shrink-0" />
                <a href={`tel:+${whatsappNumber}`} className="hover:text-coral transition-colors">
                  (11) 99111-1222
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                <MessageCircle className="w-5 h-5 text-coral flex-shrink-0" />
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-coral flex-shrink-0" />
                <button onClick={handleEmail} className="hover:text-coral transition-colors">
                  contato@sorridere.com.br
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Sorridere Odontologia. Todos os direitos reservados.</p>
            <p>CROSP 12345 | Responsável Técnico: Dr. João Silva</p>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.</p>
          </div>
        </div>
      </div>

      {/* Micro Neon Border Top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-coral to-transparent opacity-30" />
    </footer>
  );
}
