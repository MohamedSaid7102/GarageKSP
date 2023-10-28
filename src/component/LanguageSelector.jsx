import { useContext, useState } from 'react';
import arFlag from '../assets/img/icon/ar.png';
import enFlag from '../assets/img/icon/en.png';
import frFlag from '../assets/img/icon/fr.png';
import { ThemeContext } from '../ThemeContext';

export const LanguageSelector = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

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
    <div className="collapse navbar-collapse shadow-lg" id="navbarNavDarkDropdown" style={{ flexGrow: 0, marginLeft: '20px' }}>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className={`btn ${darkMode ? 'btn-dark' : ''} dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
            < img src={selectedLanguage.flag} alt={`${selectedLanguage.name} flag`} style={{ maxWidth: '20px' }} />
            <span> {selectedLanguage.code}</span>
          </button>
          <ul className={`dropdown-menu ${darkMode ? 'dropdown-menu-dark' : 'dropdown-menu'}`}>
            {
              languageOptions.map(({ code, name, flag }) => (
                <li key={code}><a className="dropdown-item" href="#" onClick={() => { setSelectedLanguage({ code, name, flag }) }}>
                  <img src={flag} alt={`${name} flag`} style={{ maxWidth: '20px' }} />
                  <span> {name}</span>
                </a></li>
              ))
            }
          </ul>
        </li>
      </ul >
    </div >
  );
};
