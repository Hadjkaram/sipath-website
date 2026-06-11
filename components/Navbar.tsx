import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full py-7 px-12 flex justify-between items-center fixed top-0 z-50 bg-[#FDF6F0]/95 backdrop-blur-md border-b border-[#E8D9C9]/60">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo-sipath.png"
          alt="Logo SIPath"
          width={110}
          height={110}
          className="w-24 h-auto object-contain"
        />
      </Link>

      <ul className="flex space-x-10 text-sm uppercase tracking-[0.2em] text-[#2C2522] font-medium">
        <li className="hover:text-[#F26522] cursor-pointer transition-colors duration-300">
          <Link href="#vision">Vision</Link>
        </li>
        <li className="hover:text-[#F26522] cursor-pointer transition-colors duration-300">
          <Link href="/equipe">L'Équipe</Link>
        </li>
        <li className="hover:text-[#F26522] cursor-pointer transition-colors duration-300">
          <Link href="#annuaire">Annuaire</Link>
        </li>
        <li className="hover:text-[#F26522] cursor-pointer transition-colors duration-300">
          <Link href="#actualites">Actualités</Link>
        </li>
        <li className="hover:text-[#F26522] cursor-pointer transition-colors duration-300">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}