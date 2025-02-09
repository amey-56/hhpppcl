import React from 'react';
import { Activity, BarChart3, FileText, DollarSign } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../ASSETS/Hindustan_Petroleum_Logo.svg';

const navItems = [
  { path: '/', label: 'Introduction', icon: Activity },
  { path: '/ideation', label: 'AI Dashboard', icon: Activity },
  { path: '/graphs', label: 'Analytics', icon: BarChart3 },
  { path: '/report', label: 'Report', icon: FileText },
  { path: '/financials', label: 'Financials', icon: DollarSign },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <img src={logoImage} alt="HPCL Logo" className="h-8 w-auto" />
              <span className="text-xl font-semibold text-gray-900">HPCL CCUS</span>
            </div>

            {/* Navigation Items */}
            <div className="flex space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors
                    ${location.pathname === path
                      ? 'border-green-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>
    </div>
  );
}
