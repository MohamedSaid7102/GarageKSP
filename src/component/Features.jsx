import { useContext, useEffect, useState } from 'react'
import { Feature } from '../component'
import { ThemeContext } from '../ThemeContext'
import instance from '../../axiosConfig'
import Carousel from 'react-multi-carousel'

export const Features = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);


  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    instance.get('/public/brands')
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
    <div className="container-xxl py-5">
      <div className="container">
        <div className={`text-center mx-auto wow fadeInUp`} data-wow-delay="0.1s" style={{ maxWidth: '500px', marginBottom: '3rem' }}>
          <p className={`fs-2 fw-medium text-primary`}>Brands</p>
        </div>

        <div className={`${darkMode && 'bg-dark'} row g-0 d-flex gap-4 justify-content-center`} style={{ height: '400px' }}>
          {
            data.length > 3 ?
              (
                <Carousel responsive={responsive} infinite={true} showDots={true} autoPlaySpeed={4000} autoPlay={true} keyBoardControl={true}>
                  {
                    data.map(item => (
                      item && <Feature
                        key={item.id}
                        icon={item.image}
                        title={item.name}
                        style={{ width: '100%', maxWidth: '350px' }}
                      />))
                  }
                </Carousel>
              )
              :
              data.map(item => (
                <Feature
                  key={item.id}
                  icon={item.image}
                  title={item.name}
                />
              ))
          }
        </div>
      </div>
    </div >
  );
}

