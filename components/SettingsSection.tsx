import React from 'react';

const SettingsSection: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-text-main dark:text-white mb-6">Settings</h2>

        <div className="flex flex-col gap-6">
            {/* General Settings */}
            <section className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#f5f1f0] dark:border-[#3a2d26] p-6">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">store</span>
                    Restaurant Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-text-muted">Restaurant Name</label>
                        <input type="text" defaultValue="Yangon Eats" className="w-full bg-[#f8f6f5] dark:bg-[#221610] border border-gray-200 dark:border-[#3a2d26] rounded-xl px-4 py-2.5 text-text-main dark:text-white focus:ring-2 focus:ring-primary/50 outline-none" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-text-muted">Phone Number</label>
                        <input type="text" defaultValue="+95 9 123 456 789" className="w-full bg-[#f8f6f5] dark:bg-[#221610] border border-gray-200 dark:border-[#3a2d26] rounded-xl px-4 py-2.5 text-text-main dark:text-white focus:ring-2 focus:ring-primary/50 outline-none" />
                    </div>
                    <div className="space-y-1 md:col-span-2">
                        <label className="text-sm font-medium text-text-muted">Address</label>
                        <textarea rows={2} defaultValue="No. 123, Pyay Road, Kamaryut Township, Yangon" className="w-full bg-[#f8f6f5] dark:bg-[#221610] border border-gray-200 dark:border-[#3a2d26] rounded-xl px-4 py-2.5 text-text-main dark:text-white focus:ring-2 focus:ring-primary/50 outline-none resize-none"></textarea>
                    </div>
                </div>
            </section>

            {/* Appearance */}
            <section className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#f5f1f0] dark:border-[#3a2d26] p-6">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">palette</span>
                    Appearance & System
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#f8f6f5] dark:bg-[#221610]">
                        <div className="flex flex-col">
                            <span className="font-medium text-text-main dark:text-white">Dark Mode</span>
                            <span className="text-xs text-text-muted">Use dark theme for low light environments</span>
                        </div>
                        <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:bg-primary" defaultChecked />
                            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                     <div className="flex items-center justify-between p-3 rounded-xl bg-[#f8f6f5] dark:bg-[#221610]">
                        <div className="flex flex-col">
                            <span className="font-medium text-text-main dark:text-white">Sound Effects</span>
                            <span className="text-xs text-text-muted">Play sounds on button clicks and notifications</span>
                        </div>
                        <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="sound" id="sound" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:bg-primary" defaultChecked />
                            <label htmlFor="sound" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>
            </section>

             {/* Printers */}
            <section className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#f5f1f0] dark:border-[#3a2d26] p-6">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">print</span>
                    Printers
                </h3>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between p-4 border border-green-500/30 bg-green-500/5 rounded-xl">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-green-500">print</span>
                            <div className="flex flex-col">
                                <span className="font-bold text-text-main dark:text-white">Kitchen Printer</span>
                                <span className="text-xs text-green-500">Connected • 192.168.1.102</span>
                            </div>
                        </div>
                        <button className="text-sm font-medium text-text-muted hover:text-primary">Configure</button>
                    </div>
                     <div className="flex items-center justify-between p-4 border border-[#f5f1f0] dark:border-[#3a2d26] rounded-xl">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-text-muted">print</span>
                            <div className="flex flex-col">
                                <span className="font-bold text-text-main dark:text-white">Receipt Printer</span>
                                <span className="text-xs text-red-500">Disconnected</span>
                            </div>
                        </div>
                         <button className="text-sm font-medium text-text-muted hover:text-primary">Configure</button>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
