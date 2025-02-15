import React, { useState } from 'react';
import { Download } from 'lucide-react';
import reportFile from '../ASSETS/report.pdf';

export default function Report() {
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setDownloadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Performance Report
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Generate comprehensive reports on CCUS system performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-green-600">1,234 tons</p>
            <p className="text-gray-600">Total Carbon Captured</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-green-600">94.5%</p>
            <p className="text-gray-600">System Efficiency</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-green-600">$432,000</p>
            <p className="text-gray-600">Cost Reduction</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Report Summary</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            The CCUS system has demonstrated exceptional performance over the monitored period. Key achievements include significant carbon capture rates, improved energy efficiency, and substantial cost savings through AI-driven optimization.
          </p>
          <div className="relative w-full max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div
                className="bg-green-600 h-4 rounded-full"
                style={{ width: `${downloadProgress}%` }}
              ></div>
            </div>
            <p className="text-gray-600">Download Progress: {downloadProgress}%</p>
          </div>
          <a
            href={reportFile}
            download="Performance_Report.pdf"
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Full Report
          </a>
        </div>
      </div>
    </div>
  );
}
