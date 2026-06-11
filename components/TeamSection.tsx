'use client';

import Link from 'next/link';

export default function TeamSection() {
  return (
    <section className="w-full bg-[#FDF6F0] py-24 md:py-32 px-8 md:px-12 flex flex-col items-center z-20 relative border-t border-[#E8D9C9]">
      <div className="w-full max-w-7xl">
        <p className="text-[#F26522] text-sm font-bold uppercase tracking-[0.25em] mb-4 text-center">
          Notre Équipe
        </p>
        <h2 className="text-4xl md:text-5xl text-[#2C2522] font-light leading-tight text-center mb-16 tracking-[-0.01em]">
          Une expertise <span className="font-semibold">dédiée</span>
        </h2>

        {/* Grille de l'équipe - style asafoandco premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Profil 1 - Pr. Ndah Kouamé Justin */}
          <div className="group cursor-pointer">
            <div className="w-full h-[420px] bg-[#F8EDE3] mb-6 overflow-hidden border border-[#E8D9C9]">
              <div className="w-full h-full bg-gradient-to-br from-[#EDE4D9] to-[#F8EDE3] transition-transform duration-700 group-hover:scale-[1.06]"></div>
            </div>
            <h3 className="text-[#2C2522] text-2xl font-semibold tracking-tight">Pr. Ndah Kouamé Justin</h3>
            <p className="text-[#F26522] text-sm tracking-[0.15em] uppercase mt-2">Responsable Anatomopathologie • CHU Bouaké</p>
          </div>

          {/* Profil 2 - Pr. Kouyaté (remplace Dr. Silué Lea) */}
          <div className="group cursor-pointer">
            <div className="w-full h-[420px] bg-[#F8EDE3] mb-6 overflow-hidden border border-[#E8D9C9]">
              <div className="w-full h-full bg-gradient-to-br from-[#EDE4D9] to-[#F8EDE3] transition-transform duration-700 group-hover:scale-[1.06]"></div>
            </div>
            <h3 className="text-[#2C2522] text-2xl font-semibold tracking-tight">Pr. Mamadou Kouyaté</h3>
            <p className="text-[#F26522] text-sm tracking-[0.15em] uppercase mt-2">Président de la SIPath</p>
          </div>

          {/* Profil 3 - Délégation UEMOA */}
          <div className="group cursor-pointer">
            <div className="w-full h-[420px] bg-[#F8EDE3] mb-6 overflow-hidden border border-[#E8D9C9]">
              <div className="w-full h-full bg-gradient-to-br from-[#EDE4D9] to-[#F8EDE3] transition-transform duration-700 group-hover:scale-[1.06]"></div>
            </div>
            <h3 className="text-[#2C2522] text-2xl font-semibold tracking-tight">Délégation UEMOA</h3>
            <p className="text-[#F26522] text-sm tracking-[0.15em] uppercase mt-2">Pathologistes de la Sous-Région</p>
          </div>
        </div>

        {/* Bouton vers la vraie page Équipe */}
        <div className="w-full flex justify-center mt-16">
          <Link 
            href="/equipe" 
            className="btn-premium border border-[#F26522] text-[#F26522] px-12 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#F26522] hover:text-white transition-all duration-300"
          >
            Voir tout l'annuaire
          </Link>
        </div>
      </div>
    </section>
  );
}