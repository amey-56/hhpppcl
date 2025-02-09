import React, { useState } from 'react';
import { XCircle } from 'lucide-react';

const graphs = [
  {
    title: 'CO₂ Capture Efficiency',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    description: 'Real-time monitoring of carbon capture efficiency across the system'
  },
  {
    title: 'Energy Consumption',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1000',
    description: 'Analysis of energy usage and optimization opportunities'
  },
  {
    title: 'System Performance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    description: 'Overall system performance metrics and trends'
  },
  {
    title: 'Environmental Impact',
    image: 'https://images.unsplash.com/photo-1623191312665-f973a9fe2e67?auto=format&fit=crop&q=80&w=1000',
    description: 'Environmental impact assessment and carbon footprint reduction'
  },
  {
    title: 'Cost Analysis',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000',
    description: 'Financial metrics and cost optimization analysis'
  }
];

export default function Graphs() {
  const [selectedGraph, setSelectedGraph] = useState(null);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Key Performance Metrics for CCUS
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive analysis of system performance and efficiency metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graphs.map((graph) => (
            <div
              key={graph.title}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => setSelectedGraph(graph)}
            >
              <img
                src={graph.image}
                alt={graph.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{graph.title}</h3>
                <p className="text-gray-600">{graph.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedGraph && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedGraph.title}</h3>
              <button
                onClick={() => setSelectedGraph(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4">
              <img
                src={selectedGraph.image}
                alt={selectedGraph.title}
                className="w-full rounded-lg"
              />
              <p className="mt-4 text-gray-600">{selectedGraph.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}