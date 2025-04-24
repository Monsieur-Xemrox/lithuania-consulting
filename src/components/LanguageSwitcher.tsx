"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe size={18} className="text-gray-600" />
      <div className="flex rounded-md overflow-hidden border border-gray-200">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            language === 'en' 
              ? 'bg-[#0056b3] text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('tr')}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            language === 'tr' 
              ? 'bg-[#0056b3] text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          TR
        </button>
      </div>
    </div>
  );
};
