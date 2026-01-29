import React from 'react';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (cartId: string, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity }) => {
  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUpdateQuantity(item.cartId, item.quantity + 1);
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUpdateQuantity(item.cartId, item.quantity - 1);
  };

  return (
    <div className="p-3 bg-[#f8f6f5] dark:bg-[#221610] rounded-xl flex gap-3 group animate-scale-in">
      <div
        className="size-16 rounded-lg bg-gray-200 bg-cover bg-center shrink-0"
        style={{ backgroundImage: `url('${item.image}')` }}
      ></div>
      <div className="flex flex-col flex-1 min-w-0 justify-between">
        <div className="flex justify-between items-start">
          <h4 className="font-bold text-sm text-text-main dark:text-white truncate pr-2">
            {item.name.split('(')[0]}
          </h4>
          <span className="font-bold text-sm text-text-main dark:text-white shrink-0">
            {item.price.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-text-muted truncate max-w-[80px]">
            {item.note || ''}
          </p>
          <div className="flex items-center gap-3 bg-white dark:bg-[#2d2420] rounded-lg px-2 py-1 shadow-sm">
            <button
              onClick={handleDecrease}
              className="text-text-muted hover:text-primary transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[16px]">remove</span>
            </button>
            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
            <button
              onClick={handleIncrease}
              className="text-text-muted hover:text-primary transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
