export default function ActualitesPage() {
  const articles = [
    { titre: "Retour sur le 3ème Congrès de la SIPath avec les délégations sous-régionales", categorie: "Congrès", date: "Juin 2026" },
    { titre: "Déploiement et renforcement des capacités en anatomopathologie au CHU de Bouaké", categorie: "Formation", date: "Mai 2026" },
    { titre: "Vers une intégration des diagnostics numériques pour les assurés de la CMU", categorie: "Santé Publique", date: "Avril 2026" },
    { titre: "Harmonisation des protocoles de diagnostic oncologique en Afrique de l'Ouest", categorie: "Recherche", date: "Mars 2026" },
  ];

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
          {articles.map((art, i) => (
            <div key={i} className="group cursor-pointer border-b border-[#E8D9C9] pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[#F26522] text-xs font-bold uppercase tracking-wider">{art.categorie}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-400 text-xs tracking-wide">{art.date}</span>
                </div>
                <h2 className="text-[#2C2522] text-2xl font-light group-hover:text-[#F26522] transition-colors duration-300">
                  {art.titre}
                </h2>
              </div>
              <div className="flex items-center text-sm font-semibold text-[#6B5B4F] group-hover:text-[#F26522] transition-colors shrink-0">
                Plus d'infos <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}