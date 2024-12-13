'use client';

import Image from 'next/image';
import { useState } from 'react';

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState('es');

  const languages = [
    { code: 'es', flag: '/flags/spain.svg', label: 'Español' },
    { code: 'en', flag: '/flags/uk.svg', label: 'English' },
    { code: 'zh', flag: '/flags/china.svg', label: '中文' },
    { code: 'ko', flag: '/flags/korea.svg', label: '한국어' }
  ];

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    // Aquí añadiremos la lógica de traducción
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`w-6 h-6 rounded-full overflow-hidden border-2 
            ${currentLang === lang.code ? 'border-[#FF0000]' : 'border-transparent'}`}
        >
          <Image
            src={lang.flag}
            alt={lang.label}
            width={24}
            height={24}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;