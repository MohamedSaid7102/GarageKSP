import React from 'react'

import { About, Features, HeaderCarousel, Projects, Quote, Services, Team, Testimonial } from '../component'

export const Home = () => {
  return (
    <>
      <HeaderCarousel />
      <Features />
      <About />
      <Services />
      <Projects />
      <Quote />
      <Team />
      <Testimonial />
    </>
  )
}
