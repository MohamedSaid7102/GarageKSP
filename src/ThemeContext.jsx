import { createContext, useState } from 'react';

// Create a context with default values
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => { },
});

// Create a custom provider component for the context
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
