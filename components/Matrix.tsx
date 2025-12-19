
import React, { useState } from 'react';
import { THEME_LIST, MATRIX_CONTENT, FULL_LABELS } from '../constants';
import { MatrixCell } from '../types';

export const Matrix: React.FC = () => {
  const [selected, setSelected] = useState<{row: number, col: number} | null>(null);

  const currentRelation: MatrixCell | null = selected 
    ? MATRIX_CONTENT[`${THEME_LIST[selected.row]}-${THEME_LIST[selected.col]}`] || null
    : null;

  // Función para abreviar nombres en cabecera de tabla
  const abbreviate = (name: string) => {
    if (name === "COMUNICACIÓN") return "COMUN.";
    if (name === "RESOLUCIÓN") return "RESOL.";
    if (name === "TENDENCIAS") return "TEND.";
    if (name === "EVOLUCIÓN") return "EVOL.";
    if (name === "INTERFAZ") return "INTERF.";
    if (name === "METÁFORAS") return "METAF.";
    if (name === "ESTILOS") return "ESTIL.";
    if (name === "ÍCONOS") return "ICON.";
    return name;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Matriz de Escritorio */}
      <div className="w-full lg:w-3/5 overflow-x-auto custom-scrollbar pb-4">
        <table className="w-full border-collapse bg-white shadow-xl rounded-[24px] overflow-hidden border border-[#E97C8522]">
          <thead>
            <tr className="bg-[#E97C85]">
              <th className="p-3 border border-[#E97C8544] text-white text-[9px] font-black w-12">REF</th>
              {THEME_LIST.map((t, i) => (
                <th key={i} className="p-2 border border-[#E97C8544] text-white text-[8px] leading-tight font-black uppercase min-w-[60px]">
                  {abbreviate(t)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {THEME_LIST.map((rowTheme, rIdx) => (
              <tr key={rIdx} className="hover:bg-[#FDF5F5]/30 transition-colors">
                <td className="p-2 bg-[#E97C85] border border-[#E97C8544] text-white text-[9px] font-black uppercase text-center">
                   {rIdx + 1}
                </td>
                {THEME_LIST.map((colTheme, cIdx) => {
                  const isDiagonal = rIdx === cIdx;
                  const isSelected = selected?.row === rIdx && selected?.col === cIdx;
                  const relation = MATRIX_CONTENT[`${rowTheme}-${colTheme}`];

                  return (
                    <td 
                      key={cIdx} 
                      className={`border border-[#E97C8511] text-center transition-all ${isDiagonal ? 'bg-[#FDF5F5]' : 'bg-white'} ${isSelected ? 'bg-[#FFE4E6] !border-[#E97C85]' : ''}`}
                    >
                      <button
                        onClick={() => setSelected({row: rIdx, col: cIdx})}
                        className={`w-full h-full p-2 flex flex-col items-center justify-center min-h-[50px] hover:bg-[#FFE4E6]/50 transition-colors focus:outline-none`}
                        aria-label={`Ver relación entre ${rowTheme} y ${colTheme}`}
                      >
                        <span className={`text-[8px] font-bold uppercase tracking-tighter ${isDiagonal ? 'text-[#E97C85]' : 'text-gray-400'}`}>
                          {relation?.tag}
                        </span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        
        <p className="mt-4 text-[10px] text-gray-400 italic px-2">
          * Los números corresponden al orden de los 10 temas integrados. Selecciona una celda para ver el detalle.
        </p>
      </div>

      {/* Panel de Detalle */}
      <div className="w-full lg:w-2/5 sticky top-24">
        <div className="bg-white rounded-[32px] p-8 shadow-2xl border border-[#E97C8511] min-h-[540px] flex flex-col justify-center">
          {selected ? (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col">
              <div className="mb-6">
                <div className="bg-[#FFE4E6] text-[#E97C85] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-4">
                  Categoría: {currentRelation?.tag}
                </div>
                <h3 className="text-xl font-black leading-tight text-[#2B2B2B] uppercase tracking-tighter">
                  {currentRelation?.titulo}
                </h3>
              </div>
              
              <div className="flex-grow space-y-6">
                <section>
                  <span className="text-[10px] font-black uppercase text-gray-400 block mb-2 tracking-widest">Análisis Estructural</span>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {currentRelation?.explicacion}
                  </p>
                </section>
                
                {currentRelation?.ejemplo && (
                  <section className="p-5 bg-[#FDF5F5] rounded-3xl border border-[#E97C8511]">
                    <span className="text-[10px] font-black uppercase text-[#E97C85] block mb-2 tracking-widest">Evidencia Técnica</span>
                    <p className="text-xs italic text-gray-600 leading-relaxed">"{currentRelation.ejemplo}"</p>
                  </section>
                )}
                
                {currentRelation?.aporteUX && (
                  <section>
                    <span className="text-[10px] font-black uppercase text-gray-400 block mb-2 tracking-widest">Aporte a la Experiencia</span>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">{currentRelation.aporteUX}</p>
                  </section>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-[#F6F2EE]">
                <button 
                  onClick={() => setSelected(null)}
                  className="w-full py-4 bg-[#2B2B2B] text-white rounded-2xl text-[10px] font-bold hover:bg-[#E97C85] transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-lg shadow-gray-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  Limpiar Selección
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12">
              <div className="w-16 h-16 mb-6 opacity-20">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
              </div>
              <p className="font-bold text-[10px] uppercase tracking-[0.3em] leading-relaxed max-w-[200px] mx-auto">
                Selecciona una celda de la matriz para desplegar el análisis de interdependencia.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
