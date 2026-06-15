'use client';

import React, { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  location: string;
  region: string;
  bio: string;
  specialties: string[];
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Pr. Mohamed Kouyaté",
    title: "Président de la SIPath",
    location: "Abidjan, Côte d'Ivoire",
    region: "Côte d'Ivoire",
    bio: "Président de la Société Ivoirienne de Pathologie (SIPath). Expert de premier plan en anatomopathologie, il joue un rôle majeur dans la coordination des activités de la société savante et l'intégration des nouvelles pratiques de diagnostic en Côte d'Ivoire.",
    specialties: ["Anatomopathologie générale", "Leadership médical", "Diagnostic"],
    image: "/pr-kouyate.jpeg"
  },
  {
    id: 2,
    name: "Pr. Kouamé Justin N'Dah",
    title: "Président du Comité d'Organisation",
    location: "CHU de Bouaké, Côte d'Ivoire",
    region: "Côte d'Ivoire",
    bio: "Responsable et expert reconnu, notamment au CHU de Bouaké. Le Professeur N'Dah est un pilier de la SIPath, particulièrement impliqué dans l'organisation des grandes rencontres scientifiques de la sous-région et la formation universitaire.",
    specialties: ["Anatomopathologie", "Pathologie tumorale", "Recherche"],
    image: "/pr-nda.jpeg"
  },
  {
    id: 3,
    name: "Pr. Isidore Mohenou Diomandé",
    title: "Président du Comité Scientifique",
    location: "CHU de Cocody, Abidjan",
    region: "Côte d'Ivoire",
    bio: "Figure pionnière de l'anatomopathologie en Côte d'Ivoire. Le Professeur Diomandé a dirigé de nombreux travaux de recherche, encadré plusieurs générations de médecins au sein de la Faculté de Médecine d'Abidjan, et est un référent pour la Revue Africaine de Pathologie.",
    specialties: ["Anatomopathologie", "Cytologie", "Recherche Scientifique"],
    image: "/pr-diomande.jpeg"
  },
  {
    id: 4,
    name: "Pr. Brahima Doukouré",
    title: "Pathologiste & Chercheur",
    location: "Abidjan, Côte d'Ivoire",
    region: "Côte d'Ivoire",
    bio: "Expert pathologiste ivoirien. Membre actif du comité de rédaction des revues médicales locales, il est co-auteur de nombreuses publications majeures en anatomie et cytologie pathologiques en Afrique de l'Ouest.",
    specialties: ["Pathologie générale", "Oncologie diagnostique"],
    image: "/logo-sipath.png"
  },
  {
    id: 5,
    name: "Pr. Marie Joseph Dieme-Ahouidi",
    title: "Pathologiste (Réseau Sous-Régional)",
    location: "CHNU Fann, Dakar, Sénégal",
    region: "Sous-région",
    bio: "Éminente spécialiste du système nerveux central et pathologiste au CHNU de Fann à Dakar. Elle contribue activement aux échanges scientifiques entre les sociétés savantes d'Afrique de l'Ouest et de l'espace francophone.",
    specialties: ["Neuropathologie", "Anatomopathologie", "Recherche"],
    image: "/logo-sipath.png"
  },
  {
    id: 6,
    name: "Pr. Robert Soudré",
    title: "Pathologiste (Réseau Sous-Régional)",
    location: "Ouagadougou, Burkina Faso",
    region: "Sous-région",
    bio: "Expert historique en anatomopathologie au Burkina Faso. Membre du comité de lecture régional et soutien de longue date aux initiatives scientifiques de la pathologie francophone africaine.",
    specialties: ["Pathologie générale", "Formation médicale", "Comité de lecture"],
    image: "/logo-sipath.png"
  }
];

export default function EquipePage() {
  const [activeFilter, setActiveFilter] = useState<'Tous' | 'Côte d\'Ivoire' | 'Sous-région'>('Tous');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = activeFilter === 'Tous' 
    ? teamMembers 
    : teamMembers.filter(member => member.region === activeFilter);

  return (
    <main className="min-h-screen bg-[#FDF6F0] pt-20">
      {/* Header premium */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-16 pb-12">
        <p className="text-[#F26522] text-sm font-bold uppercase tracking-[0.25em] mb-4">Notre Collectif</p>
        <h1 className="text-6xl md:text-7xl text-[#2C2522] font-light tracking-[-0.02em] mb-6">L'Équipe SIPath</h1>
        <p className="max-w-2xl text-xl text-[#2C2522]/80 font-light">
          Une communauté de pathologistes experts engagés pour l'excellence diagnostique en Côte d'Ivoire et dans toute la sous-région.
        </p>
      </div>

      {/* Filtres premium */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 mb-10 flex flex-wrap gap-3">
        {(['Tous', "Côte d'Ivoire", 'Sous-région'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-8 py-3 text-sm uppercase tracking-[0.2em] border transition-all duration-300 ${
              activeFilter === filter 
                ? 'bg-[#F26522] text-white border-[#F26522]' 
                : 'border-[#E8D9C9] text-[#2C2522] hover:border-[#F26522] hover:text-[#F26522]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grille des membres */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <div 
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer bg-white border border-[#E8D9C9] overflow-hidden flex flex-col hover:border-[#F26522]/40 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-[380px] overflow-hidden bg-[#F8EDE3] flex items-center justify-center p-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={`transition-transform duration-700 group-hover:scale-105 ${member.image === '/logo-sipath.png' ? 'w-32 h-32 object-contain opacity-50' : 'w-full h-full object-cover'}`}
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-[#2C2522] text-xl md:text-2xl font-semibold tracking-tight mb-1 group-hover:text-[#F26522] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#F26522] text-xs font-medium tracking-widest mb-3 uppercase">{member.title}</p>
                <p className="text-[#6B5B4F] text-sm mt-auto">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal ultra premium */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-[#E8D9C9]"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 text-3xl text-[#2C2522] hover:text-[#F26522] z-10"
            >
              ×
            </button>

            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative h-[300px] md:h-auto bg-[#F8EDE3] flex items-center justify-center p-8">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className={selectedMember.image === '/logo-sipath.png' ? 'w-40 h-40 object-contain opacity-40' : 'w-full h-full object-cover'}
                />
              </div>

              <div className="md:col-span-3 p-10 md:p-14">
                <p className="text-[#F26522] text-xs font-bold tracking-[0.3em] mb-2 uppercase">Spécialiste</p>
                <h2 className="text-3xl md:text-4xl text-[#2C2522] font-light tracking-[-0.01em] mb-2">{selectedMember.name}</h2>
                <p className="text-lg text-[#F26522] font-medium mb-8">{selectedMember.title}</p>

                <div className="mb-8">
                  <p className="text-sm text-[#6B5B4F] tracking-widest mb-1">LOCALISATION</p>
                  <p className="text-lg text-[#2C2522]">{selectedMember.location}</p>
                </div>

                <div className="mb-8">
                  <p className="text-sm text-[#6B5B4F] tracking-widest mb-3">SPÉCIALITÉS</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.specialties.map((spec, index) => (
                      <span key={index} className="px-5 py-1.5 text-sm border border-[#E8D9C9] text-[#2C2522]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-[#6B5B4F] tracking-widest mb-3">BIOGRAPHIE</p>
                  <p className="text-[#2C2522] leading-relaxed text-[15px]">{selectedMember.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}