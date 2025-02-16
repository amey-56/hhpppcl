import React, { useState, useEffect } from 'react';
import { DollarSign, AlertTriangle, CheckCircle, XCircle, ZoomIn } from 'lucide-react';
import aImage from '../ASSETS/A.png';
import bImage from '../ASSETS/B.png';
import cImage from '../ASSETS/C.png';
import dImage from '../ASSETS/D.png';
import mascotImage from '../ASSETS/Mascot.jpg';

const financialMetrics = [
  { label: 'Purity of Captured C02', value: '99%' },
  { label: 'Energy Requirement', value: '2.5-3.0 J' },
  { label: 'Solvent Makeup Rate', value: '0.2 kg' },
  { label: 'Compression Pressure', value: '100-150 bar' }
];

const solutions = [
  {
    title: 'Optimize Absorption Parameters',
    description: 'Adjust solvent flow rate and temperature to improve efficiency',
    impact: 'High',
    timeToImplement: '2 hours',
    mascot: mascotImage
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
    title: 'Purity of CO2 Captured',
    description: 'Understand how much of C02 we have captured',
    image: aImage
  },
  {
    title: 'Energy Requirement',
    description: 'Calculation of energy required/ tonne C02 Captured',
    image: bImage
  },
  {
    title: 'Solvent Makeup Rate',
    description: 'Indepth Analysis on usage of Solvent ',
    image: cImage
  },
  {
    title: 'Compression Pressure',
    description: 'Total Pressure used',
    image: dImage
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CCU Plant Real-time Analysis</h1>
          <p className="text-xl text-gray-600">Comprehensive analysis and system alerts</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {financialMetrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">{metric.label}</span>
              
              </div>
              <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Analysis with Real Time Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {financialTables.map((table) => (
              <div
                key={table.title}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-all"
                onClick={() => setSelectedTable(table)}
              >
                <div className="relative group">
                  <img src={table.image} alt={table.title} className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-125" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
          <div className="fixed inset-x-0 top-20 mx-auto max-w-3xl z-50 p-6">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full">
              <div className="bg-red-600 px-6 py-3 flex items-center">
                <AlertTriangle className="h-6 w-6 text-white" />
                <span className="ml-2 text-lg font-semibold text-white">
                  Critical Issue Identified!
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  CO₂ capture efficiency has dropped below optimal levels. Immediate attention required.
                </p>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={solution.title} className={`p-4 rounded-lg border flex items-center gap-4 ${index === 0 ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
                      {solution.mascot && <img src={solution.mascot} alt="Mascot" className="w-12 h-12 rounded-full" />}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{solution.title}</h3>
                        <p className="text-sm text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <button onClick={() => setShowAlert(false)} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Acknowledge
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
