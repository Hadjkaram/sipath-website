export default function Footer() {
  return (
    <footer className="w-full bg-[#FDF6F0] pt-20 pb-10 px-8 md:px-12 text-[#2C2522] border-t border-[#E8D9C9] relative z-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16 text-sm">
        <div>
          <h4 className="text-[#F26522] font-bold uppercase tracking-[0.2em] mb-4">Abidjan</h4>
          <p className="opacity-75 leading-relaxed">Siège SIPath<br />Côte d'Ivoire</p>
        </div>
        <div>
          <h4 className="text-[#2C2522] font-bold uppercase tracking-[0.2em] mb-4">Dakar</h4>
          <p className="opacity-75 leading-relaxed">Réseau Confrères<br />Sénégal</p>
        </div>
        <div>
          <h4 className="text-[#2C2522] font-bold uppercase tracking-[0.2em] mb-4">Ouagadougou</h4>
          <p className="opacity-75 leading-relaxed">Réseau Confrères<br />Burkina Faso</p>
        </div>
        <div>
          <h4 className="text-[#2C2522] font-bold uppercase tracking-[0.2em] mb-4">Bamako</h4>
          <p className="opacity-75 leading-relaxed">Réseau Confrères<br />Mali</p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto border-t border-[#E8D9C9] pt-8 flex flex-col md:flex-row justify-between text-xs opacity-60 tracking-wider">
        <p>© 2026 Société Ivoirienne de Pathologie.</p>
        <p className="mt-4 md:mt-0">Mentions Légales | Politique de Confidentialité</p>
      </div>
    </footer>
  );
}