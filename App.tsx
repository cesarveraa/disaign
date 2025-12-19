import React, { useState, useEffect } from 'react';
import { THEME_LIST, THEMES_CONTENT, GLOSSARY_ITEMS, FULL_LABELS } from './constants';
import { GlossaryItem } from './types';
import { GlossaryCard } from './components/GlossaryCard';
import { Modal } from './components/Modal';
import { Matrix } from './components/Matrix';

const App: React.FC = () => {
  const [selectedGlossary, setSelectedGlossary] = useState<GlossaryItem | null>(null);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'temas', 'glosario', 'matriz', 'reflexion'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 150) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pb-20 bg-[#F6F2EE]">
      <nav className="no-print sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#E97C8522] py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-[#E97C85] text-lg tracking-tighter uppercase">DesignMind Deck</div>
          <ul className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
            {['intro', 'temas', 'glosario', 'matriz', 'reflexion'].map(id => (
              <li key={id}>
                <a href={`#${id}`} className={`hover:text-[#E97C85] transition-colors ${activeSection === id ? 'text-[#E97C85]' : ''}`}>
                  {id === 'intro' ? 'Inicio' : id}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        <header id="intro" className="py-24 text-center border-b border-[#E97C8511] mb-20">
          <h4 className="text-[#E97C85] font-bold uppercase tracking-[0.4em] text-[10px] mb-6 animate-pulse">Memoria Final — Diseño Digital I</h4>
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter text-[#2B2B2B]">DesignMind Deck</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 px-4">
            <div className="bg-white p-6 rounded-[32px] shadow-sm border border-[#F0EBE6] hover:border-[#E97C8555] transition-colors">
              <span className="text-[9px] text-gray-400 block uppercase mb-1 font-black tracking-widest">Autor</span>
              <span className="font-bold text-lg text-[#2B2B2B]">Cesar Vera</span>
            </div>
            <div className="bg-white p-6 rounded-[32px] shadow-sm border border-[#F0EBE6] hover:border-[#E97C8555] transition-colors">
              <span className="text-[9px] text-gray-400 block uppercase mb-1 font-black tracking-widest">Paralelo</span>
              <span className="font-bold text-lg text-[#2B2B2B]">2</span>
            </div>
            <div className="bg-white p-6 rounded-[32px] shadow-sm border border-[#F0EBE6] hover:border-[#E97C8555] transition-colors">
              <span className="text-[9px] text-gray-400 block uppercase mb-1 font-black tracking-widest">Fecha</span>
              <span className="font-bold text-lg text-[#2B2B2B]">{new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto px-6 space-y-6 text-gray-500 leading-relaxed text-lg font-light">
            <p>
              Esta memoria constituye una síntesis integradora de los fundamentos teóricos y prácticos, articulando los 10 ejes clave que definen la comunicación visual digital en la actualidad.
            </p>
          </div>
        </header>

        <section id="temas" className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-2 uppercase text-[#2B2B2B]">Los 10 Temas Integrados</h2>
            <p className="text-gray-400 font-medium text-sm tracking-widest uppercase px-1">Estructura fundamental del semestre.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {THEME_LIST.map((title, i) => {
              const theme = THEMES_CONTENT[title];
              return (
                <article key={i} className="bg-white p-6 rounded-[32px] border border-[#E97C8511] shadow-sm hover:shadow-xl hover:border-[#E97C8555] transition-all group">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFE4E6] text-[#E97C85] flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                    {theme.icon}
                  </div>
                  <h3 className="text-xs font-black mb-3 leading-tight uppercase tracking-tight">{FULL_LABELS[title]}</h3>
                  <p className="text-[11px] text-gray-500 mb-4 leading-relaxed line-clamp-3">{theme.def}</p>
                  
                  <div className="space-y-3 pt-3 border-t border-[#F6F2EE]">
                    <div className="bg-[#FDF5F5] p-2 rounded-xl">
                      <span className="text-[8px] font-black uppercase text-[#E97C85] block mb-1">Ejemplo</span>
                      <p className="text-[9px] italic text-gray-600 leading-tight">"{theme.example}"</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="glosario" className="mb-32">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black tracking-tighter mb-2 uppercase text-[#2B2B2B]">Glosario Visual</h2>
            <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">10 conceptos atómicos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {GLOSSARY_ITEMS.map((item) => (
              <GlossaryCard 
                key={item.id} 
                item={item} 
                onOpen={setSelectedGlossary} 
              />
            ))}
          </div>
        </section>

        <section id="matriz" className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-2 uppercase text-[#2B2B2B]">Matriz de Integración</h2>
            <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">Relaciones 10x10 y dependencias críticas.</p>
          </div>
          <Matrix />
        </section>

        <section id="reflexion" className="max-w-5xl mx-auto py-24 px-8 md:px-12 bg-white rounded-[40px] mb-20 shadow-sm border border-[#E97C8511]">
          <div className="text-center mb-16">
            <h4 className="text-[#E97C85] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Ensayo de Síntesis Final</h4>
            <h2 className="text-5xl font-black tracking-tighter uppercase text-[#2B2B2B]">Reflexión Personal</h2>
          </div>
          
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3">
                 <h3 className="text-2xl font-black text-[#E97C85] uppercase tracking-tighter leading-none mb-4">I. De la intuición a la estructura técnica</h3>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-4">
                  Mi trayectoria en este semestre de Diseño Digital I ha sido, fundamentalmente, un proceso de desaprendizaje y reconstrucción. Al principio, mi enfoque del diseño era puramente intuitivo y estético; creía que la interfaz era una capa decorativa. Sin embargo, el estudio profundo del <strong>Origen de los Sistemas Gráficos</strong> y la evolución del hardware direccionable me obligó a entender que el diseño digital es una disciplina de ingeniería visual.
                </p>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Comprender que cada botón, icono o campo de texto tiene una genealogía que se remonta al bit-mapping original y a los sistemas Xerox me ha dado una nueva apreciación por la <strong>consistencia técnica</strong>. Ya no veo píxeles aislados, sino una matriz lógica que debe ser gestionada con rigor para garantizar la fidelidad del mensaje y la funcionalidad del artefacto.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start pt-12 border-t border-[#F6F2EE]">
              <div className="w-full md:w-1/3">
                <h3 className="text-2xl font-black text-[#E97C85] uppercase tracking-tighter leading-none mb-4">II. El paradigma Usuario-Tarea-Artefacto</h3>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-4">
                  El modelo <strong>U-T-A (Usuario, Tarea, Artefacto)</strong> fue el descubrimiento más pragmático del curso. Cambió mi flujo de trabajo de 'hacer que se vea bien' a 'hacer que funcione como una mediación eficiente'. He aprendido que una interfaz exitosa es aquella que se vuelve invisible, permitiendo que el usuario complete su tarea con la mínima carga cognitiva posible. 
                </p>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Aprender a gestionar la <strong>Resolución</strong> y el <strong>Píxel</strong> no fue solo un reto técnico, sino una lección de empatía. Un diseño mal optimizado o una resolución inadecuada para el hardware del usuario es, en última instancia, una barrera comunicativa. Resolver estos desafíos mediante el uso de vectores (SVG) y el respeto a la densidad de pantalla me ha permitido entregar productos que realmente respetan la visión del usuario.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start pt-12 border-t border-[#F6F2EE]">
              <div className="w-full md:w-1/3">
                <h3 className="text-2xl font-black text-[#E97C85] uppercase tracking-tighter leading-none mb-4">III. Hacia una práctica de sistemas escalables</h3>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-4">
                  Finalmente, la mirada hacia el futuro profesional está ahora mediada por los <strong>Design Systems</strong>. Entiendo ahora que la escalabilidad y la accesibilidad (WCAG) no son complementos, sino requisitos éticos del diseñador digital. La comunicación visual debe ser inclusiva por defecto, y eso solo se logra mediante la creación de componentes modulares y sistemas de diseño coherentes.
                </p>
                <div className="p-10 bg-[#FDF5F5] rounded-3xl border-l-8 border-[#E97C85] mt-8">
                   <p className="text-xl font-medium text-[#2B2B2B] italic leading-relaxed">
                    "Este curso me ha dotado de un 'Deck' mental: un conjunto de cartas teóricas y técnicas que puedo barajar para resolver cualquier problema de interacción."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-24 pb-12 text-center border-t border-[#F0EBE6]">
          <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.4em]">Trabajo Individual Académico — Cesar Vera — Diseño Digital I</p>
        </footer>
      </main>

      <Modal item={selectedGlossary} onClose={() => setSelectedGlossary(null)} />
    </div>
  );
};

export default App;