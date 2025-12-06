import { MessageCircle, Phone, Mail, Home, Briefcase, Image, Star, HelpCircle } from 'lucide-react';

const sections = [
  { id: 'inicio', label: 'Início', icon: Home },
  { id: 'servicos', label: 'Serviços', icon: Briefcase },
  { id: 'antes-depois', label: 'Antes & Depois', icon: Image },
  { id: 'depoimentos', label: 'Depoimentos', icon: Star },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
];

export default function Sidebar() {
  const whatsappNumber = '5511991111222';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma avaliação.`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+${whatsappNumber}`;
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contato@sorridere.com.br';
  };

  const scrollToSection = (id: string) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-50 w-20 glass-card border-r border-white/10 flex flex-col items-center py-6 gap-6">
      {/* Logo Section */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-coral to-warm-orange flex items-center justify-center text-white font-bold text-xl shadow-lg">
          S
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 flex flex-col gap-2 overflow-y-auto scrollbar-hide">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative w-14 h-14 rounded-xl glass-card border border-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/10 transition-smooth"
              aria-label={section.label}
              title={section.label}
            >
              <Icon className="w-6 h-6 text-white" />
              <span className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                {section.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Contact Actions */}
      <div className="flex flex-col gap-3 mt-4">
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral to-warm-orange flex items-center justify-center hover:scale-110 transition-smooth shadow-lg"
          aria-label="WhatsApp"
          title="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={handleCall}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-deep-blue to-indigo flex items-center justify-center hover:scale-110 transition-smooth shadow-lg"
          aria-label="Telefone"
          title="Ligar Agora"
        >
          <Phone className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={handleEmail}
          className="w-14 h-14 rounded-xl glass-card border border-white/20 flex items-center justify-center hover:scale-110 transition-smooth"
          aria-label="Email"
          title="Enviar Email"
        >
          <Mail className="w-6 h-6 text-white" />
        </button>
      </div>
    </aside>
  );
}
