import './App.css'
import { Footer, TopBar } from './component'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
