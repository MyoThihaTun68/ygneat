import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  return (
    <aside className="w-20 lg:w-64 flex flex-col justify-between bg-surface-light dark:bg-surface-dark border-r border-[#f5f1f0] dark:border-[#3a2d26] z-20 shrink-0 transition-all duration-300">
      <div className="flex flex-col h-full">
        {/* Brand */}
        <div className="flex items-center gap-3 p-6">
          <div className="bg-primary/10 aspect-square rounded-xl size-10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[28px]">lunch_dining</span>
          </div>
          <div className="hidden lg:flex flex-col">
            <h1 className="text-text-main dark:text-white text-lg font-bold leading-tight">Yangon Eats</h1>
            <p className="text-text-muted dark:text-text-muted-dark text-xs font-normal">POS System</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 px-3 py-4 grow">
          <NavItem 
            icon="table_restaurant" 
            label="စားပွဲများ (Tables)" 
            view="tables" 
            active={currentView === 'tables'} 
            onClick={onNavigate} 
          />
          <NavItem 
            icon="restaurant_menu" 
            label="မီနူး (Menu)" 
            view="menu" 
            active={currentView === 'menu'} 
            onClick={onNavigate} 
          />
          <NavItem 
            icon="receipt_long" 
            label="အော်ဒါများ (Orders)" 
            view="orders" 
            active={currentView === 'orders'} 
            onClick={onNavigate} 
          />
          <NavItem 
            icon="settings" 
            label="ဆက်တင်များ (Settings)" 
            view="settings" 
            active={currentView === 'settings'} 
            onClick={onNavigate} 
          />
        </nav>

        {/* Bottom Actions */}
        <div className="p-3 mt-auto">
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#ffece5] group transition-colors">
            <span className="material-symbols-outlined text-text-muted group-hover:text-red-500">logout</span>
            <span className="hidden lg:block text-text-muted group-hover:text-red-500 text-sm font-medium">အကောင့်ထွက်မည်</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  view: View;
  active?: boolean;
  onClick: (view: View) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, view, active, onClick }) => {
  return (
    <button
      onClick={() => onClick(view)}
      className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group ${
        active
          ? 'bg-primary/10 text-primary'
          : 'hover:bg-[#f5f1f0] dark:hover:bg-[#3a2d26]'
      }`}
    >
      <span
        className={`material-symbols-outlined ${
          active
            ? 'fill-1'
            : 'text-text-muted dark:text-text-muted-dark group-hover:text-primary'
        }`}
      >
        {icon}
      </span>
      <span
        className={`hidden lg:block text-sm font-medium ${
          active
            ? 'font-bold'
            : 'text-text-muted dark:text-text-muted-dark group-hover:text-text-main dark:group-hover:text-white'
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default Sidebar;
