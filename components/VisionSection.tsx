import Image from 'next/image';

export default function VisionSection() {
  return (
    <section className="w-full bg-[#0B1E14] py-24 md:py-32 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start z-20 relative border-t border-white/10 overflow-hidden">
      
      {/* ========== CARTE DIGITALE AFRIQUE AVEC FIBRES (Style Premium) ========== */}
      {/* Cette carte est placée en arrière-plan, légèrement décalée pour créer un équilibre visuel */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-[48%] w-[720px] opacity-[0.17] pointer-events-none hidden lg:block z-0 mix-blend-screen">
        <Image 
          src="/images/africa-digital-map.png" 
          alt="Carte digitale d'Afrique avec fibres lumineuses" 
          width={720}
          height={720}
          className="w-full h-auto filter brightness-125 contrast-125"
        />
        {/* Effet de lueur (Glow) pour simuler la fibre optique brillante */}
        <div className="absolute inset-0 bg-radial from-[#F26522]/20 to-transparent blur-3xl"></div>
      </div>

      {/* CONTENU TEXTUEL (Placé au-dessus de la carte grâce au z-10) */}
      <div className="w-full md:w-1/2 mb-14 md:mb-0 md:pr-16 relative z-10">
        <p className="text-[#F26522] text-sm font-bold uppercase tracking-[0.25em] mb-5">
          Notre Vision
        </p>
        
        <h2 className="text-5xl md:text-[56px] text-white font-light leading-[1.05] tracking-[-0.015em]">
          Façonner l'avenir de la <br />
          <span className="font-semibold text-[#F26522]">santé en Afrique</span>
        </h2>
      </div>

      <div className="w-full md:w-1/2 md:pl-8 text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-[620px] relative z-10">
        <p className="mb-8 opacity-80 border-l-2 border-[#F26522]/30 pl-6">
          La médecine moderne exige une approche innovante, associant une expertise médicale pointue à des solutions technologiques souveraines, parfaitement adaptées à nos réalités.
        </p>
        <p className="mb-8 opacity-80 pl-6">
          De la numérisation des protocoles de diagnostic au déploiement de la télépathologie, la SIPath rassemble les meilleurs spécialistes pour garantir une excellence diagnostique.
        </p>
        <p className="opacity-80 pl-6 font-medium text-[#F26522]/80 uppercase tracking-widest text-sm">
          La révolution de la pathologie a déjà commencé.
        </p>
      </div>

    </section>
  );
}