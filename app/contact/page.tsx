import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDF6F0] pt-40 pb-24 px-12 flex flex-col items-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Colonne Informations à gauche */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Secrétariat SIPath
            </p>
            <h1 className="text-5xl text-[#2C2522] font-light mb-8">
              Nous <br /><span className="font-medium text-[#F26522]">joindre</span>
            </h1>
            <p className="text-[#6B5B4F] font-light leading-relaxed mb-12">
              Pour toute demande institutionnelle, adhésion ou information relative aux prochains congrès de la SIPath.
            </p>
          </div>

          <div className="space-y-6 text-sm tracking-wide text-[#2C2522]">
            <div>
              <h4 className="font-bold uppercase text-[#F26522] mb-1">Siège National</h4>
              <p className="text-[#6B5B4F] font-light">Abidjan, Côte d'Ivoire</p>
            </div>
            <div>
              <h4 className="font-bold uppercase text-[#F26522] mb-1">Email</h4>
              <p className="text-[#6B5B4F] font-light">contact@sipath.ci</p>
            </div>
            {/* ========== BLOC WHATSAPP ========== */}
            <div>
              <h4 className="font-bold uppercase text-[#F26522] mb-1">WhatsApp</h4>
              <Link 
                href="https://wa.me/2250556005556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#6B5B4F] font-light hover:text-[#F26522] transition-colors flex items-center gap-2"
              >
                +225 05 56 00 55 56 <span className="text-lg leading-none">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Colonne Formulaire Premium à droite */}
        <div className="md:col-span-7 bg-white p-10 border border-[#E8D9C9]/60 shadow-sm">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="NOM" className="w-full bg-[#FAF5F0] p-4 text-xs font-bold tracking-widest text-[#2C2522] placeholder:text-gray-400 focus:outline-none focus:border-b-2 focus:border-[#F26522] rounded-sm" />
              <input type="text" placeholder="PRÉNOMS" className="w-full bg-[#FAF5F0] p-4 text-xs font-bold tracking-widest text-[#2C2522] placeholder:text-gray-400 focus:outline-none focus:border-b-2 focus:border-[#F26522] rounded-sm" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="email" placeholder="EMAIL" className="w-full bg-[#FAF5F0] p-4 text-xs font-bold tracking-widest text-[#2C2522] placeholder:text-gray-400 focus:outline-none focus:border-b-2 focus:border-[#F26522] rounded-sm" />
              <input type="tel" placeholder="TÉLÉPHONE" className="w-full bg-[#FAF5F0] p-4 text-xs font-bold tracking-widest text-[#2C2522] placeholder:text-gray-400 focus:outline-none focus:border-b-2 focus:border-[#F26522] rounded-sm" />
            </div>
            <textarea placeholder="MESSAGE" rows={5} className="w-full bg-[#FAF5F0] p-4 text-xs font-bold tracking-widest text-[#2C2522] placeholder:text-gray-400 focus:outline-none focus:border-b-2 focus:border-[#F26522] rounded-sm resize-none"></textarea>
            
            <button type="button" className="w-full mt-2 bg-[#2C2522] text-white py-4 uppercase tracking-widest text-xs font-semibold hover:bg-[#F26522] transition-colors duration-300 rounded-sm">
              Envoyer votre message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}