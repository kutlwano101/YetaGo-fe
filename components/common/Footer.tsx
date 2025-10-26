'use client';

import { HomeIcon, Package, Plus, Search, User } from 'lucide-react';
import React, { useState } from 'react';

type TabType = 'home' | 'profile' | 'messages' | 'scan';

export default function Footer() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <footer
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 
        bg-black text-white
        rounded-full shadow-lg shadow-black/40
        flex items-center justify-center gap-10
        py-4 px-6
        w-[95%] max-w-4xl
        z-50
        border border-gray-800
      "
    >
      {/* Home Button */}
      <button
        onClick={() => setActiveTab('home')}
        className={`transition-all ${
          activeTab === 'home' ? 'text-[#C8FF00]' : 'text-gray-400'
        }`}
      >
        <HomeIcon size={24} />
      </button>

      {/* Profile Button */}
      <button
        onClick={() => setActiveTab('profile')}
        className={`transition-all ${
          activeTab === 'profile' ? 'text-[#C8FF00]' : 'text-gray-400'
        }`}
      >
        <User size={24} />
      </button>

      {/* Floating Center Button */}
      <div className="relative flex items-center justify-center">
        <button className="
          absolute -top-8
          w-14 h-14 bg-[#C8FF00] 
          rounded-full flex items-center justify-center 
          shadow-xl hover:bg-[#b8ef00] 
          transition-all border-4 border-black
        ">
          <Plus size={26} className="text-black" />
        </button>
      </div>

      {/* Messages Button */}
      <button
        onClick={() => setActiveTab('messages')}
        className={`transition-all ${
          activeTab === 'messages' ? 'text-[#C8FF00]' : 'text-gray-400'
        }`}
      >
        <Package size={24} />
      </button>

      {/* Scan/Search Button */}
      <button
        onClick={() => setActiveTab('scan')}
        className={`transition-all ${
          activeTab === 'scan' ? 'text-[#C8FF00]' : 'text-gray-400'
        }`}
      >
        <Search size={24} />
      </button>
    </footer>
  );
}
