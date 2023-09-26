import React from 'react'

import { About, Features, Footer, HeaderCarousel, NavigationBar, Projects, Quote, Services, Spinner, Team, Testimonial, TopBar } from '../component'

export const Home = () => {
  return (
    <>
      <TopBar />
      <NavigationBar />
      <HeaderCarousel />
      <Features />
      <About />
      <Services />
      <Projects />
      <Quote />
      <Team />
      <Testimonial />
      <Footer />

    </>
  )
}
