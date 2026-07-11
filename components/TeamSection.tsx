export const revalidate = 0;

import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default async function TeamSection() {
  // Récupération des 3 premiers membres de l'équipe
  const { data: equipe } = await supabase
    .from('equipe')
    .select('*')
    .order('id', { ascending: true })
    .limit(3);

  return (
    <section className="w-full bg-[#FAF5F0] py-24 md:py-32 px-6 md:px-12 flex flex-col items-center relative border-t border-[#E8D9C9]/50">
      <div className="w-full max-w-7xl">
        <p className="text-[#F26522] text-sm font-bold uppercase tracking-widest mb-6 text-center">
          Notre Bureau
        </p>
        <h2 className="text-4xl md:text-5xl text-[#2C2522] font-light leading-tight text-center mb-20">
          Une expertise <span className="font-bold text-[#F26522]">dédiée</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {equipe && equipe.length > 0 ? (
            equipe.map((membre) => {
              // Vérifie si l'image existe et n'est pas vide
              const isDefault = !membre.image_url || membre.image_url === '';
              
              return (
                <div key={membre.id} className="group cursor-pointer bg-white border border-[#E8D9C9] hover:border-[#F26522]/40 hover:shadow-xl transition-all duration-500 flex flex-col">
                  {/* Hauteur fixe de 380px avec ajustement */}
                  <div className="relative h-[380px] w-full bg-[#F8EDE3] overflow-hidden flex items-center justify-center p-4">
                     <Image 
                       src={membre.image_url || "/logo-sipath.png"} 
                       alt={membre.name || "Membre de l'équipe"} 
                       fill
                       className={`transition-transform duration-700 group-hover:scale-105 ${isDefault ? 'object-contain opacity-50 p-8' : 'object-cover object-top'}`}
                       unoptimized
                     />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-[#2C2522] text-xl font-semibold uppercase tracking-wide group-hover:text-[#F26522] transition-colors line-clamp-1">{membre.name}</h3>
                    <p className="text-[#6B5B4F] text-xs font-semibold tracking-widest uppercase mt-2 line-clamp-1">{membre.title}</p>
                  </div>
                </div>
              );
            })
          ) : (
             <p className="col-span-3 text-center text-[#6B5B4F] text-sm">Profils en cours de mise à jour depuis le panneau d'administration.</p>
          )}

        </div>
        
        <div className="w-full flex justify-center mt-20">
            <Link href="/equipe" className="border-2 border-[#F26522] text-[#F26522] px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[#F26522] hover:text-white transition-colors duration-300">
                Voir tout le bureau
            </Link>
        </div>
      </div>
    </section>
  );
}