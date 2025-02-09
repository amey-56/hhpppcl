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
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Operational Cost Analysis',
    description: 'Monthly operational expenses and maintenance costs',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Revenue Projections',
    description: 'Five-year revenue forecast and carbon credit earnings',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'ROI Analysis',
    description: 'Comprehensive return on investment analysis and payback period calculation',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1000'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Overview
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive financial analysis and system alerts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {financialMetrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white rounded-lg p-6 shadow-md"
            >
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
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer
                  transform hover:scale-105 transition-all"
                onClick={() => setSelectedTable(table)}
              >
                <div className="relative">
                  <img
                    src={table.image}
                    alt={table.title}
                    className="w-full h-48 object-cover"
                  />
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
                  CO₂ capture efficiency has dropped below optimal levels.
                  Immediate attention required.
                </p>

                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div
                      key={solution.title}
                      className={`p-4 rounded-lg border ${
                        index === 0
                          ? 'border-green-200 bg-green-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {solution.title}
                        </h3>
                        {index === 0 ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{solution.description}</p>
                      <div className="mt-2 flex items-center text-sm">
                        <span className="text-gray-500 mr-4">
                          Impact: {solution.impact}
                        </span>
                        <span className="text-gray-500">
                          Time: {solution.timeToImplement}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setShowAlert(false)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg
                      hover:bg-green-700 transition-colors font-medium"
                  >
                    Acknowledge
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTable && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-semibold">{selectedTable.title}</h3>
                <button
                  onClick={() => setSelectedTable(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
              <div className="p-4">
                <img
                  src={selectedTable.image}
                  alt={selectedTable.title}
                  className="w-full rounded-lg"
                />
                <p className="mt-4 text-gray-600">{selectedTable.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}