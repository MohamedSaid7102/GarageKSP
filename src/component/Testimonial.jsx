import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import instance from "../../axiosConfig";

// TestimonialItem component
const TestimonialItem = ({
  imageSrc,
  altText,
  content,
  clientName,
  profession,
}) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`testimonial-item rounded p-4 p-lg-5 mb-5 d-flex flex-column justify-content-center justify-content-lg-start bg-white ${
        darkMode && "bg-secondary"
      }`}
    >
      {imageSrc && (
        <img className="testemonail__image mb-4" src={imageSrc} alt={altText} />
      )}
      {content && (
        <p
          style={{ fontSize: "80%" }}
          className="mb-4 text-lg-start text-primary fw-light"
        >
          {content}
        </p>
      )}
      {clientName && <h5 className="text-lg-start text-dark">{clientName}</h5>}
      {profession && (
        <span className="text-primary text-lg-start text-purple">
          {profession}
        </span>
      )}
    </div>
  );
};

// Testimonial section component
export const Testimonial = () => {
  const [data, setData] = useState([]);
  const testimonialsRef = useRef(true);
  useEffect(() => {
    // Fetch data when the component mounts
    instance
      .get("/users/testimonials")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [testimonialsRef]);

  return (
    <div className="container lg-p-4 d-flex justify-content-around align-items-center flex-column flex-lg-row">
      {/* Testimonial Header */}
      <div
        className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "500px" }}
      >
        <p className="fs-5 fw-medium text-primary">Testimonial</p>
        <h1 className="display-5 mb-5">What Clients Say About Our Services!</h1>
      </div>

      {/* Testimonial Cards */}
      <div
        className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialItem
                imageSrc={item.image}
                altText={`${item.user_id.name} photo`}
                content={item.content}
                clientName={item.user_id.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
