import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import MenuCard from './components/MenuCard';
import CartItemComponent from './components/CartItem';
import TablesSection from './components/TablesSection';
import OrdersSection from './components/OrdersSection';
import SettingsSection from './components/SettingsSection';
import { CATEGORIES, MENU_ITEMS } from './constants';
import { CartItem, MenuItem, View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('menu');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode (Optional utility for demo purposes, UI assumes user preference)
  React.useEffect(() => {
    // Default to dark mode as per screenshot initially
    document.documentElement.classList.add('dark');
    setIsDarkMode(true);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  const filteredItems = useMemo(() => {
    let items = MENU_ITEMS;

    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      items = items.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term)
      );
    }

    return items;
  }, [activeCategory, searchTerm]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      // Simple logic: if item exists without notes, increment.
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1, cartId: Date.now().toString() }];
    });
  };

  const updateQuantity = (cartId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(prev => prev.filter(i => i.cartId !== cartId));
    } else {
      setCart(prev => prev.map(i => i.cartId === cartId ? { ...i, quantity: newQuantity } : i));
    }
  };

  const cartSubtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = cartSubtotal * 0.05;
  const total = cartSubtotal + tax;

  const renderContent = () => {
    switch (currentView) {
      case 'tables':
        return <TablesSection />;
      case 'orders':
        return <OrdersSection />;
      case 'settings':
        return <SettingsSection />;
      case 'menu':
      default:
        return (
          <>
            {/* Category Chips */}
            <div className="px-6 py-4 overflow-x-auto scrollbar-hide shrink-0">
              <div className="flex gap-3 min-w-max">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-primary text-white font-bold shadow-lg shadow-primary/25 active:scale-95'
                        : 'bg-white dark:bg-[#2d2420] text-text-main dark:text-white border border-[#f5f1f0] dark:border-[#3a2d26] hover:bg-gray-50 dark:hover:bg-[#3a2d26]/80'
                    }`}
                  >
                    {cat.label} {cat.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Grid */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-6">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredItems.map(item => (
                  <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark relative">
        {/* Top Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-surface-light dark:bg-surface-dark border-b border-[#f5f1f0] dark:border-[#3a2d26]">
          <div className="flex flex-col">
            <h2 className="text-text-main dark:text-white text-xl font-bold">
              {currentView === 'menu' && 'မီနူးစာရင်း (Menu List)'}
              {currentView === 'tables' && 'စားပွဲခုံများ (Tables)'}
              {currentView === 'orders' && 'အော်ဒါမှတ်တမ်း (Order History)'}
              {currentView === 'settings' && 'ဆက်တင်များ (Settings)'}
            </h2>
            <span className="text-sm text-text-muted dark:text-text-muted-dark">မင်္ဂလာပါ, Kyaw Kyaw</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Search (Only visible in Menu or Orders) */}
            {(currentView === 'menu' || currentView === 'orders') && (
              <div className="hidden md:flex h-11 items-center bg-[#f5f1f0] dark:bg-[#2d2420] rounded-xl px-4 w-64 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                <span className="material-symbols-outlined text-text-muted">search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 text-sm w-full text-text-main dark:text-white placeholder-text-muted outline-none"
                />
              </div>
            )}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="size-11 flex items-center justify-center rounded-xl bg-white dark:bg-[#2d2420] border border-[#f5f1f0] dark:border-[#3a2d26] hover:bg-gray-50 dark:hover:bg-[#3a2d26]/80 transition-colors"
              title="Toggle Theme"
            >
              <span className="material-symbols-outlined text-text-main dark:text-white">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            
            {/* Notifications */}
            <button className="size-11 flex items-center justify-center rounded-xl bg-white dark:bg-[#2d2420] border border-[#f5f1f0] dark:border-[#3a2d26] relative hover:bg-gray-50 dark:hover:bg-[#3a2d26]/80 transition-colors">
              <span className="material-symbols-outlined text-text-main dark:text-white">notifications</span>
              <span className="absolute top-2 right-3 size-2 bg-red-500 rounded-full border border-white dark:border-[#2d2420]"></span>
            </button>
          </div>
        </header>

        {renderContent()}
      </main>

      {/* Right Sidebar (Order Cart) - Only visible in Menu View */}
      {currentView === 'menu' && (
        <aside className="w-[380px] shrink-0 bg-surface-light dark:bg-surface-dark border-l border-[#f5f1f0] dark:border-[#3a2d26] flex flex-col z-30 shadow-2xl shadow-black/5">
          {/* Cart Header */}
          <div className="px-6 py-5 border-b border-[#f5f1f0] dark:border-[#3a2d26] bg-white dark:bg-[#2d2420]">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-text-main dark:text-white">အော်ဒါ (Current Order)</h2>
              <div className="px-2.5 py-1 rounded bg-green-100 text-green-700 text-xs font-bold">Dine-in</div>
            </div>
            <div className="flex items-center justify-between text-sm text-text-muted">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">table_restaurant</span>
                <span className="font-medium text-text-main dark:text-text-muted-dark">စားပွဲ ၅ (Table 5)</span>
              </div>
              <span>#1023</span>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-3">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-text-muted opacity-50">
                <span className="material-symbols-outlined text-6xl mb-4">shopping_cart</span>
                <p>No items yet</p>
              </div>
            ) : (
              cart.map(item => (
                <CartItemComponent key={item.cartId} item={item} onUpdateQuantity={updateQuantity} />
              ))
            )}
          </div>

          {/* Cart Footer */}
          <div className="bg-surface-light dark:bg-surface-dark p-6 border-t border-[#f5f1f0] dark:border-[#3a2d26] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Subtotal</span>
                <span className="font-medium text-text-main dark:text-white">{cartSubtotal.toLocaleString()} Ks</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Tax (5%)</span>
                <span className="font-medium text-text-main dark:text-white">{tax.toLocaleString()} Ks</span>
              </div>
              <div className="flex justify-between items-center pt-2 mt-2 border-t border-dashed border-[#f5f1f0] dark:border-[#3a2d26]">
                <span className="font-bold text-lg text-text-main dark:text-white">Total</span>
                <span className="font-extrabold text-xl text-primary">{total.toLocaleString()} Ks</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <button 
                onClick={() => setCart([])}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-red-200 text-red-500 font-bold text-sm hover:bg-red-50 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">cancel</span>
                Cancel
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-orange-200 text-orange-600 font-bold text-sm hover:bg-orange-50 transition-colors">
                <span className="material-symbols-outlined text-[20px]">pause_circle</span>
                Hold
              </button>
            </div>
            <button className="w-full bg-primary hover:bg-[#d65516] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
              <span>ငွေချေမည် (Pay)</span>
              <span className="material-symbols-outlined">payments</span>
            </button>
          </div>
        </aside>
      )}
    </div>
  );
};

export default App;
