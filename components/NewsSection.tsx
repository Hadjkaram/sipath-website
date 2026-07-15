import Link from 'next/link';
import { supabase } from '../lib/supabase';
import { unstable_noStore as noStore } from 'next/cache'; // Import de la fonction anti-cache

export default async function NewsSection() {
  noStore(); // Force Next.js à toujours interroger la base de données en direct pour ce composant

  // Récupération des 3 dernières actualités
  const { data: actualites } = await supabase
    .from('actualites')
    .select('*')
    .order('id', { ascending: false })
    .limit(3);

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 flex flex-col items-center relative">
      <h2 className="text-4xl text-[#2C2522] font-light mb-16 tracking-widest uppercase text-center">
        Actualités
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        
        {actualites && actualites.length > 0 ? (
          actualites.map((actu) => (
            <Link key={actu.id} href="/actualites" className="bg-white p-8 md:p-10 h-auto md:h-[480px] flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all border border-[#E8D9C9]/50 shadow-sm">
              <div>
                <p className="text-[#F26522] text-xs font-bold uppercase tracking-wider mb-6">
                  {actu.categorie || 'Info'} • {actu.date_pub || 'Date'}
                </p>
                <h3 className="text-[#2C2522] text-xl md:text-2xl font-medium leading-snug group-hover:text-[#F26522] transition-colors mb-4 line-clamp-3">
                  {actu.titre}
                </h3>
                <p className="text-[#6B5B4F] text-sm leading-relaxed font-light line-clamp-4">
                  {actu.contenu}
                </p>
              </div>
              <div className="flex justify-end items-center mt-8">
                <span className="text-sm font-semibold tracking-wider uppercase text-[#6B5B4F] group-hover:text-[#F26522] transition-colors flex items-center gap-2">
                  Plus d'infos <span className="text-lg">→</span>
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-3 text-center text-[#6B5B4F] text-sm">Les actualités seront publiées prochainement.</p>
        )}

      </div>
    </section>
  );
}