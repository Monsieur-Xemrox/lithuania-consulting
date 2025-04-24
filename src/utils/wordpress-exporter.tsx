"use client";

import React, { useState, useEffect } from 'react';

interface ExportOptions {
  appName: string;
  includePath: boolean;
  wordpressUrl: string;
}

export const WordPressExportHelper: React.FC = () => {
  const [options, setOptions] = useState<ExportOptions>({
    appName: 'litu-consulting',
    includePath: true,
    wordpressUrl: '',
  });
  const [exportSteps, setExportSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Initialize the export steps
  useEffect(() => {
    setExportSteps([
      "Configure your Next.js project for static export",
      "Build your application",
      "Prepare WordPress for integration",
      "Upload static files to WordPress",
      "Configure WordPress to serve your app"
    ]);
  }, []);

  // Mock the export process
  const startExport = () => {
    setIsExporting(true);
    setCurrentStep(0);
    
    // Simulate the export process with delays
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = prev + 1;
        if (nextStep >= exportSteps.length) {
          clearInterval(interval);
          setIsExporting(false);
          return prev;
        }
        return nextStep;
      });
    }, 2000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
      <h1 className="text-2xl font-bold text-[#0056b3] mb-6">Next.js to WordPress Export Tool</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Configuration</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="appName">App Name (will be used for folder naming)</label>
            <input 
              type="text" 
              id="appName" 
              value={options.appName} 
              onChange={(e) => setOptions({...options, appName: e.target.value})}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="wordpressUrl">WordPress Site URL</label>
            <input 
              type="text" 
              id="wordpressUrl" 
              placeholder="https://your-wordpress-site.com"
              value={options.wordpressUrl} 
              onChange={(e) => setOptions({...options, wordpressUrl: e.target.value})}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
            />
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="includePath" 
              checked={options.includePath}
              onChange={(e) => setOptions({...options, includePath: e.target.checked})}
              className="mr-2"
            />
            <label htmlFor="includePath" className="text-gray-700">Include paths in export</label>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Export Steps</h2>
        <ol className="space-y-4">
          {exportSteps.map((step, index) => (
            <li key={index} className={`flex items-center ${index === currentStep && isExporting ? 'text-[#0056b3] font-medium' : index < currentStep ? 'text-green-600' : 'text-gray-600'}`}>
              <div className={`w-8 h-8 mr-3 rounded-full flex items-center justify-center ${
                index < currentStep ? 'bg-green-100 text-green-600' : 
                index === currentStep && isExporting ? 'bg-blue-100 text-[#0056b3] animate-pulse' : 
                'bg-gray-100 text-gray-400'
              }`}>
                {index < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              {step}
            </li>
          ))}
        </ol>
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          onClick={startExport}
          disabled={isExporting || !options.appName || !options.wordpressUrl} 
          className={`px-6 py-3 rounded-md font-medium ${
            isExporting || !options.appName || !options.wordpressUrl 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-[#0056b3] text-white hover:bg-[#004590] transition-colors'
          }`}
        >
          {isExporting ? 'Exporting...' : 'Start Export Process'}
        </button>
        
        <a 
          href="#wordpress-guide"
          className="text-[#0056b3] hover:underline"
        >
          View Detailed WordPress Guide
        </a>
      </div>
    </div>
  );
};

// Helper function to generate the export configuration for next.config.js
export const generateExportConfig = (): string => {
  return `
// next.config.js
const nextConfig = {
  output: 'export',
  // Ensure all assets are included properly
  images: { 
    unoptimized: true 
  },
  // Required for WordPress integration
  assetPrefix: './', 
  trailingSlash: true,
};

module.exports = nextConfig;
`;
};

// Helper function to generate WordPress integration instructions
export const getWordPressIntegrationSteps = (): string[] => {
  return [
    "1. Modify your next.config.js file to enable static exports",
    "2. Run 'bun run build' followed by 'bun run export' to generate the static output",
    "3. Create a new folder in your WordPress theme directory for your app",
    "4. Upload all files from the 'out' directory to this folder",
    "5. Create a custom WordPress template that integrates your Next.js app",
    "6. Apply this template to a page in WordPress"
  ];
};
