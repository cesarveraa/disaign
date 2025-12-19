
import React, { useEffect, useRef } from 'react';
import { GlossaryItem } from '../types';

interface ModalProps {
  item: GlossaryItem | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2B2B] bg-opacity-60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-[24px] max-w-md w-full p-8 shadow-2xl relative animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#E97C85] transition-colors"
          aria-label="Cerrar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="w-16 h-16 text-[#E97C85] mb-6 mx-auto">
          {item.icon}
        </div>

        <h2 id="modal-title" className="text-2xl font-bold text-center mb-4">{item.title}</h2>
        
        <div className="space-y-6">
          <section>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E97C85] mb-1">Definición</h4>
            <p className="text-gray-700 leading-relaxed">{item.definition}</p>
          </section>

          <section>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E97C85] mb-1">Ejemplo de uso</h4>
            <p className="text-gray-700 leading-relaxed italic">{item.example}</p>
          </section>

          <div className="grid grid-cols-1 gap-4 pt-4 border-t border-gray-100">
            <div className="flex gap-3">
              <div className="w-6 h-6 text-[#E97C85] flex-shrink-0">
                <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <span className="font-bold block text-sm">Claves</span>
                <p className="text-xs text-gray-600">{item.keyPoints.join(', ')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 text-[#E97C85] flex-shrink-0">
                <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              </div>
              <div>
                <span className="font-bold block text-sm">Aplicación real</span>
                <p className="text-xs text-gray-600">{item.realApplication.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-8 py-3 bg-[#E97C85] text-white font-bold rounded-xl hover:bg-[#d66b74] transition-colors shadow-lg shadow-[#E97C8544]"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
