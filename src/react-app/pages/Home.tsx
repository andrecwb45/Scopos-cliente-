import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import BeforeAfter from '@/react-app/components/BeforeAfter';
import Testimonials from '@/react-app/components/Testimonials';
import FAQ from '@/react-app/components/FAQ';
import CTAFinal from '@/react-app/components/CTAFinal';
import Footer from '@/react-app/components/Footer';
import Sidebar from '@/react-app/components/Sidebar';
import ParallaxBackground from '@/react-app/components/ParallaxBackground';

export default function Home() {
  return (
    <div className="relative">
      <ParallaxBackground />
      <Sidebar />
      
      {/* Main content with left margin for sidebar */}
      <main className="relative z-10 ml-20">
        <Hero />
        <Services />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <CTAFinal />
      </main>

      <div className="ml-20">
        <Footer />
      </div>
    </div>
  );
}
