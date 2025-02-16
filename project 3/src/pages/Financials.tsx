import React, { useState, useEffect } from 'react';
import { DollarSign, AlertTriangle, CheckCircle, XCircle, ZoomIn } from 'lucide-react';
import aImage from '../ASSETS/A.jpg';
import bImage from '../ASSETS/B.jpg';
import cImage from '../ASSETS/C.jpg';
import dImage from '../ASSETS/D.jpg';

const financialMetrics = [
  { label: 'Total Investment', value: '$2.5M' },
  { label: 'Annual Savings', value: '$850K' },
  { label: 'ROI', value: '34%' },
  { label: 'Payback Period', value: '2.9 years' }
];

const financialTables = [
  {
    title: 'Capital Expenditure Breakdown',
    description: 'Detailed breakdown of initial investment and infrastructure costs',
    image: aImage
  },
  {
    title: 'Operational Cost Analysis',
    description: 'Monthly operational expenses and maintenance costs',
    image: bImage
  },
  {
    title: 'Revenue Projections',
    description: 'Five-year revenue forecast and carbon credit earnings',
    image: cImage
  },
  {
    title: 'ROI Analysis',
    description: 'Comprehensive return on investment analysis and payback period calculation',
    image: dImage
  }
];

export default function Financials() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

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

        {showAlert && (
          <div className="fixed inset-x-0 top-20 mx-auto max-w-2xl z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-red-600 px-4 py-2 flex items-center">
                <AlertTriangle className="h-6 w-6 text-white" />
                <span className="ml-2 text-lg font-semibold text-white">
                  Critical Issue Identified!
                </span>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  CO₂ capture efficiency has dropped below optimal levels. Immediate attention required.
                </p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setShowAlert(false)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Acknowledge
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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

