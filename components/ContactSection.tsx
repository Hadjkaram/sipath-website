export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#FDF6F0] py-24 md:py-32 px-8 md:px-12 flex flex-col items-center z-20 relative border-t border-[#E8D9C9]">
      <div className="w-full max-w-5xl">
        <p className="text-[#F26522] text-sm font-bold uppercase tracking-[0.25em] mb-4">Contact</p>
        <h2 className="text-5xl md:text-6xl text-[#2C2522] font-light mb-14 tracking-[-0.01em]">Contactez-nous</h2>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input type="text" placeholder="NOM" className="w-full bg-white border border-[#E8D9C9] p-6 text-[#2C2522] font-medium tracking-widest placeholder:text-[#9C8A7A] focus:border-b-4 focus:border-[#F26522]" />
            <input type="text" placeholder="PRÉNOMS" className="w-full bg-white border border-[#E8D9C9] p-6 text-[#2C2522] font-medium tracking-widest placeholder:text-[#9C8A7A] focus:border-b-4 focus:border-[#F26522]" />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <input type="email" placeholder="EMAIL" className="w-full bg-white border border-[#E8D9C9] p-6 text-[#2C2522] font-medium tracking-widest placeholder:text-[#9C8A7A] focus:border-b-4 focus:border-[#F26522]" />
            <input type="tel" placeholder="TÉLÉPHONE" className="w-full bg-white border border-[#E8D9C9] p-6 text-[#2C2522] font-medium tracking-widest placeholder:text-[#9C8A7A] focus:border-b-4 focus:border-[#F26522]" />
          </div>
          <textarea placeholder="MESSAGE" rows={7} className="w-full bg-white border border-[#E8D9C9] p-6 text-[#2C2522] font-medium tracking-widest placeholder:text-[#9C8A7A] focus:border-b-4 focus:border-[#F26522] resize-none"></textarea>

          <div className="flex justify-end mt-4">
            <button type="button" className="btn-premium border border-[#F26522] text-[#F26522] px-14 py-5 uppercase tracking-[0.2em] text-sm hover:bg-[#F26522] hover:text-white transition-all duration-300">
              Envoyer votre demande
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}