import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => { },
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
