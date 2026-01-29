import React from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart }) => {
  return (
    <div 
      onClick={() => onAddToCart(item)}
      className="group bg-surface-light dark:bg-surface-dark rounded-2xl p-3 border border-transparent hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer flex flex-col h-full animate-scale-in"
    >
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url('${item.image}')` }}
          aria-label={item.name}
        ></div>
        {item.isPopular && (
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-primary shadow-sm">
            Popular
          </div>
        )}
      </div>
      <div className="flex flex-col grow">
        <h3 className="text-text-main dark:text-white font-bold text-base line-clamp-1 mb-1">
            {item.name.split('(')[0]}
        </h3>
        <p className="text-text-muted text-xs mb-3 line-clamp-2">
            {item.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {item.price.toLocaleString()} Ks
          </span>
          <button className="size-8 rounded-lg bg-[#f5f1f0] dark:bg-[#3a2d26] text-text-main dark:text-white group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
