import React from 'react'

import { About, Features, HeaderCarousel, Products,  Quote, Services, Team, Testimonial } from '../component'

export const Home = () => {
  return (
    <>
      <HeaderCarousel />
      <Features />
      <About />
      <Services />
      <Products />
      <Quote />
      <Team />
      <Testimonial />
    </>
  )
}
