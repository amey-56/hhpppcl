import React, { useState } from 'react';
import { FileText, Download, RefreshCw } from 'lucide-react';

const metrics = [
  { label: 'Total Carbon Captured', value: '1,234 tons' },
  { label: 'System Efficiency', value: '94.5%' },
  { label: 'Energy Savings', value: '15.3%' },
  { label: 'Cost Reduction', value: '$432,000' }
];

export default function Report() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setReportGenerated(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Performance Report</h1>
          <p className="text-xl text-gray-600">
            Generate comprehensive reports on CCUS system performance
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-medium
              ${isGenerating
                ? 'bg-gray-400'
                : 'bg-green-600 hover:bg-green-700'
              } transition-colors`}
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                Generating Report...
              </>
            ) : (
              <>
                <FileText className="h-5 w-5 mr-2" />
                Generate Report
              </>
            )}
          </button>

          {reportGenerated && (
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Report Summary</h3>
              <div className="prose prose-sm">
                <p>
                  The CCUS system has demonstrated exceptional performance over the monitored period.
                  Key achievements include significant carbon capture rates, improved energy efficiency,
                  and substantial cost savings through AI-driven optimization.
                </p>
                <button
                  className="mt-6 inline-flex items-center px-4 py-2 border border-green-600 rounded-lg
                    text-green-600 hover:bg-green-50 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}