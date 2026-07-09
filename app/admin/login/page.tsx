'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase'; // Assure-toi que le chemin pointe bien vers ton fichier supabase.ts
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // 1. On affiche l'erreur complète dans la console (F12 sur le navigateur)
      console.error("ERREUR SUPABASE DÉTAILLÉE :", error);
      // 2. On affiche le vrai message renvoyé par le serveur sur l'écran
      setError(`Erreur : ${error.message}`); 
      setLoading(false);
    } else {
      // Redirection vers le tableau de bord en cas de succès
      router.push('/admin/dashboard');
    }
  };

  return (
    <main className="min-h-screen bg-[#FDF6F0] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Éléments de design en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FDF6F0] via-[#F26522] to-[#FDF6F0]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E8D9C9] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="w-full max-w-md bg-white p-10 border border-[#E8D9C9]/60 shadow-xl relative z-10">
        
        {/* En-tête du formulaire */}
        <div className="text-center mb-10">
          <p className="text-[#F26522] text-xs font-bold uppercase tracking-[0.25em] mb-3">
            Administration
          </p>
          <h1 className="text-3xl text-[#2C2522] font-light tracking-tight">
            Espace <span className="font-medium text-[#F26522]">Sécurisé</span>
          </h1>
        </div>

        {/* Formulaire de connexion */}
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          
          {/* Message d'erreur dynamique */}
          {error && (
            <div className="p-4 bg-red-50 text-red-600 border border-red-100 text-xs tracking-wider text-center font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-[#6B5B4F] text-xs font-bold uppercase tracking-widest mb-2">
              Adresse Email
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#FAF5F0] p-4 text-sm font-medium tracking-wide text-[#2C2522] focus:outline-none focus:border-b-2 focus:border-[#F26522] transition-colors rounded-sm"
              placeholder="secretariat@sipath.ci"
            />
          </div>

          <div>
            <label className="block text-[#6B5B4F] text-xs font-bold uppercase tracking-widest mb-2">
              Mot de passe
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#FAF5F0] p-4 text-sm font-medium tracking-wide text-[#2C2522] focus:outline-none focus:border-b-2 focus:border-[#F26522] transition-colors rounded-sm"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-4 bg-[#2C2522] text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#F26522] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Authentification...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[#6B5B4F] text-xs hover:text-[#F26522] transition-colors underline decoration-[#E8D9C9] underline-offset-4">
            Retour au site public
          </Link>
        </div>

      </div>
    </main>
  );
}