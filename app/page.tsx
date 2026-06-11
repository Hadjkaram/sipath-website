import NewsSection from '../components/NewsSection';
import VisionSection from '../components/VisionSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF6F0] flex flex-col relative overflow-x-hidden">
      
      {/* HERO avec fond plus premium (subtil) */}
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 pt-20 overflow-hidden">
        
        {/* Fond décoratif subtil (tu peux remplacer par de vraies images en slide plus tard) */}
        <div className="absolute inset-0 bg-[radial-gradient(#E8D9C9_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-40"></div>

        <div className="text-center max-w-5xl px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl text-[#2C2522] font-light tracking-[-0.02em] leading-[1.05]">
            L'excellence de la pathologie en <span className="font-medium">Côte d'Ivoire</span><br /> et en <span className="font-medium">Afrique</span>.
          </h1>

          <div className="w-20 h-[1px] bg-[#F26522] mx-auto mt-14 mb-10 opacity-80"></div>

          <p className="text-[#6B5B4F] text-sm md:text-base font-medium tracking-[0.35em] uppercase">
            Société Ivoirienne de Pathologie
          </p>
        </div>

        {/* Flèche scroll */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 z-10">
          <div className="w-px h-12 bg-[#2C2522]"></div>
          <span className="text-[10px] tracking-[3px] mt-2">SCROLL</span>
        </div>
      </div>

      <NewsSection />
      <VisionSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}