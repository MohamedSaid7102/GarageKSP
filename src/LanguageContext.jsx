import React, { createContext, useState } from 'react';
import enFlag from './assets/img/icon/en.png';

export const LanguageContext = createContext({
  selectedLanguage: { code: 'en', name: 'English', flag: enFlag },
  changeLanguage: () => { },
});

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'en', name: 'English', flag: enFlag });

  const changeLanguage = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
