import './App.css'
import { Footer, TopBar, NavigationBar, Copyright } from './component'
import { Outlet } from "react-router-dom";

function App() {
  console.log(import.meta.env.VITE_API_URL)
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
