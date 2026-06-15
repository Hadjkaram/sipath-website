export default function AnnuairePage() {
  const medecins = [
    { nom: "Pr. KOUYATÉ Mohamed", specialite: "Anatomopathologie générale", pays: "Côte d'Ivoire", ville: "Abidjan" },
    { nom: "Pr. N'DAH Kouamé Justin", specialite: "Anatomopathologie", pays: "Côte d'Ivoire", ville: "Bouaké" },
    { nom: "Pr. DIOMANDÉ Isidore Mohenou", specialite: "Anatomopathologie / Cytologie", pays: "Côte d'Ivoire", ville: "Abidjan" },
    { nom: "Pr. DOUKOURÉ Brahima", specialite: "Anatomopathologie", pays: "Côte d'Ivoire", ville: "Abidjan" },
    { nom: "Pr. EHOUMAN Armand", specialite: "Histologie-Embryologie / Cytologie", pays: "Côte d'Ivoire", ville: "Abidjan" },
    { nom: "Pr. DIEME-AHOUIDI Marie Joseph", specialite: "Neuropathologie / Anatomopathologie", pays: "Sénégal", ville: "Dakar" },
    { nom: "Pr. WOTO-GAYE G.", specialite: "Anatomopathologie", pays: "Sénégal", ville: "Dakar" },
    { nom: "Pr. SOUDRÉ Robert", specialite: "Anatomopathologie", pays: "Burkina Faso", ville: "Ouagadougou" },
    { nom: "Pr. BAYO S.", specialite: "Anatomopathologie", pays: "Mali", ville: "Bamako" },
  ];

  return (
    <main className="min-h-screen bg-[#FAF5F0] pt-40 pb-24 px-12 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          Communauté Médicale
        </p>
        <h1 className="text-5xl text-[#2C2522] font-light mb-16">
          Répertoire des <span className="font-medium text-[#F26522]">Spécialistes</span>
        </h1>

        {/* Tableau épuré Premium */}
        <div className="w-full overflow-x-auto bg-white shadow-sm border border-[#E8D9C9]/60">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E8D9C9] bg-[#FDF6F0]">
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-[#2C2522]">Praticien</th>
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-[#2C2522]">Champs d'Expertise</th>
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-[#2C2522]">Pays</th>
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-[#2C2522]">Ville</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8D9C9]/40 text-[#6B5B4F] text-base font-light">
              {medecins.map((medecin, i) => (
                <tr key={i} className="hover:bg-[#FDF6F0]/50 transition-colors">
                  <td className="p-6 font-medium text-[#2C2522]">{medecin.nom}</td>
                  <td className="p-6">{medecin.specialite}</td>
                  <td className="p-6">
                    <span className="inline-block px-3 py-1 bg-[#F26522]/10 text-[#F26522] text-xs font-semibold uppercase tracking-wider rounded-sm">
                      {medecin.pays}
                    </span>
                  </td>
                  <td className="p-6">{medecin.ville}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}