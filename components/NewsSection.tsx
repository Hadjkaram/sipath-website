import Link from 'next/link';

export default function NewsSection() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 flex flex-col items-center relative">
      <h2 className="text-4xl text-[#2C2522] font-light mb-16 tracking-widest uppercase text-center">
        Actualités
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        
        {/* Carte 1 : Les 3èmes Journées (Le texte officiel de SIPath) */}
        <Link href="/actualites" className="bg-white p-8 md:p-10 h-auto md:h-[480px] flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all border border-[#E8D9C9]/50 shadow-sm">
          <div>
            <p className="text-[#F26522] text-xs font-bold uppercase tracking-wider mb-6">
              Événement • Clôture
            </p>
            <h3 className="text-[#2C2522] text-xl md:text-2xl font-medium leading-snug group-hover:text-[#F26522] transition-colors mb-4">
              Clôture des 3èmes Journées Scientifiques de la SIPath
            </h3>
            <p className="text-[#6B5B4F] text-sm leading-relaxed font-light line-clamp-4">
              Après trois journées riches en communications autour du thème « Anatomie et Cytologie Pathologiques (ACP) : Santé et Société », ces rencontres s’achèvent avec la satisfaction d’avoir réuni des professionnels engagés.
            </p>
          </div>
          <div className="flex justify-end items-center mt-8">
            <span className="text-sm font-semibold tracking-wider uppercase text-[#6B5B4F] group-hover:text-[#F26522] transition-colors flex items-center gap-2">
              Plus d'infos <span className="text-lg">→</span>
            </span>
          </div>
        </Link>

        {/* Carte 2 */}
        <Link href="/actualites" className="bg-white p-8 md:p-10 h-auto md:h-[480px] flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all border border-[#E8D9C9]/50 shadow-sm">
          <div>
            <p className="text-[#F26522] text-xs font-bold uppercase tracking-wider mb-6">
              Formation • CHU Bouaké
            </p>
            <h3 className="text-[#2C2522] text-xl md:text-2xl font-medium leading-snug group-hover:text-[#F26522] transition-colors mb-4">
              Déploiement et renforcement des capacités en anatomopathologie
            </h3>
            <p className="text-[#6B5B4F] text-sm leading-relaxed font-light line-clamp-4">
              Une série de formations pratiques s'est tenue au CHU de Bouaké, visant à équiper les spécialistes locaux des dernières méthodes de diagnostic numérique et de télépathologie.
            </p>
          </div>
          <div className="flex justify-end items-center mt-8">
            <span className="text-sm font-semibold tracking-wider uppercase text-[#6B5B4F] group-hover:text-[#F26522] transition-colors flex items-center gap-2">
              Plus d'infos <span className="text-lg">→</span>
            </span>
          </div>
        </Link>

        {/* Carte 3 */}
        <Link href="/actualites" className="bg-white p-8 md:p-10 h-auto md:h-[480px] flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all border border-[#E8D9C9]/50 shadow-sm">
          <div>
            <p className="text-[#F26522] text-xs font-bold uppercase tracking-wider mb-6">
              Santé Publique • CMU
            </p>
            <h3 className="text-[#2C2522] text-xl md:text-2xl font-medium leading-snug group-hover:text-[#F26522] transition-colors mb-4">
              Vers une intégration des diagnostics numériques pour les assurés
            </h3>
            <p className="text-[#6B5B4F] text-sm leading-relaxed font-light line-clamp-4">
              La SIPath étudie de nouvelles solutions souveraines pour fluidifier la transmission des comptes rendus au sein du système de la Couverture Maladie Universelle ivoirienne.
            </p>
          </div>
          <div className="flex justify-end items-center mt-8">
            <span className="text-sm font-semibold tracking-wider uppercase text-[#6B5B4F] group-hover:text-[#F26522] transition-colors flex items-center gap-2">
              Plus d'infos <span className="text-lg">→</span>
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
}