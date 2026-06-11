'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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
    name: "Pr. Ndah Kouamé Justin",
    title: "Responsable de l'Anatomopathologie",
    location: "CHU de Bouaké, Côte d'Ivoire",
    region: "Côte d'Ivoire",
    bio: "Expert reconnu en anatomopathologie avec plus de 25 ans d'expérience. Il a développé les premiers protocoles de télépathologie en Côte d'Ivoire et forme la nouvelle génération de pathologistes.",
    specialties: ["Anatomopathologie", "Télépathologie", "Diagnostic numérique"],
    image: "/team/ndah-kouame-justin.jpg"
  },
  {
    id: 2,
    name: "Pr. Mamadou Kouyaté",
    title: "Président de la SIPath",
    location: "Abidjan, Côte d'Ivoire",
    region: "Côte d'Ivoire",
    bio: "Président fondateur de la Société Ivoirienne de Pathologie. Visionnaire de la révolution diagnostique en Afrique de l'Ouest, il a contribué à la création de réseaux de pathologie dans toute la sous-région.",
    specialties: ["Pathologie générale", "Leadership médical", "Coopération régionale"],
    image: "/team/kouyate-president.jpg"
  },
  {
    id: 3,
    name: "Dr. Fatou Diallo",
    title: "Pathologiste senior",
    location: "CHU de Dakar, Sénégal",
    region: "Sous-région",
    bio: "Spécialiste en cytopathologie et pathologie mammaire. Elle dirige le programme de dépistage du cancer du sein au Sénégal et collabore étroitement avec la SIPath sur les projets de formation continue.",
    specialties: ["Cytopathologie", "Pathologie mammaire", "Dépistage"],
    image: "/team/fatou-diallo.jpg"
  },
  {
    id: 4,
    name: "Pr. Oumar Traoré",
    title: "Chef de service Anatomopathologie",
    location: "Hôpital Gabriel Touré, Bamako, Mali",
    region: "Sous-région",
    bio: "Pionnier de la pathologie numérique au Mali. Il a mis en place le premier système de télépathologie reliant les hôpitaux de Bamako aux centres de référence de la sous-région.",
    specialties: ["Pathologie numérique", "Hématopathologie", "Formation"],
    image: "/team/oumar-traore.jpg"
  },
  {
    id: 5,
    name: "Pr. Aminata Koné",
    title: "Professeure en Pathologie",
    location: "CHU de Cocody, Abidjan, Côte d'Ivoire",
    region: "Côte d'Ivoire",
    bio: "Experte en pathologie gynécologique et digestive. Elle participe activement aux programmes de recherche de la SIPath et supervise les thèses de spécialisation en pathologie.",
    specialties: ["Pathologie gynécologique", "Pathologie digestive", "Recherche"],
    image: "/team/aminata-kone.jpg"
  },
  {
    id: 6,
    name: "Dr. Ibrahima Sow",
    title: "Pathologiste",
    location: "CHU de Ouagadougou, Burkina Faso",
    region: "Sous-région",
    bio: "Jeune talent de la pathologie burkinabè. Spécialisé en pathologie pédiatrique et infectieuse, il représente la nouvelle génération engagée dans la transformation digitale de la discipline.",
    specialties: ["Pathologie pédiatrique", "Pathologie infectieuse", "Diagnostic moléculaire"],
    image: "/team/ibrahima-sow.jpg"
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
      {/* Header style asafoandco */}
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

      {/* Grille des membres - exactement le style asafoandco */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <div 
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer bg-white border border-[#E8D9C9] overflow-hidden flex flex-col hover:border-[#F26522]/40 hover:shadow-xl transition-all duration-500"
            >
              {/* Photo avec effet scale comme asafo */}
              <div className="relative h-[380px] overflow-hidden bg-[#F8EDE3]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-[#2C2522] text-2xl font-semibold tracking-tight mb-1 group-hover:text-[#F26522] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#F26522] text-sm font-medium tracking-widest mb-3">{member.title}</p>
                <p className="text-[#6B5B4F] text-sm mt-auto">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal ultra premium (effet asafoandco) */}
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
              {/* Photo côté gauche */}
              <div className="md:col-span-2 relative h-[420px] md:h-auto">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Infos */}
              <div className="md:col-span-3 p-10 md:p-14">
                <p className="text-[#F26522] text-xs font-bold tracking-[0.3em] mb-2">PATHOLOGISTE</p>
                <h2 className="text-4xl md:text-5xl text-[#2C2522] font-light tracking-[-0.01em] mb-2">{selectedMember.name}</h2>
                <p className="text-xl text-[#F26522] font-medium mb-8">{selectedMember.title}</p>

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

                <div className="mt-10">
                  <button className="btn-premium border border-[#F26522] text-[#F26522] px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-[#F26522] hover:text-white transition-all">
                    Contacter ce confrère
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-20"></div>
    </main>
  );
}