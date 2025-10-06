import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Package,
  ShoppingCart,
  FileText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const sidebarSections = [
    { id: 'overview', name: 'Overview', icon: BarChart3, path: '/dashboard' },
    { id: 'products', name: 'Products', icon: Package, path: '/products' },
    { id: 'invoice', name: 'Invoice', icon: FileText, path: '/invoice' },
    { id: 'saleshistory', name: 'Sale History', icon: ShoppingCart, path: '/salehistory' },
    { id: 'reports', name: 'Reports', icon: BarChart3, path: '/reports' },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-[72px]' : 'w-60'} bg-gray-800 text-white h-screen p-4 transition-[width] duration-300 flex flex-col sticky top-0`}>
      <div className="flex items-center justify-between mb-8">
        {!isCollapsed && <h2 className="text-xl font-semibold">Dashboard</h2>}
        <button
          className="p-1 rounded hover:bg-white/10"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="space-y-1">
        {sidebarSections.map((section) => {
          const Icon = section.icon;
          const isActive = location.pathname === section.path;
          return (
            <Link
              key={section.id}
              to={section.path}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
              }`}
            >
              <Icon size={20} />
              {!isCollapsed && <span className="whitespace-nowrap">{section.name}</span>}
            </Link>
          );
        })}
      </nav>

      {!isCollapsed && (
        <div className="mt-auto rounded-md bg-gray-900 p-4">
          <div className="text-sm text-gray-300">Total Sales</div>
          <div className="text-xl font-bold">$24,567</div>
          <div className="text-xs text-green-400">+12% from last month</div>
        </div>
      )}
    </aside>
  );
}
