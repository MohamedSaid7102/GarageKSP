import { useContext, useState } from 'react';
import arFlag from '../assets/img/icon/ar.png';
import enFlag from '../assets/img/icon/en.png';
import frFlag from '../assets/img/icon/fr.png';
import { ThemeContext } from '../ThemeContext';
import { LanguageContext } from '../LanguageContext';

export const LanguageSelector = () => {
  const languageOptions = [
    { code: 'en', name: 'English', flag: enFlag },
    { code: 'ar', name: 'Arabic', flag: arFlag },
    { code: 'fr', name: 'French', flag: frFlag },
  ];

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { selectedLanguage, changeLanguage } = useContext(LanguageContext);
  const [showDropdown, setShowDropdown] = useState(false);


  const handleLanguageChange = (language) => {
    setShowDropdown(false); // Close the dropdown after selecting a language
    changeLanguage(language)
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
              languageOptions.map((item) => (
                <li key={item.code}><a className="dropdown-item" href="#" onClick={() => { handleLanguageChange(item) }}>
                  <img src={item.flag} alt={`${item.name} flag`} style={{ maxWidth: '20px' }} />
                  <span> {item.name}</span>
                </a></li>
              ))
            }
          </ul>
        </li>
      </ul >
    </div >
  );
};
