import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';
import { MessageCircle } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Dra. Ana Paula Costa',
    specialty: 'Implantodontia',
    tagline: 'Apaixonada por transformar sorrisos naturalmente.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Dr. Ricardo Santos',
    specialty: 'Ortodontia & Estética',
    tagline: 'Especialista em criar harmonia perfeita.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Dra. Mariana Silva',
    specialty: 'Odontopediatria',
    tagline: 'Dedicada ao sorriso de toda a família.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&auto=format',
  },
];

export default function Team() {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappNumber = '5511991111222';

  const handleScheduleWithPro = (professionalName: string) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma consulta com ${professionalName}.`,
      '_blank'
    );
  };

  return (
    <section id="equipe" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça Quem Vai <span className="text-gradient-warm">Cuidar De Você</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Profissionais altamente qualificados, com anos de experiência e dedicação
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {team.map((member, index) => (
            <div
              key={member.id}
              className="glass-card rounded-3xl overflow-hidden hover-lift transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-coral font-semibold text-sm mb-2">{member.specialty}</p>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{member.tagline}"
                </p>
                <button
                  onClick={() => handleScheduleWithPro(member.name)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-coral to-warm-orange text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 transition-smooth"
                  aria-label={`Agendar com ${member.name}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar Consulta
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass-card rounded-2xl p-6 max-w-3xl mx-auto">
          <p className="text-gray-200 leading-relaxed">
            ✨ <span className="font-semibold">Equipe certificada</span> com especialização em cursos nacionais e internacionais. 
            Tecnologia de ponta aliada ao atendimento humanizado.
          </p>
        </div>
      </div>
    </section>
  );
}
