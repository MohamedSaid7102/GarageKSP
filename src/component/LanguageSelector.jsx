import { useState } from 'react';
import arFlag from '../assets/img/icon/ar.png';
import enFlag from '../assets/img/icon/en.png';
import frFlag from '../assets/img/icon/fr.png';

export const LanguageSelector = () => {
  const languageOptions = [
    { code: 'en', name: 'English', flag: enFlag },
    { code: 'ar', name: 'Arabic', flag: arFlag },
    { code: 'fr', name: 'French', flag: frFlag },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false); // Close the dropdown after selecting a language
  };


  return (
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown" style={{ flexGrow: 0, marginLeft: '20px' }}>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={selectedLanguage.flag} alt={`${selectedLanguage.name} flag`} style={{ maxWidth: '20px' }} />
            <span> {selectedLanguage.code}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            {
              languageOptions.map(({ code, name, flag }) => (
                <li key={code}><a class="dropdown-item" href="#" onClick={() => { setSelectedLanguage({ code, name, flag }) }}>
                  <img src={flag} alt={`${name} flag`} style={{ maxWidth: '20px' }} />
                  <span> {name}</span>
                </a></li>
              ))
            }
          </ul>
        </li>
      </ul>
    </div>
  );
};
