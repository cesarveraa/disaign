
import React from 'react';
import { GlossaryItem } from '../types';

interface GlossaryCardProps {
  item: GlossaryItem;
  onOpen: (item: GlossaryItem) => void;
}

export const GlossaryCard: React.FC<GlossaryCardProps> = ({ item, onOpen }) => {
  return (
    <div className="bg-white rounded-[16px] p-6 shadow-sm border border-[#E97C8522] flex flex-col h-full hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 text-[#E97C85] mb-4 group-hover:scale-110 transition-transform">
        {item.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#2B2B2B] leading-tight">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
        <span className="font-semibold text-[#E97C85]">Def:</span> {item.definition}
      </p>
      <p className="text-sm text-gray-500 mb-6 line-clamp-2 italic">
        <span className="font-semibold text-[#E97C85]">Ej:</span> {item.example}
      </p>
      <div className="mt-auto">
        <button
          onClick={() => onOpen(item)}
          className="w-full py-2.5 px-4 bg-[#F6F2EE] hover:bg-[#E97C85] hover:text-white text-[#E97C85] font-semibold rounded-lg transition-colors text-sm"
          aria-label={`Ver detalle de ${item.title}`}
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
};
