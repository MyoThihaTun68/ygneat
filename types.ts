export type View = 'tables' | 'menu' | 'orders' | 'settings';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // e.g., 'all', 'specials', 'breakfast', 'salads', 'main', 'drinks'
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
  note?: string; // e.g. "No Coriander", "Spicy"
  cartId: string; // unique id for the cart item instance (to handle same item with different notes)
}

export interface Category {
  id: string;
  label: string;
  labelEn: string;
}

export interface Table {
  id: number;
  name: string;
  status: 'available' | 'occupied' | 'reserved' | 'payment';
  seats: number;
}

export interface Order {
  id: string;
  tableId: string;
  itemsCount: number;
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  time: string;
  paymentMethod?: 'cash' | 'card';
}