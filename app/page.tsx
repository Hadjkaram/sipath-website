import HeroSlideshow from '../components/HeroSlideshow';
import NewsSection from '../components/NewsSection';
import VisionSection from '../components/VisionSection';
import TeamSection from '../components/TeamSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF6F0] flex flex-col relative overflow-x-hidden">
      
      {/* SECTION 1 : HERO ACCUEIL (Diaporama) */}
      <div className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden">
        <HeroSlideshow />
        <div className="text-center max-w-5xl px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl text-[#2C2522] font-light tracking-[-0.02em] leading-[1.1]">
            L'excellence de la pathologie en <span className="font-medium">Côte d'Ivoire</span><br /> et en <span className="font-medium">Afrique</span>.
          </h1>
          <div className="w-20 h-[1px] bg-[#F26522] mx-auto mt-14 mb-10 opacity-80"></div>
          <p className="text-[#6B5B4F] text-sm md:text-base font-semibold tracking-[0.35em] uppercase">
            Société Ivoirienne de Pathologie
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 opacity-70">
          <div className="w-6 h-10 border border-[#2C2522] rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#F26522] rounded-full animate-bounce mt-1"></div>
          </div>
        </div>
      </div>

      {/* SECTION 2 : ACTUALITÉS (Fond Ivoire/Lin - Lumineux) */}
      <div className="bg-[#FAF6F0]">
        <NewsSection />
      </div>

      {/* SECTION 3 : VISION (Fond Vert Profond + Carte Afrique Fibre) */}
      <VisionSection />

      {/* SECTION 4 : ÉQUIPE (Fond Marron Sépia / Chocolat - Élégant) */}
      <div className="bg-[#211712]">
        <TeamSection />
      </div>

    </main>
  );
}