import React, { useState, useEffect } from 'react';
import { DollarSign, AlertTriangle, CheckCircle, XCircle, ZoomIn } from 'lucide-react';

const financialMetrics = [
  { label: 'Total Investment', value: '$2.5M' },
  { label: 'Annual Savings', value: '$850K' },
  { label: 'ROI', value: '34%' },
  { label: 'Payback Period', value: '2.9 years' }
];

const solutions = [
  {
    title: 'Optimize Absorption Parameters',
    description: 'Adjust solvent flow rate and temperature to improve efficiency',
    impact: 'High',
    timeToImplement: '2 hours'
  },
  {
    title: 'Increase Stripper Pressure',
    description: 'Gradually increase stripper pressure to optimal levels',
    impact: 'Medium',
    timeToImplement: '4 hours'
  },
  {
    title: 'Replace Absorption Packing',
    description: 'Schedule maintenance for packing replacement',
    impact: 'Low',
    timeToImplement: '24 hours'
  }
];

const financialTables = [
  {
    title: 'Capital Expenditure Breakdown',
    description: 'Detailed breakdown of initial investment and infrastructure costs',
    image: '/ASSETS/A.jpg'
  },
  {
    title: 'Operational Cost Analysis',
    description: 'Monthly operational expenses and maintenance costs',
    image: '/ASSETS/B.jpg'
  },
  {
    title: 'Revenue Projections',
    description: 'Five-year revenue forecast and carbon credit earnings',
    image: '/ASSETS/C.jpg'
  },
  {
    title: 'ROI Analysis',
    description: 'Comprehensive return on investment analysis and payback period calculation',
    image: '/ASSETS/D.jpg'
  }
];

export default function Financials() {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Financial Overview</h1>
          <p className="text-xl text-gray-600">Comprehensive financial analysis and system alerts</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {financialMetrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">{metric.label}</span>
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Financial Tables</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {financialTables.map((table) => (
              <div
                key={table.title}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-all"
                onClick={() => setSelectedTable(table)}
              >
                <div className="relative">
                  <img src={table.image} alt={table.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{table.title}</h3>
                  <p className="text-gray-600">{table.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
