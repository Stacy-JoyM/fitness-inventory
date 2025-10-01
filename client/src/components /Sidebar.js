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
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!isCollapsed && <h2 className="sidebar-title">Dashboard</h2>}
        <button className="collapse-button" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {sidebarSections.map((section) => {
          const Icon = section.icon;
          const isActive = location.pathname === section.path;

          return (
            <Link
              key={section.id}
              to={section.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              {!isCollapsed && <span className="nav-label">{section.name}</span>}
            </Link>
          );
        })}
      </nav>

      {!isCollapsed && (
        <div className="sidebar-stats">
          <div className="total-sales">
            <div className="sales-label">Total Sales</div>
            <div className="sales-amount">$24,567</div>
            <div className="sales-growth">+12% from last month</div>
          </div>
        </div>
      )}
    </div>
  );
}
