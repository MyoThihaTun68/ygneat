import React from 'react';
import { Table } from '../types';

const MOCK_TABLES: Table[] = [
  { id: 1, name: 'T-01', status: 'occupied', seats: 4 },
  { id: 2, name: 'T-02', status: 'available', seats: 2 },
  { id: 3, name: 'T-03', status: 'available', seats: 4 },
  { id: 4, name: 'T-04', status: 'payment', seats: 6 },
  { id: 5, name: 'T-05', status: 'reserved', seats: 4 },
  { id: 6, name: 'T-06', status: 'available', seats: 2 },
  { id: 7, name: 'T-07', status: 'available', seats: 8 },
  { id: 8, name: 'T-08', status: 'occupied', seats: 4 },
  { id: 9, name: 'T-09', status: 'available', seats: 2 },
  { id: 10, name: 'T-10', status: 'available', seats: 4 },
  { id: 11, name: 'VIP-1', status: 'reserved', seats: 10 },
  { id: 12, name: 'VIP-2', status: 'available', seats: 10 },
];

const TablesSection: React.FC = () => {
  const getStatusColor = (status: Table['status']) => {
    switch (status) {
      case 'available': return 'bg-white dark:bg-[#2d2420] border-[#f5f1f0] dark:border-[#3a2d26]';
      case 'occupied': return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'reserved': return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800';
      case 'payment': return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      default: return 'bg-white';
    }
  };

  const getStatusBadge = (status: Table['status']) => {
    switch (status) {
      case 'available': return <span className="text-gray-500">Available</span>;
      case 'occupied': return <span className="text-red-500 font-bold">Occupied</span>;
      case 'reserved': return <span className="text-orange-500 font-bold">Reserved</span>;
      case 'payment': return <span className="text-green-500 font-bold">Payment</span>;
    }
  };

  const getIconColor = (status: Table['status']) => {
    switch (status) {
      case 'available': return 'text-gray-300 dark:text-gray-600';
      case 'occupied': return 'text-red-500';
      case 'reserved': return 'text-orange-500';
      case 'payment': return 'text-green-500';
    }
  };

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-text-main dark:text-white">Tables Status</h2>
        <div className="flex gap-4">
            <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-gray-300"></div>
                <span className="text-sm text-text-muted">Available</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500"></div>
                <span className="text-sm text-text-muted">Occupied</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-orange-500"></div>
                <span className="text-sm text-text-muted">Reserved</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-text-muted">Payment</span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {MOCK_TABLES.map((table) => (
          <button
            key={table.id}
            className={`relative p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 aspect-square transition-all hover:scale-105 active:scale-95 ${getStatusColor(table.status)}`}
          >
            <div className="absolute top-3 right-3 text-xs font-medium text-text-muted flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">person</span>
                {table.seats}
            </div>
            
            <span className={`material-symbols-outlined text-6xl ${getIconColor(table.status)}`}>
                table_restaurant
            </span>
            
            <div className="text-center mt-2">
                <h3 className="text-xl font-bold text-text-main dark:text-white">{table.name}</h3>
                <div className="text-xs mt-1">{getStatusBadge(table.status)}</div>
            </div>

            {table.status === 'occupied' && (
                <div className="absolute bottom-3 text-xs font-mono text-text-muted">
                    14:32
                </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TablesSection;
