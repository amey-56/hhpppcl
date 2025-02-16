import React, { useState } from 'react';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import co2Image from '../ASSETS/C02.png';
import energyImage from '../ASSETS/POWER.png';
import performanceImage from '../ASSETS/SYS.png';
import impactImage from '../ASSETS/ENV.png';
import costImage from '../ASSETS/COST.png';

const features = [
  {
    image: co2Image,
    title: 'CO₂ Capture Efficiency',
    description: 'Real-time monitoring of carbon capture efficiency across the system.'
  },
  {
    image: energyImage,
    title: 'Energy Consumption',
    description: 'Analysis of energy usage and optimization opportunities.'
  },
  {
    image: performanceImage,
    title: 'System Performance',
    description: 'Overall system performance metrics and trends.'
  },
  {
    image: impactImage,
    title: 'Environmental Impact',
    description: 'Environmental impact assessment and carbon footprint reduction.'
  },
  {
    image: costImage,
    title: 'Cost Analysis',
    description: 'Financial metrics and cost optimization analysis.'
  }
];

export default function Analytics() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Analysis of System Metrics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore various key performance indicators for enhanced optimization and monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all"
              onClick={() => setSelectedImage(feature)}
            >
              <div className="relative">
                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <button onClick={() => setSelectedImage(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4">
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full rounded-lg" />
              <p className="mt-4 text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
