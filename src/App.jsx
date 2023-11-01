import { useEffect, useState } from 'react';
import './App.css'
import { Footer, NavigationBar, Copyright, HeaderCarousel, Features, About, Services, Projects, Quote, Team, Testimonial, ProgressBar } from './component'
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isWideScreen, setIsWideScreen] = useState(screenWidth > 1400);
  const location = useLocation().pathname;

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


  if (location !== '/') return (
    <div className="content-wrapper">
      {/*< TopBar />*/}
      <NavigationBar />
      <hr />
      <Outlet />
      <Footer />
      <Copyright />
    </div>
  )

  return (
    <>

      <ProgressBar />

      {/* To top button & Whatsapp & call*/}
      <div className="to-top-btns">
        {/* Whatsapp Icons Button */}
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1219.547 1225.016" id="whatsapp">
            <path fill="#E0E0E0" d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"></path>
            <linearGradient id="a" x1="609.77" x2="609.77" y1="1190.114" y2="21.084" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#20b038"></stop>
              <stop offset="1" stop-color="#60d66a"></stop>
            </linearGradient><path fill="url(#a)" d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"></path><path fill="#FFF" fill-rule="evenodd" d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z" clip-rule="evenodd"></path><path fill="#FFF" d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"></path>
          </svg>
        </a>

        {/* Phone Icons Button */}
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64" id="phone"><defs><path id="a" d="M.06 64V.04H64V64z"></path></defs><g fill="none" fill-rule="evenodd"><g><g><mask id="b" fill="#fff"><use xlink: href="#a"></use></mask><path fill="#76ABC4" d="M64 32c0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32" mask="url(#b)"></path></g><path fill="#638DA0" d="M43.17 50a1.04 1.04 0 0 1-.336-.052c-.228-.075-.526-.155-.889-.256-4.704-1.302-19.016-5.263-25.903-26.629a1.081 1.081 0 0 1-.021-.589c.035-.14.903-3.5 6.677-4.458a1.064 1.064 0 0 1 .635.085c.211.096 5.212 2.448 5.629 7.242.029.306-.076.611-.283.836-1.639 1.776-3.064 3.96-2.988 4.582.131 1.106 3.603 6.939 9.82 9.979.927-.147 3.076-1.563 4.632-2.892a1.08 1.08 0 0 1 .7-.263c.088 0 .177.011.264.034 4.932 1.196 6.71 4.58 6.784 4.724.105.205.142.441.105.668-.831 5.224-4.231 6.825-4.375 6.891a1.087 1.087 0 0 1-.451.098"></path><path fill="#FFFFFE" d="M28.962 23.343c-.417-4.794-5.418-7.146-5.629-7.242a1.063 1.063 0 0 0-.635-.085c-5.774.958-6.642 4.318-6.677 4.458-.048.196-.04.399.021.589 6.887 21.366 21.199 25.327 25.903 26.629.363.101.661.181.889.256a1.087 1.087 0 0 0 .787-.046c.144-.066 3.544-1.667 4.375-6.891.037-.227 0-.463-.105-.668-.074-.144-1.852-3.528-6.784-4.724a1.066 1.066 0 0 0-.964.229c-1.556 1.329-3.705 2.745-4.632 2.891-6.217-3.039-9.689-8.872-9.82-9.978-.076-.622 1.349-2.806 2.988-4.582.207-.225.312-.53.283-.836"></path></g></g></svg>
        </a>

        {/* To Top Icons Button */}
        <a href="#section-1" className="progress-bar-item circle" style={{ transform: 'rotate(-90deg)', fontSize: '3rem', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', lineHeight: '20' }}>
          ➾
        </a>
      </div >

      <div id="snapping-wrapper" style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll', overflowX: 'hidden', height: '100vh', position: 'relative', scrollBehavior: 'smooth' }}>

        <div className={`snap-section`} id="section-1">
          {/*< TopBar />*/}
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
