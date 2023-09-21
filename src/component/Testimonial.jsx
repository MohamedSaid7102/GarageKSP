import testimonialPersonImage1 from '../assets/img/testimonial-1.jpg'
import testimonialPersonImage2 from '../assets/img/testimonial-2.jpg'
import testimonialPersonImage3 from '../assets/img/testimonial-3.jpg'
import testimonialPersonImage4 from '../assets/img/testimonial-4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// TestimonialItem component
const TestimonialItem = ({ imageSrc, altText, content, clientName, profession }) => (
  <div className="testimonial-item rounded p-4 p-lg-5 mb-5 d-flex flex-column justify-content-center justify-content-lg-start bg-white">
    <img className="mb-4" src={imageSrc} alt={altText} />
    <p className="mb-4 text-lg-start text-primary fw-light">{content}</p>
    <h5 className="text-lg-start text-dark">{clientName}</h5>
    <span className="text-primary text-lg-start text-purple">{profession}</span>
  </div>
);

// Testimonial section component
export const Testimonial = () => (
  <div className="container lg-p-4 d-flex justify-content-around align-items-center flex-column flex-lg-row">
    {/* Testimonial Header */}
    <div
      className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ maxWidth: '500px' }}
    >
      <p className="fs-5 fw-medium text-primary">Testimonial</p>
      <h1 className="display-5 mb-5">What Clients Say About Our Services!</h1>
    </div>

    {/* Testimonial Cards */}
    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialItem
            imageSrc={testimonialPersonImage1}
            altText="Client 1"
            content="Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"
            clientName="Client Name"
            profession="Profession"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem
            imageSrc={testimonialPersonImage2}
            altText="Client 2"
            content="Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"
            clientName="Client Name"
            profession="Profession"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem
            imageSrc={testimonialPersonImage3}
            altText="Client 3"
            content="Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"
            clientName="Client Name"
            profession="Profession"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem
            imageSrc={testimonialPersonImage4}
            altText="Client 4"
            content="Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo"
            clientName="Client Name"
            profession="Profession"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
);
