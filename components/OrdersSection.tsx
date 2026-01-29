import React from 'react';
import { Order } from '../types';

const MOCK_ORDERS: Order[] = [
  { id: '#ORD-1023', tableId: 'T-05', itemsCount: 4, total: 12500, status: 'pending', time: '12:30 PM' },
  { id: '#ORD-1022', tableId: 'T-01', itemsCount: 2, total: 6000, status: 'completed', time: '12:15 PM', paymentMethod: 'cash' },
  { id: '#ORD-1021', tableId: 'T-03', itemsCount: 5, total: 25000, status: 'completed', time: '11:45 AM', paymentMethod: 'card' },
  { id: '#ORD-1020', tableId: 'VIP-1', itemsCount: 12, total: 85000, status: 'completed', time: '11:30 AM', paymentMethod: 'card' },
  { id: '#ORD-1019', tableId: 'T-08', itemsCount: 3, total: 9500, status: 'cancelled', time: '11:10 AM' },
  { id: '#ORD-1018', tableId: 'T-02', itemsCount: 1, total: 2500, status: 'completed', time: '10:55 AM', paymentMethod: 'cash' },
];

const OrdersSection: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-text-main dark:text-white">Recent Orders</h2>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-white dark:bg-[#2d2420] border border-[#f5f1f0] dark:border-[#3a2d26] rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#3a2d26]/80 text-text-main dark:text-white">Filter</button>
            <button className="px-4 py-2 bg-white dark:bg-[#2d2420] border border-[#f5f1f0] dark:border-[#3a2d26] rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#3a2d26]/80 text-text-main dark:text-white">Export</button>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#f5f1f0] dark:border-[#3a2d26] overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-[#f8f6f5] dark:bg-[#221610] text-text-muted text-sm border-b border-[#f5f1f0] dark:border-[#3a2d26]">
                    <th className="p-4 font-medium">Order ID</th>
                    <th className="p-4 font-medium">Table</th>
                    <th className="p-4 font-medium">Items</th>
                    <th className="p-4 font-medium">Total</th>
                    <th className="p-4 font-medium">Time</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-[#f5f1f0] dark:divide-[#3a2d26]">
                {MOCK_ORDERS.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-[#3a2d26]/40 transition-colors group">
                        <td className="p-4 font-bold text-text-main dark:text-white">{order.id}</td>
                        <td className="p-4 text-text-main dark:text-white">{order.tableId}</td>
                        <td className="p-4 text-text-muted">{order.itemsCount} items</td>
                        <td className="p-4 font-medium text-text-main dark:text-white">{order.total.toLocaleString()} Ks</td>
                        <td className="p-4 text-text-muted">{order.time}</td>
                        <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1
                                ${order.status === 'completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                                  order.status === 'pending' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 
                                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                                {order.status === 'completed' && <span className="material-symbols-outlined text-[14px]">check_circle</span>}
                                {order.status === 'pending' && <span className="material-symbols-outlined text-[14px]">pending</span>}
                                {order.status === 'cancelled' && <span className="material-symbols-outlined text-[14px]">cancel</span>}
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                        </td>
                        <td className="p-4">
                             <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-text-muted transition-colors">
                                <span className="material-symbols-outlined">more_vert</span>
                             </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersSection;
