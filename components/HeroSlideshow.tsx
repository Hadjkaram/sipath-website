"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/slide-1.jpg", 
  "/slide-2.jpeg", 
  "/slide-3.jpg"
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-white">
      {slides.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-80" : "opacity-0" /* Opacité passée de 30% à 80% pour bien voir l'image */
          }`}
        >
          <Image
            src={src}
            alt="Arrière-plan SIPath"
            fill
            className="object-cover scale-105 transition-transform duration-[6000ms] ease-out"
            priority={index === 0}
            unoptimized 
          />
        </div>
      ))}
      {/* Filtre allégé pour laisser transparaître les images tout en rendant le texte lisible */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-[#FDF6F0]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#F26522_1.2px,transparent_1.2px)] bg-[length:24px_24px] opacity-10"></div>
    </div>
  );
}