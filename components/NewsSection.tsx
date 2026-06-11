export default function NewsSection() {
  return (
    <section id="actualites" className="w-full bg-[#FDF6F0] py-24 md:py-32 px-8 md:px-12 flex flex-col items-center z-20 relative border-t border-[#E8D9C9]">
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl md:text-5xl text-[#2C2522] font-light mb-16 tracking-widest uppercase text-center">
          Actualités
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte 1 */}
          <div className="bg-white p-10 h-[460px] flex flex-col justify-between group cursor-pointer border border-[#E8D9C9] hover:border-[#F26522]/30 hover:shadow-2xl transition-all duration-500">
            <div>
              <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.2em] mb-6">Congrès • Juin 2026</p>
              <h3 className="text-[#2C2522] text-3xl font-semibold leading-tight tracking-[-0.01em]">
                Retour sur le 3ème Congrès de la SIPath avec les délégations sous-régionales
              </h3>
            </div>
            <div className="flex justify-end">
              <span className="text-[#2C2522] text-5xl font-light group-hover:text-[#F26522] transition-colors duration-300">+</span>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="bg-white p-10 h-[460px] flex flex-col justify-between group cursor-pointer border border-[#E8D9C9] hover:border-[#F26522]/30 hover:shadow-2xl transition-all duration-500">
            <div>
              <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.2em] mb-6">Formation • Mai 2026</p>
              <h3 className="text-[#2C2522] text-3xl font-semibold leading-tight tracking-[-0.01em]">
                Déploiement et renforcement des capacités en télépathologie au CHU de Bouaké
              </h3>
            </div>
            <div className="flex justify-end">
              <span className="text-[#2C2522] text-5xl font-light group-hover:text-[#F26522] transition-colors duration-300">+</span>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="bg-white p-10 h-[460px] flex flex-col justify-between group cursor-pointer border border-[#E8D9C9] hover:border-[#F26522]/30 hover:shadow-2xl transition-all duration-500">
            <div>
              <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.2em] mb-6">Santé Publique • Avril 2026</p>
              <h3 className="text-[#2C2522] text-3xl font-semibold leading-tight tracking-[-0.01em]">
                Vers une intégration fluide des diagnostics numériques pour les patients de la CMU
              </h3>
            </div>
            <div className="flex justify-end">
              <span className="text-[#2C2522] text-5xl font-light group-hover:text-[#F26522] transition-colors duration-300">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}