"use client"; // Indispensable pour utiliser des interactions (clics, états)

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center absolute top-0 z-50 bg-transparent">
        
        {/* Logo */}
        <Link href="/" className="flex items-center z-50" onClick={closeMenu}>
          <div className="bg-white rounded-full p-1.5 shadow-md border border-[#E8D9C9]/60">
            <Image 
              src="/logo-sipath.png" 
              alt="Logo SIPath" 
              width={65} 
              height={65} 
              className="w-12 h-12 md:w-14 md:h-14 object-contain" 
              priority
            />
          </div>
        </Link>

        {/* Menu Desktop (Caché sur mobile) */}
        <ul className="hidden md:flex space-x-12 list-none m-0 p-0 items-center">
          <li className="tracking-[0.2em] uppercase text-xs font-semibold text-[#2C2522] hover:text-[#F26522] transition-colors duration-300">
            <Link href="/vision">Vision</Link>
          </li>
          <li className="tracking-[0.2em] uppercase text-xs font-semibold text-[#2C2522] hover:text-[#F26522] transition-colors duration-300">
            <Link href="/equipe">L'Équipe</Link>
          </li>
          <li className="tracking-[0.2em] uppercase text-xs font-semibold text-[#2C2522] hover:text-[#F26522] transition-colors duration-300">
            <Link href="/annuaire">Annuaire</Link>
          </li>
          <li className="tracking-[0.2em] uppercase text-xs font-semibold text-[#2C2522] hover:text-[#F26522] transition-colors duration-300">
            <Link href="/actualites">Actualités</Link>
          </li>
          <li className="tracking-[0.2em] uppercase text-xs font-semibold text-[#2C2522] hover:text-[#F26522] transition-colors duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Bouton Burger Mobile (Caché sur desktop) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
        >
          <span className={`block w-6 h-px bg-[#2C2522] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-px bg-[#2C2522] transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-px bg-[#2C2522] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Overlay Menu Mobile Plein Écran */}
      <div className={`fixed inset-0 bg-[#FDF6F0] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col space-y-8 text-center">
          <li className="overflow-hidden">
            <Link href="/vision" onClick={closeMenu} className="text-3xl font-light text-[#2C2522] hover:text-[#F26522] transition-colors uppercase tracking-widest block transform transition-transform duration-500 delay-100">Vision</Link>
          </li>
          <li className="overflow-hidden">
            <Link href="/equipe" onClick={closeMenu} className="text-3xl font-light text-[#2C2522] hover:text-[#F26522] transition-colors uppercase tracking-widest block transform transition-transform duration-500 delay-150">L'Équipe</Link>
          </li>
          <li className="overflow-hidden">
            <Link href="/annuaire" onClick={closeMenu} className="text-3xl font-light text-[#2C2522] hover:text-[#F26522] transition-colors uppercase tracking-widest block transform transition-transform duration-500 delay-200">Annuaire</Link>
          </li>
          <li className="overflow-hidden">
            <Link href="/actualites" onClick={closeMenu} className="text-3xl font-light text-[#2C2522] hover:text-[#F26522] transition-colors uppercase tracking-widest block transform transition-transform duration-500 delay-250">Actualités</Link>
          </li>
          <li className="overflow-hidden">
            <Link href="/contact" onClick={closeMenu} className="text-3xl font-light text-[#2C2522] hover:text-[#F26522] transition-colors uppercase tracking-widest block transform transition-transform duration-500 delay-300">Contact</Link>
          </li>
        </ul>
        <div className="absolute bottom-12 text-[#6B5B4F] text-xs tracking-widest uppercase">
          Société Ivoirienne de Pathologie
        </div>
      </div>
    </>
  );
}