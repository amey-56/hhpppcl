import React from 'react';
import { Brain, Leaf, Factory, Cpu } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Optimization',
    description: 'Advanced algorithms optimize carbon capture efficiency and reduce operational costs'
  },
  {
    icon: Leaf,
    title: 'Environmental Impact',
    description: 'Significantly reduce carbon footprint through intelligent CCUS technology'
  },
  {
    icon: Factory,
    title: 'Industrial Integration',
    description: 'Seamless integration with existing industrial processes'
  },
  {
    icon: Cpu,
    title: 'Real-time Monitoring',
    description: 'Continuous system monitoring and predictive maintenance'
  }
];

export default function Introduction() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
          alt="AI Technology"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/90 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to the Future of CCUS Technology
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Revolutionizing carbon capture through artificial intelligence
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About HPCL's CCUS Initiative</h2>
          <p className="text-gray-600 mb-8">
            Hindustan Petroleum Corporation Limited (HPCL) is at the forefront of implementing
            cutting-edge Carbon Capture, Utilization, and Storage (CCUS) technology. Our commitment
            to sustainability drives us to develop innovative solutions that address the global
            challenge of carbon emissions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <Icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}