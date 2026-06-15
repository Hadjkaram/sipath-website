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

      {/* ========== BOUTON FLOTTANT WHATSAPP ========== */}
      <a 
        href="https://wa.me/2250556005556" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#2C2522] text-white p-4 rounded-full shadow-lg hover:bg-[#F26522] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
        aria-label="Nous contacter sur WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

    </main>
  );
}