import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDF6F0] pt-24 pb-10 px-6 md:px-12 text-[#2C2522] border-t border-[#E8D9C9] relative z-20">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between mb-20 gap-16">
        
        {/* Colonne 1 : Contacts & Logo */}
        <div className="md:w-1/3 flex flex-col">
          <div className="mb-8 bg-white inline-block p-2 rounded-full border border-[#E8D9C9] shadow-sm self-start">
             <Image src="/logo-sipath.png" alt="Logo SIPath" width={80} height={80} className="w-16 h-16 object-contain" />
          </div>
          <h4 className="text-[#F26522] font-bold uppercase tracking-[0.2em] mb-6">Contact SIPath</h4>
          <ul className="space-y-4 text-[#6B5B4F] text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[#2C2522]">📍</span> 
              <span>Service d'Anatomie et de Cytologie Pathologiques<br/>UFR Sciences Médicales - Abidjan, Côte d'Ivoire</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#2C2522]">📞</span> 
              <span>+225 05 56 00 55 56 (WhatsApp)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#2C2522]">✉️</span> 
              <span>sipathjssi@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Colonne 2 : Domaines d'intervention */}
        <div className="md:w-1/3">
          <h4 className="text-[#2C2522] font-bold uppercase tracking-[0.2em] mb-6">Nos Domaines</h4>
          <ul className="space-y-3 text-[#6B5B4F] text-sm font-medium">
            <li>Diagnostic Anatomopathologique</li>
            <li>Formation et Encadrement</li>
            <li>Recherche Scientifique</li>
            <li>Congrès et Conférences</li>
            <li>Collaboration Universitaire</li>
          </ul>
        </div>

        {/* Colonne 3 : Le Réseau Sous-Régional */}
        <div className="md:w-1/3">
          <h4 className="text-[#2C2522] font-bold uppercase tracking-[0.2em] mb-6">Réseau Afrique</h4>
          <div className="grid grid-cols-2 gap-y-4 text-sm text-[#6B5B4F]">
             <div><span className="font-bold text-[#2C2522]">Dakar</span><br/>Sénégal</div>
             <div><span className="font-bold text-[#2C2522]">Ouagadougou</span><br/>Burkina Faso</div>
             <div><span className="font-bold text-[#2C2522]">Bamako</span><br/>Mali</div>
             <div><span className="font-bold text-[#2C2522]">Lomé</span><br/>Togo</div>
          </div>
        </div>

      </div>

      {/* Ligne légale finale avec ta signature */}
      <div className="w-full max-w-7xl mx-auto border-t border-[#E8D9C9] pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-80 tracking-wider">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left mb-4 md:mb-0 text-[#6B5B4F]">
           <p>© 2026 Société Ivoirienne de Pathologie.</p>
           <span className="hidden md:inline text-[#E8D9C9]">|</span>
           <p>
             Copyright by <a href="https://ibrahimkaramoko.site" target="_blank" rel="noopener noreferrer" className="font-bold text-[#2C2522] hover:text-[#F26522] transition-colors underline decoration-[#F26522]/30 underline-offset-4">El Hadj Karamoko</a>
           </p>
        </div>
        <p className="font-medium text-[#F26522] italic">"La science au service de la vie"</p>
      </div>
    </footer>
  );
}