import './App.css'
import { Footer, TopBar, NavigationBar } from './component'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <TopBar />
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
