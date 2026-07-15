'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [activeTab, setActiveTab] = useState('annuaire');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // État pour stocker la liste des éléments récupérés depuis la base
  const [itemsList, setItemsList] = useState<any[]>([]);

  // Formulaire Annuaire
  const [nom, setNom] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [pays, setPays] = useState("Côte d'Ivoire");
  const [ville, setVille] = useState('');

  // Formulaire Équipe
  const [eqName, setEqName] = useState('');
  const [eqTitle, setEqTitle] = useState('');
  const [eqLocation, setEqLocation] = useState('');
  const [eqRegion, setEqRegion] = useState("Côte d'Ivoire");
  const [eqBio, setEqBio] = useState('');
  const [eqSpecialties, setEqSpecialties] = useState('');
  const [eqImageFile, setEqImageFile] = useState<File | null>(null);

  // Formulaire Actualités
  const [actTitre, setActTitre] = useState('');
  const [actCategorie, setActCategorie] = useState('Événement');
  const [actDate, setActDate] = useState('');
  const [actContenu, setActContenu] = useState('');
  const [actImageFile, setActImageFile] = useState<File | null>(null);

  // Effet pour fermer le pop-up après 4 secondes
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  // 1. Vérification de la session
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin/login');
      } else {
        setLoadingAuth(false);
      }
    };
    checkSession();
  }, [router]);

  // 2. Récupération dynamique
  const fetchItems = async () => {
    const { data } = await supabase
      .from(activeTab)
      .select('*')
      .order('id', { ascending: false });
    if (data) setItemsList(data);
  };

  useEffect(() => {
    if (!loadingAuth) fetchItems();
  }, [activeTab, loadingAuth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  // 3. Fonction de SUPPRESSION
  const handleDelete = async (id: number) => {
    if (!window.confirm("Es-tu sûr de vouloir supprimer définitivement cet élément ?")) return;
    
    const { error } = await supabase.from(activeTab).delete().eq('id', id);
    if (error) {
      setFeedback({ type: 'error', message: "Erreur lors de la suppression." });
    } else {
      setFeedback({ type: 'success', message: "Élément supprimé avec succès." });
      fetchItems();
    }
  };

  // Helper d'upload d'image
  const uploadMedia = async (file: File, bucket: string): Promise<string | null> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}_${Date.now()}.${fileExt}`;
    const { error: uploadError } = await supabase.storage.from(bucket).upload(fileName, file);
    if (uploadError) return null;
    const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleAddAnnuaire = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { error } = await supabase.from('annuaire').insert([{ nom, specialite, pays, ville }]);
    if (!error) {
      setFeedback({ type: 'success', message: 'Praticien ajouté !' });
      setNom(''); setSpecialite(''); setVille('');
      fetchItems();
    } else { setFeedback({ type: 'error', message: 'Erreur lors de l\'ajout.' }); }
    setIsSubmitting(false);
  };

  const handleAddEquipe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    let imageUrl = null; 
    if (eqImageFile) {
      const uploadedUrl = await uploadMedia(eqImageFile, 'sipath-media');
      if (uploadedUrl) imageUrl = uploadedUrl;
    }
    const specialtiesArray = eqSpecialties.split(',').map(i => i.trim()).filter(i => i !== '');
    const { error } = await supabase.from('equipe').insert([{
      name: eqName, title: eqTitle, location: eqLocation, region: eqRegion, bio: eqBio, specialties: specialtiesArray, image_url: imageUrl
    }]);
    if (!error) {
      setFeedback({ type: 'success', message: 'Membre enregistré !' });
      setEqName(''); setEqTitle(''); setEqLocation(''); setEqBio(''); setEqSpecialties(''); setEqImageFile(null);
      fetchItems();
    } else { setFeedback({ type: 'error', message: 'Erreur lors de l\'ajout.' }); }
    setIsSubmitting(false);
  };

  const handleAddActualite = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    let imageUrl = null;
    if (actImageFile) {
      const uploadedUrl = await uploadMedia(actImageFile, 'sipath-media');
      if (uploadedUrl) imageUrl = uploadedUrl;
    }
    const { error } = await supabase.from('actualites').insert([{
      titre: actTitre, categorie: actCategorie, date_pub: actDate, contenu: actContenu, image_url: imageUrl
    }]);
    if (!error) {
      setFeedback({ type: 'success', message: "Article publié !" });
      setActTitre(''); setActDate(''); setActContenu(''); setActImageFile(null);
      fetchItems();
    } else { setFeedback({ type: 'error', message: 'Erreur lors de la publication.' }); }
    setIsSubmitting(false);
  };

  if (loadingAuth) return <div className="min-h-screen bg-[#FDF6F0] flex items-center justify-center animate-pulse">Chargement...</div>;

  return (
    <main className="min-h-screen bg-[#FAF5F0] flex flex-col md:flex-row relative">
      
      {/* Pop-up Notification (Toast) */}
      {feedback && (
        <div className={`fixed top-8 right-8 z-[1000] p-4 text-xs font-bold tracking-widest uppercase border text-white shadow-xl animate-in slide-in-from-right-4 ${feedback.type === 'success' ? 'bg-green-700 border-green-800' : 'bg-red-700 border-red-800'}`}>
          {feedback.message}
        </div>
      )}

      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#2C2522] text-white flex flex-col justify-between shrink-0">
        <div className="p-8">
          <p className="text-[#F26522] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Administration</p>
          <h2 className="text-2xl font-light tracking-wide mb-12">SIPath</h2>
          <nav className="flex flex-col gap-5 text-xs tracking-wider uppercase font-semibold">
            <button onClick={() => { setActiveTab('annuaire'); }} className={`text-left pb-2 border-b ${activeTab === 'annuaire' ? 'border-[#F26522] text-[#F26522]' : 'border-transparent text-white/50'}`}>Annuaire</button>
            <button onClick={() => { setActiveTab('equipe'); }} className={`text-left pb-2 border-b ${activeTab === 'equipe' ? 'border-[#F26522] text-[#F26522]' : 'border-transparent text-white/50'}`}>Membres Bureau</button>
            <button onClick={() => { setActiveTab('actualites'); }} className={`text-left pb-2 border-b ${activeTab === 'actualites' ? 'border-[#F26522] text-[#F26522]' : 'border-transparent text-white/50'}`}>Actualités</button>
          </nav>
        </div>
        <div className="p-8 border-t border-white/10">
          <Link href="/" target="_blank" className="block text-xs text-white/50 hover:text-white mb-5 transition-colors">↗ Site public</Link>
          <button onClick={handleLogout} className="text-xs text-[#F26522] hover:text-white uppercase tracking-widest font-bold transition-colors">Déconnexion</button>
        </div>
      </aside>

      {/* Contenu */}
      <section className="flex-1 p-8 md:p-16 overflow-y-auto">
        <div className="max-w-3xl">
          {/* Formulaires d'ajout */}
          {activeTab === 'annuaire' && (
            <form onSubmit={handleAddAnnuaire} className="bg-white p-8 border border-[#E8D9C9]/60 shadow-sm flex flex-col gap-4 mb-12">
               <h3 className="text-xl text-[#2C2522] font-light border-b border-[#E8D9C9] pb-4">Ajouter au répertoire</h3>
               <input type="text" required value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" className="bg-[#FAF5F0] p-4 text-sm" />
               <input type="text" required value={specialite} onChange={(e) => setSpecialite(e.target.value)} placeholder="Spécialité" className="bg-[#FAF5F0] p-4 text-sm" />
               <input type="text" required value={pays} onChange={(e) => setPays(e.target.value)} placeholder="Pays" className="bg-[#FAF5F0] p-4 text-sm" />
               <input type="text" required value={ville} onChange={(e) => setVille(e.target.value)} placeholder="Ville" className="bg-[#FAF5F0] p-4 text-sm" />
               <button disabled={isSubmitting} type="submit" className="bg-[#2C2522] text-white py-4 uppercase text-xs hover:bg-[#F26522] mt-2">Enregistrer</button>
            </form>
          )}

          {activeTab === 'equipe' && (
            <form onSubmit={handleAddEquipe} className="bg-white p-8 border border-[#E8D9C9]/60 shadow-sm flex flex-col gap-4 mb-12">
               <h3 className="text-xl text-[#2C2522] font-light border-b border-[#E8D9C9] pb-4">Ajouter un membre du bureau</h3>
               <input type="text" required value={eqName} onChange={(e) => setEqName(e.target.value)} placeholder="Nom" className="bg-[#FAF5F0] p-4 text-sm" />
               <input type="text" required value={eqTitle} onChange={(e) => setEqTitle(e.target.value)} placeholder="Titre" className="bg-[#FAF5F0] p-4 text-sm" />
               <input type="text" required value={eqLocation} onChange={(e) => setEqLocation(e.target.value)} placeholder="Hôpital" className="bg-[#FAF5F0] p-4 text-sm" />
               <input type="text" value={eqSpecialties} onChange={(e) => setEqSpecialties(e.target.value)} placeholder="Spécialités" className="bg-[#FAF5F0] p-4 text-sm" />
               <textarea required rows={3} value={eqBio} onChange={(e) => setEqBio(e.target.value)} placeholder="Biographie" className="bg-[#FAF5F0] p-4 text-sm" />
               
               <label htmlFor="eqImage" className="bg-[#5D4037] text-white p-4 text-sm uppercase tracking-widest text-center cursor-pointer hover:bg-[#3E2723] transition-colors">
                  {eqImageFile ? eqImageFile.name : "Choisir une photo"}
               </label>
               <input id="eqImage" type="file" className="hidden" onChange={(e) => setEqImageFile(e.target.files ? e.target.files[0] : null)} />
               
               <button disabled={isSubmitting} type="submit" className="bg-[#2C2522] text-white py-4 uppercase text-xs hover:bg-[#F26522] mt-2">Enregistrer</button>
            </form>
          )}

          {activeTab === 'actualites' && (
            <form onSubmit={handleAddActualite} className="bg-white p-8 border border-[#E8D9C9]/60 shadow-sm flex flex-col gap-4 mb-12">
               <h3 className="text-xl text-[#2C2522] font-light border-b border-[#E8D9C9] pb-4">Publier une actualité</h3>
               <input type="text" required value={actTitre} onChange={(e) => setActTitre(e.target.value)} placeholder="Titre" className="bg-[#FAF5F0] p-4 text-sm" />
               <input type="text" required value={actCategorie} onChange={(e) => setActCategorie(e.target.value)} placeholder="Catégorie" className="bg-[#FAF5F0] p-4 text-sm" />
               <input type="text" required value={actDate} onChange={(e) => setActDate(e.target.value)} placeholder="Date" className="bg-[#FAF5F0] p-4 text-sm" />
               <textarea required rows={4} value={actContenu} onChange={(e) => setActContenu(e.target.value)} placeholder="Contenu" className="bg-[#FAF5F0] p-4 text-sm" />
               
               <label htmlFor="actImage" className="bg-[#5D4037] text-white p-4 text-sm uppercase tracking-widest text-center cursor-pointer hover:bg-[#3E2723] transition-colors">
                  {actImageFile ? actImageFile.name : "Choisir une image"}
               </label>
               <input id="actImage" type="file" className="hidden" onChange={(e) => setActImageFile(e.target.files ? e.target.files[0] : null)} />

               <button disabled={isSubmitting} type="submit" className="bg-[#2C2522] text-white py-4 uppercase text-xs hover:bg-[#F26522] mt-2">Publier</button>
            </form>
          )}

          {/* Liste */}
          <div className="bg-white p-8 border border-[#E8D9C9]/60 shadow-sm">
             <h3 className="text-xl text-[#2C2522] font-light border-b border-[#E8D9C9] pb-4 mb-4">Éléments publiés</h3>
             <ul className="divide-y divide-[#E8D9C9]/40">
               {itemsList.map(item => (
                 <li key={item.id} className="py-4 flex justify-between items-center group">
                   <p className="text-sm font-bold">{item.nom || item.name || item.titre}</p>
                   <button onClick={() => handleDelete(item.id)} className="text-xs text-red-500 hover:text-red-700">Supprimer</button>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>
    </main>
  );
}