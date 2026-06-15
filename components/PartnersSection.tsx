import Image from 'next/image';

const partners = [
  { src: '/chu-bouake.png', alt: 'CHU Bouaké' },
  { src: '/chu-cocody.png', alt: 'CHU Cocody' },
  { src: '/chu-treichville.png', alt: 'CHU Treichville' },
  { src: '/leica.jpg', alt: 'Leica' },
  { src: '/logo-roche.png', alt: 'Roche' },
  { src: '/mshcmu.jpg', alt: 'Ministère de la Santé et CMU' },
  { src: '/odmci.jpg', alt: 'Ordre des Médecins CI' },
  { src: '/ufrma.jpeg', alt: 'UFR Sciences Médicales' },
  { src: '/merck.png', alt: 'Merck' },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-20 border-t border-[#E8D9C9]/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.25em] text-center">
          Ils nous font confiance
        </p>
        <h2 className="text-3xl md:text-4xl text-[#2C2522] font-light text-center mt-4">
          Nos Partenaires & <span className="font-medium text-[#F26522]">Institutions</span>
        </h2>
      </div>

      {/* Zone de défilement infini */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Style CSS pour l'animation de défilement */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 40s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}} />

        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* On double le tableau pour que le défilement soit continu sans coupure */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div key={index} className="mx-8 md:mx-16 flex-shrink-0 flex items-center justify-center w-32 md:w-40 h-24 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <Image 
                src={partner.src} 
                alt={partner.alt} 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}