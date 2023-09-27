import './App.css'
import { Footer, TopBar, NavigationBar, Copyright } from './component'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <TopBar />
      <NavigationBar />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  )
}

export default App
