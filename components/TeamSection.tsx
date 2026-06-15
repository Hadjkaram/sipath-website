import Image from 'next/image';
import Link from 'next/link';

export default function TeamSection() {
  return (
    <section className="w-full bg-[#FAF5F0] py-24 md:py-32 px-6 md:px-12 flex flex-col items-center relative border-t border-[#E8D9C9]/50">
      <div className="w-full max-w-7xl">
        <p className="text-[#F26522] text-sm font-bold uppercase tracking-widest mb-6 text-center">
          Notre Bureau
        </p>
        <h2 className="text-4xl md:text-5xl text-[#2C2522] font-light leading-tight text-center mb-20">
          Une expertise <span className="font-bold text-[#F26522]">dédiée</span>
        </h2>

        {/* Grille responsive des vrais Professeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Professeur Kouyaté */}
          <div className="group cursor-pointer">
            <div className="w-full h-[450px] bg-white mb-6 overflow-hidden border border-[#E8D9C9] relative shadow-sm">
               <Image 
                 src="/PROFESSEUR KOUYATÉ PR DE SIPATH.jpeg" 
                 alt="Professeur Kouyaté, Président de la SIPath" 
                 fill
                 className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 unoptimized
               />
            </div>
            <h3 className="text-[#2C2522] text-2xl font-medium uppercase tracking-wide group-hover:text-[#F26522] transition-colors">Pr. Kouyaté</h3>
            <p className="text-[#6B5B4F] text-xs font-semibold tracking-widest uppercase mt-2">Président de la SIPath</p>
          </div>

          {/* Professeur N'Da */}
          <div className="group cursor-pointer">
            <div className="w-full h-[450px] bg-white mb-6 overflow-hidden border border-[#E8D9C9] relative shadow-sm">
               <Image 
                 src="/PROFESSEUR N'DA .jpeg" 
                 alt="Professeur N'Da, Président du Comité d'Organisation" 
                 fill
                 className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 unoptimized
               />
            </div>
            <h3 className="text-[#2C2522] text-2xl font-medium uppercase tracking-wide group-hover:text-[#F26522] transition-colors">Pr. N'Da</h3>
            <p className="text-[#6B5B4F] text-xs font-semibold tracking-widest uppercase mt-2">Président du Comité d'Organisation</p>
          </div>

          {/* Professeur Diomandé */}
          <div className="group cursor-pointer">
            <div className="w-full h-[450px] bg-white mb-6 overflow-hidden border border-[#E8D9C9] relative shadow-sm">
               <Image 
                 src="/PROFESSEUR DIOMANDÉ.jpeg" 
                 alt="Professeur Diomandé, Président du Comité Scientifique" 
                 fill
                 className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 unoptimized
               />
            </div>
            <h3 className="text-[#2C2522] text-2xl font-medium uppercase tracking-wide group-hover:text-[#F26522] transition-colors">Pr. Diomandé</h3>
            <p className="text-[#6B5B4F] text-xs font-semibold tracking-widest uppercase mt-2">Président du Comité Scientifique</p>
          </div>

        </div>
        
        {/* BOUTON MODIFIÉ : Utilisation de <Link> pour rediriger vers la page Annuaire */}
        <div className="w-full flex justify-center mt-20">
            <Link href="/annuaire" className="border-2 border-[#F26522] text-[#F26522] px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[#F26522] hover:text-white transition-colors duration-300">
                Voir tout l'annuaire
            </Link>
        </div>
      </div>
    </section>
  );
}