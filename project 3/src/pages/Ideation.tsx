import React from 'react';
import { ArrowRight, MonitorDot, Gauge, AlertTriangle, TrendingUp } from 'lucide-react';
import hpclLogo from '../ASSETS/KK.png';

const features = [
  {
    icon: MonitorDot,
    title: 'Real-time Monitoring',
    description: 'Monitor CO₂ capture rates and system performance in real-time'
  },
  {
    icon: Gauge,
    title: 'Efficiency Metrics',
    description: 'Track and optimize energy consumption and capture efficiency'
  },
  {
    icon: AlertTriangle,
    title: 'Predictive Alerts',
    description: 'Early warning system for potential system issues'
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Advanced analytics for continuous system improvement'
  }
];

export default function Ideation() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Dashboard for CCUS Optimization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent dashboard provides comprehensive monitoring and optimization
            of your CCUS systems through advanced AI algorithms.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="aspect-video bg-gray-100 p-8 flex items-center justify-center">
            <img src={hpclLogo} alt="Hindustan Petroleum Logo" className="max-h-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow group"
              >
                <Icon className="h-8 w-8 text-green-600 mb-4" />
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
