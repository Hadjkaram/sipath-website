'use client';

import React, { useState } from 'react';

// On définit le typage de ce qui sort de la base Supabase
interface TeamMember {
  id: number;
  name: string;
  title: string;
  location: string;
  region: string;
  bio: string;
  specialties: string[];
  image_url: string;
}

export default function EquipeClientWrapper({ initialMembers }: { initialMembers: TeamMember[] }) {
  const [activeFilter, setActiveFilter] = useState<'Tous' | 'Côte d\'Ivoire' | 'Sous-région'>('Tous');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Filtrage des membres selon le bouton cliqué
  const filteredMembers = activeFilter === 'Tous' 
    ? initialMembers 
    : initialMembers.filter(member => member.region === activeFilter);

  return (
    <>
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
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <div 
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer bg-white border border-[#E8D9C9] overflow-hidden flex flex-col hover:border-[#F26522]/40 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-[380px] overflow-hidden bg-[#F8EDE3] flex items-center justify-center p-4">
                  <img 
                    src={member.image_url || '/logo-sipath.png'} 
                    alt={member.name}
                    className={`transition-transform duration-700 group-hover:scale-105 ${!member.image_url || member.image_url === '/logo-sipath.png' ? 'w-32 h-32 object-contain opacity-50' : 'w-full h-full object-cover'}`}
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
        ) : (
          <p className="text-center text-[#6B5B4F] italic text-lg py-12">Aucun membre n'est actuellement enregistré pour ce filtre.</p>
        )}
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
                  src={selectedMember.image_url || '/logo-sipath.png'} 
                  alt={selectedMember.name}
                  className={!selectedMember.image_url || selectedMember.image_url === '/logo-sipath.png' ? 'w-40 h-40 object-contain opacity-40' : 'w-full h-full object-cover'}
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
                    {selectedMember.specialties && selectedMember.specialties.map((spec, index) => (
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
    </>
  );
}