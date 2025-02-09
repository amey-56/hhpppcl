import React from 'react';
import { Activity, BarChart3, FileText, DollarSign } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import hpclLogo from '../ASSETS/Hindustan_Petroleum_Logo.svg (1).png';

const navItems = [
  { path: '/', label: 'Introduction', icon: () => <img src={hpclLogo} alt="HPCL Logo" className="h-6 w-6" /> },
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
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={hpclLogo} alt="HPCL CCUS Logo" className="h-8" />
              <span className="ml-2 text-xl font-semibold text-gray-900">HPCL CCUS</span>
            </div>
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
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}
