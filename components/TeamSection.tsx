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
            equipe.map((membre) => (
              <div key={membre.id} className="group cursor-pointer">
                <div className="w-full h-[450px] bg-white mb-6 overflow-hidden border border-[#E8D9C9] relative shadow-sm">
                   <Image 
                     src={membre.image_url || "/logo-sipath.png"} 
                     alt={membre.name} 
                     fill
                     className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                     unoptimized
                   />
                </div>
                <h3 className="text-[#2C2522] text-2xl font-medium uppercase tracking-wide group-hover:text-[#F26522] transition-colors line-clamp-1">{membre.name}</h3>
                <p className="text-[#6B5B4F] text-xs font-semibold tracking-widest uppercase mt-2 line-clamp-1">{membre.title}</p>
              </div>
            ))
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