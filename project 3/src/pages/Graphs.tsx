import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
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
  const [zoomedImage, setZoomedImage] = useState(null);

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
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-48 object-cover cursor-pointer" 
                onClick={() => setZoomedImage(feature.image)}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative p-4 bg-white rounded-lg max-w-4xl shadow-xl">
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl hover:text-black"
              onClick={() => setZoomedImage(null)}
            >
              <X />
            </button>
            <img src={zoomedImage} alt="Zoomed" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </div>
  );
}
