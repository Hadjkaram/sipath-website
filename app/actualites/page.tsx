export const revalidate = 0; // Force la page à toujours récupérer les dernières données

import Link from 'next/link'; // NOUVEAU : Import indispensable pour créer un lien
import { supabase } from '../../lib/supabase';

export default async function ActualitesPage() {
  // Récupération des actualités depuis Supabase, triées de la plus récente à la plus ancienne
  const { data: articles } = await supabase
    .from('actualites')
    .select('*')
    .order('id', { ascending: false });

  return (
    <main className="min-h-screen bg-white pt-40 pb-24 px-12 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          Espace Scientifique
        </p>
        <h1 className="text-5xl text-[#2C2522] font-light mb-16">
          Publications & <span className="font-medium text-[#F26522]">Annonces</span>
        </h1>

        <div className="flex flex-col gap-8 w-full">
          {articles && articles.length > 0 ? (
            articles.map((art) => (
              /* REMPLACEMENT ICI : div devient Link avec un href dynamique */
              <Link key={art.id} href={`/actualites/${art.id}`} className="group cursor-pointer border-b border-[#E8D9C9] pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[#F26522] text-xs font-bold uppercase tracking-wider">{art.categorie}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400 text-xs tracking-wide">{art.date_pub}</span>
                  </div>
                  <h2 className="text-[#2C2522] text-2xl font-light group-hover:text-[#F26522] transition-colors duration-300">
                    {art.titre}
                  </h2>
                </div>
                <div className="flex items-center text-sm font-semibold text-[#6B5B4F] group-hover:text-[#F26522] transition-colors shrink-0">
                  Plus d'infos <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-[#6B5B4F] italic text-lg py-12">Aucune publication n'est disponible pour le moment.</p>
          )}
        </div>
      </div>
    </main>
  );
}