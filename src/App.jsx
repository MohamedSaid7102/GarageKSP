import './App.css'
import { Footer, TopBar, NavigationBar } from './component'
import { Outlet } from "react-router-dom";
import { ThemeContext } from './ThemeContext'; // Import your ThemeContext
import { useContext } from 'react';

function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <TopBar />
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
