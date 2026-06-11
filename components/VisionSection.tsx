export default function VisionSection() {
  return (
    <section className="w-full bg-[#FDF6F0] py-24 md:py-32 px-8 md:px-12 flex flex-col md:flex-row justify-between items-start z-20 relative border-t border-[#E8D9C9] overflow-hidden">
      
      {/* ========== CARTE DIGITALE AFRIQUE AVEC FIBRES (style Asafo) ========== */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-[48%] w-[720px] opacity-[0.17] pointer-events-none hidden lg:block z-0 mix-blend-multiply">
        <img 
          src="/images/africa-digital-map.png" 
          alt="Carte digitale d'Afrique avec fibres lumineuses" 
          className="w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 mb-14 md:mb-0 md:pr-16 relative z-10">
        <p className="text-[#F26522] text-sm font-bold uppercase tracking-[0.25em] mb-5">Notre Vision</p>
        
        <h2 className="text-5xl md:text-[56px] text-[#2C2522] font-light leading-[1.05] tracking-[-0.015em]">
          Façonner l'avenir de la <br />
          <span className="font-semibold text-[#F26522]">santé en Afrique</span>
        </h2>
      </div>

      <div className="w-full md:w-1/2 md:pl-8 text-[#2C2522] text-lg md:text-xl font-light leading-relaxed max-w-[620px] relative z-10">
        <p className="mb-8 text-[#2C2522]/90">
          La médecine moderne exige une approche innovante, associant une expertise médicale pointue à des solutions technologiques souveraines, parfaitement adaptées à nos réalités administratives et linguistiques.
        </p>
        <p className="mb-8 text-[#2C2522]/90">
          De la numérisation des protocoles de diagnostic au déploiement d'outils avancés de télépathologie à travers le pays, la SIPath rassemble les meilleurs spécialistes de la sous-région pour garantir un suivi patient d'excellence.
        </p>
        <p className="text-[#2C2522]/90">
          Nous sommes une société engagée pour la Côte d'Ivoire, qui comprend les défis de l'Afrique. La révolution de la pathologie a déjà commencé.
        </p>
      </div>
    </section>
  );
}