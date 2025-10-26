'use client';

import React, { useState } from 'react';
import {
  Package,
  MapPin,
  Clock,
  Search,
  DollarSign,
  MapPinned,
  CheckCircle2,
  Plus,
  User,
  Mic,
  HomeIcon,
  Menu,
  QrCode,
  MessageCircle,
  Bell,
  Wallet
} from 'lucide-react';

interface QuickAction {
  id: number;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface Shipment {
  id: number;
  name: string;
  trackingNo: string;
  location: string;
  deliveryTime: string;
  progress: number;
  iconBg: string;
  icon: string;
}

type TabType = 'home' | 'profile' | 'messages' | 'scan';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const quickActions: QuickAction[] = [
    { id: 1, name: 'Check Rates', icon: Wallet },
    { id: 2, name: 'Drop Point', icon: MapPinned },
    { id: 3, name: 'Verify', icon: CheckCircle2 },
    { id: 4, name: 'Schedule', icon: Clock },
    { id: 5, name: 'Support', icon: Package }
  ];

  const shipments: Shipment[] = [
    {
      id: 1,
      name: 'Package 3',
      trackingNo: 'W7564D420',
      location: 'Rustenburg, SA',
      deliveryTime: '2-3 Hours',
      progress: 65,
      iconBg: 'bg-black',
      icon: '🍎'
    },
    {
      id: 2,
      name: 'Package 2',
      trackingNo: 'W7564D420',
      location: 'Limpopo, SA',
      deliveryTime: '2-3 Hours',
      progress: 40,
      iconBg: 'bg-blue-500',
      icon: '👕'
    }
    ,
    {
      id: 3,
      name: 'Package 1',
      trackingNo: 'W7564D420',
      location: 'Johannesburg, SA',
      deliveryTime: '43 mins',
      progress: 40,
      iconBg: 'bg-blue-500',
      icon: '👕'
    }
  ];

  return (
    <div className="min-h-screen pb-20 flex flex-col bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="bg-[#0F0F0F] rounded-b-4xl  text-white py-6 px-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Menu size={18} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Kutlwano</p>
              <p className="text-gray-400 text-xs">Johannesburg, SA</p>
            </div>
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <Bell size={18} className="text-gray-300" />
          </div>
        </div>

        <section className='max-w-4xl mx-auto py-10'>
          {/* Search Bar */}
          <div className="relative py-2 bg-[#1E1E1E] rounded-full shadow-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Track your package"
              className="w-full bg-transparent text-white rounded-xl py-3 pl-12 pr-12 text-sm placeholder-gray-500 focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <QrCode size={18} className="text-gray-400" />
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex max-w-xl mx-auto flex-wrap gap-3 py-5">
            <button className="flex-1 bg-[#C8FF00] text-black font-bold rounded-full py-3 flex items-center justify-center gap-4 hover:bg-[#b8ef00] transition-all shadow-md">
              <span className='bg-black h-8 w-8 flex items-center justify-center text-white rounded-full '>
                <Package size={18} />
              </span>
              New Delivery
            </button>
            <button className="flex-1 bg-[#1E1E1E] text-white font-semibold rounded-full py-3 flex items-center justify-center gap-2 border border-[#C8FF00] hover:bg-gray-900 transition-all">
              <span className='bg-black h-8 w-8 flex items-center justify-center text-white rounded-full '>
                <Package size={18} />
              </span>
              Track Package
            </button>
          </div>
        </section>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6 max-w-5xl mx-auto w-full">
        

        {/* Quick Actions Carousel */}
        <div className=" rounded-full py-3 px-4 mb-8 shadow-inner overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 min-w-max">
            {quickActions.map((action) => {
              const IconComponent = action.icon;
              return (
                <button key={action.id} className="flex bg-[#F5F5F5] rounded-full min-w-50 p-1 pl-2  items-center  shrink-0">
                  <div className="w-12 h-12  bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-md">
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <div className="text-gray-600 text-xs flex mx-auto font-medium whitespace-nowrap">
                    {action.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Shipment Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg text-gray-900">Current Shipment</h2>
          <button className="bg-[#C8FF00] text-black text-xs font-bold px-8 py-3 rounded-full hover:bg-[#b8ef00] transition-all shadow-sm">
            See All
          </button>
        </div>

        {/* Shipment Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shipments.map((shipment, index) => (
            <div
              key={shipment.id}
              className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 ${shipment.iconBg} rounded-full flex items-center justify-center text-xl shadow-md`}
                  >
                    {shipment.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-base">{shipment.name}</h3>
                    <p className="text-gray-400 text-xs font-medium">{shipment.trackingNo}</p>
                  </div>
                </div>
                {index === 0 && <div className="text-5xl -mr-1">🛵</div>}
                {index === 1 && (
                  <div className="flex items-center -mr-1">
                    <span className="text-3xl">👤</span>
                    <span className="text-3xl">📦</span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-4 relative">
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-[#C8FF00] h-full rounded-full relative"
                    style={{ width: `${shipment.progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#C8FF00] rounded-full border-2 border-white shadow-md"></div>
                  </div>
                </div>
              </div>

              {/* Details Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#C8FF00]/10 rounded-full flex items-center justify-center">
                    <MapPin size={14} className="text-[#C8FF00]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-gray-900 text-xs font-bold">{shipment.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#C8FF00]/10 rounded-full flex items-center justify-center">
                    <Clock size={14} className="text-[#C8FF00]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Delivery Time</p>
                    <p className="text-gray-900 text-xs font-bold">{shipment.deliveryTime}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
};

export default HomePage;
