export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#FDF6F0] pt-28 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          Orientation Stratégique
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2C2522] font-light leading-tight mb-10 md:mb-16">
          Une vision commune pour <br className="hidden md:block" />
          <span className="font-medium text-[#F26522]">l'Anatomopathologie</span> moderne.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-[#6B5B4F] leading-relaxed text-base md:text-lg font-light">
          <div>
            <h2 className="text-[#2C2522] text-xl font-medium uppercase tracking-wider mb-4 md:mb-6 border-b border-[#E8D9C9] pb-3">
              01. Intégration Sous-Régionale
            </h2>
            <p className="mb-4 md:mb-6">
              La SIPath transcende les frontières en tissant des liens étroits avec les experts et sociétés savantes de toute l'Afrique de l'Ouest : Sénégal, Burkina Faso, Mali, Niger, Guinée, Mauritanie, Togo, Bénin, et au-delà.
            </p>
            <p>
              Le partage de connaissances, la standardisation des comptes rendus histopathologiques et la collaboration lors de nos congrès annuels matérialisent cette synergie scientifique.
            </p>
          </div>

          <div>
            <h2 className="text-[#2C2522] text-xl font-medium uppercase tracking-wider mb-4 md:mb-6 border-b border-[#E8D9C9] pb-3">
              02. Révolution Numérique
            </h2>
            <p className="mb-4 md:mb-6">
              Face aux défis de démographie médicale, la transformation digitale de notre discipline est une priorité absolue. Nous œuvrons activement pour la dématérialisation et le déploiement de réseaux interconnectés.
            </p>
            <p>
              À travers la télépathologie, l'accès au second avis expert et la numérisation des lames, nous rapprochons le diagnostic de précision de chaque citoyen, en Côte d'Ivoire comme dans toute la sous-région.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}