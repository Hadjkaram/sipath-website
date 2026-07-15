export const revalidate = 0;

import { supabase } from '../../lib/supabase';
import Image from 'next/image';

export default async function ActualitesPage() {
  // Récupération des actualités depuis Supabase, triées de la plus récente à la plus ancienne
  const { data: articles } = await supabase
    .from('actualites')
    .select('*')
    .order('id', { ascending: false });

  return (
    <main className="min-h-screen bg-[#FDF6F0] pt-40 pb-32 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="text-center mb-24">
          <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Espace Scientifique
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2C2522] font-light mb-6">
            Publications & <span className="font-medium text-[#F26522]">Annonces</span>
          </h1>
          <p className="text-[#6B5B4F] text-lg font-light max-w-2xl mx-auto">
            Restez informés des dernières avancées, événements et communications officielles de la SIPath.
          </p>
        </div>

        {/* LISTE COMPLÈTE DES ACTUALITÉS */}
        <div className="flex flex-col gap-24 w-full">
          {articles && articles.length > 0 ? (
            articles.map((art) => (
              <article key={art.id} className="w-full bg-white border border-[#E8D9C9]/60 p-8 md:p-14 shadow-sm flex flex-col gap-8 group">
                
                {/* 1. En-tête de l'article */}
                <div className="flex flex-col gap-4 border-b border-[#E8D9C9] pb-8">
                  <div className="flex items-center gap-4">
                    <span className="bg-[#2C2522] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                      {art.categorie || 'Actualité'}
                    </span>
                    <span className="text-[#F26522] text-xs font-bold tracking-widest uppercase">
                      {art.date_pub}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl text-[#2C2522] font-light leading-snug">
                    {art.titre}
                  </h2>
                </div>

                {/* 2. Image (Mise en avant façon Éditorial) */}
                {art.image_url && (
                  <div className="w-full relative h-[300px] md:h-[500px] bg-[#F8EDE3] overflow-hidden">
                    <Image 
                      src={art.image_url}
                      alt={art.titre}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                )}

                {/* 3. Contenu détaillé */}
                <div className="text-[#4A3F35] text-base md:text-lg leading-loose font-light whitespace-pre-wrap">
                  {art.contenu}
                </div>
                
              </article>
            ))
          ) : (
            <div className="text-center py-20 border border-[#E8D9C9] bg-white">
              <p className="text-[#6B5B4F] italic text-lg">Aucune publication n'est disponible pour le moment.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}