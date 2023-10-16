import { useEffect, useState } from 'react';
import './App.css'
import { Footer, TopBar, NavigationBar, Copyright, HeaderCarousel, Features, About, Services, Projects, Quote, Team, Testimonial } from './component'
import { Outlet } from "react-router-dom";

const Section1 = () => { return <h1 style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem' }}>Section 1</h1> };
const Section2 = () => { return <h1 style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem' }}>Section 2</h1> };
const Section3 = () => { return <h1 style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem' }}>Section 3</h1> };
const Section4 = () => { return <h1 style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem' }}>Section 4</h1> };

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



      {/*
      <div className="container-fluid">
        <div className="row" style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll', height: '100vh' }}>
          <div className="col-md-12" style={{ animation: '1000ms all ease-in-out' }}>
            <TopBar />
            <NavigationBar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <ProgressIndicator />
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
      */}



      <div className="" style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll', overflowX: 'hidden', height: '100vh', position: 'relative' }}>
        <ProgressIndicator />

        <div className={`snap-section`}>
          <TopBar />
          <NavigationBar />
          <HeaderCarousel />
        </div>

        <div className={`snap-section ${isWideScreen && 'center-content'}`}>
          <Features />
        </div>

        <div className={`snap-section  ${isWideScreen && 'center-content'}`}>
          <About />
        </div>

        <div className={`snap-section  ${isWideScreen && 'center-content'}`}>
          <Services />
        </div>

        <div className={`snap-section  ${isWideScreen && 'center-content'}`}>
          <Projects />
        </div>


        <div className={`snap-section  ${isWideScreen && 'center-content'}`}>
          <Quote />
        </div>


        <div className={`snap-section  ${isWideScreen && 'center-content'}`}>
          <Team />
        </div>

        <div className={`snap-section  ${isWideScreen && 'center-content'}`}>
          <Testimonial />
        </div>

        <div className={`snap-section`} style={{ height: 'max-content' }}>
          <Footer />
          <Copyright />
        </div>

      </div >

    </>
  )
}




// TODO: Fix progress indecator
//      TODO: make topbar height 10vh and naviagtion 10vh and headercarsoul 80vh
// TODO: Fix last section remove snap
// TODO: install Todo plugin in new vim & access todos with <leader>t
//
//
const ProgressIndicator = () => {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const sectionHeight = windowHeight;
      const newCurrentSection = Math.ceil((scrollPosition + 1) / sectionHeight);

      console.log('*******************************')
      console.log(`windowHeight: ${windowHeight}`)
      console.log(`scrollPosition: ${scrollPosition}`)
      console.log(`sectionHeight: ${sectionHeight}`)
      console.log(`newCurrentSection: ${newCurrentSection}`)
      console.log('*******************************')

      if (newCurrentSection !== currentSection) {
        setCurrentSection(newCurrentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className="progress-indicator hide-on-1400px">
      <div className="progress-bar">
        <div
          className={`progress-section ${currentSection === 1 ? 'active' : ''}`}
        >
          1
        </div>
        <div
          className={`progress-section ${currentSection === 2 ? 'active' : ''}`}
        >
          2
        </div>
        <div
          className={`progress-section ${currentSection === 3 ? 'active' : ''}`}
        >
          3
        </div>
        <div
          className={`progress-section ${currentSection === 4 ? 'active' : ''}`}
        >
          4
        </div>
      </div>
    </div>
  );
};


export default App
