import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../ThemeContext'
import instance from '../../axiosConfig'
import Carousel from 'react-multi-carousel'

// Service Item Component
const ServiceItem = ({ iconSrc, title, description, style }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay="0.1s" style={{ ...style }}>
      <div className={`service-item position-relative h-100`}>
        <div className={`service-text rounded p-3`} style={darkMode ? { backgroundColor: '#222' } : {}}>
          <div className={`btn-square ${darkMode ? 'bg-dark' : 'bg-light'} rounded-circle mx-auto mb-4`} style={{ width: '64px', height: '64px' }}>
            <img className={`img-fluid`} src={iconSrc} alt={`${title} Icon`} />
          </div>
          <h5 className={`mb-3`}>{title}</h5>
          <p className={`mb-0`}>{description}</p>
        </div>
        {/*<div className={`service-btn rounded-0 rounded-bottom`} style={darkMode ? { backgroundColor: '#555' } : {}}>
          <a className={` fw-medium`} href={`#${title.replace(' ', '-')}`} style={darkMode ? { color: '#eee' } : {}}>Read More<i className={`bi bi-chevron-double-right ms-2`}></i></a>
        </div>*/}
      </div>
    </div >
  )
};

// Service Component
export const Services = () => {

  let [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    instance.get('/users/services')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={`container-xxl py-5`}>
      <div className={`container`}>
        <div className={`text-center mx-auto wow fadeInUp`} data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className={`fs-5 fw-medium text-primary`}>Our Services</p>
          <h1 className={`display-5 mb-5`}>Digital Marketing Services that We Offer</h1>
        </div>
        <div className={`row g-4`} style={{ height: '400px' }}>
          {
            data.length > 3 ?
              (
                <Carousel responsive={responsive} infinite={true} showDots={true} autoPlaySpeed={4000} autoPlay={true} keyBoardControl={true} sliderClass="gap-4">
                  {
                    data.map(item => (
                      <ServiceItem
                        key={item.id}
                        iconSrc={item.servicePhoto}
                        title={item.title}
                        description={item.description}
                        style={{
                          width: '100%', maxWidth: '500px', marginRight: '1.5rem'
                        }}
                      />
                    ))

                  }
                </Carousel>
              ) :
              data.map(item => (
                <ServiceItem
                  key={item.id}
                  iconSrc={item.servicePhoto}
                  title={item.title}
                  description={item.description}
                />
              ))
          }
        </div>
      </div>
    </div>
  )
};

