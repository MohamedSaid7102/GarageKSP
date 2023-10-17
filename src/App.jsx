import { useEffect, useState } from 'react';
import './App.css'
import { Footer, TopBar, NavigationBar, Copyright, HeaderCarousel, Features, About, Services, Projects, Quote, Team, Testimonial, ProgressBar } from './component'
import { Outlet } from "react-router-dom";
import { InView, useInView } from 'react-intersection-observer';

// TODO: make a plugin for todo <leader>t
// TODO: implement redux toolkit
// TODO: make the language selector dark and light according to global ligth or dark variable from redux
//
//
//


function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isWideScreen, setIsWideScreen] = useState(screenWidth > 1400);

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    setScreenWidth(newWidth);
    setIsWideScreen(newWidth > 1400);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);


  return (
    <>

      {/*
      <TopBar />
      <NavigationBar />
      <Outlet />
      <Footer />
      <Copyright />
      */}



      <ProgressBar />

      <div id="snapping-wrapper" style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll', overflowX: 'hidden', height: '100vh', position: 'relative', scrollBehavior: 'smooth' }}>

        <div className={`snap-section`} id="section-1">
          <TopBar />
          <NavigationBar />
          <HeaderCarousel />
        </div>

        <div className={`snap-section ${isWideScreen && 'center-content'}`} id="section-2" >
          <Features />
        </div>

        <div className={`snap-section  ${isWideScreen && 'center-content'}`} id="section-3">
          <About />
        </div>

        <div className={`snap-section  ${isWideScreen && 'center-content'}`} id="section-4">
          <Services />
        </div>

        <div className={`snap-section  ${isWideScreen && 'center-content'}`} id="section-5">
          <Projects />
        </div>


        <div className={`snap-section  ${isWideScreen && 'center-content'}`} id="section-6">
          <Quote />
        </div>


        <div className={`snap-section  ${isWideScreen && 'center-content'}`} id="section-7">
          <Team />
        </div>

        <div className={`snap-section  ${isWideScreen && 'center-content'}`} id="section-8">
          <Testimonial />
        </div>

        <div className={`snap-section`} style={{ height: 'max-content' }}>
          <Footer />
          <Copyright />
        </div>


      </div>

    </>
  )
}

export default App
