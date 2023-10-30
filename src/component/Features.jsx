import { useContext, useEffect, useState } from 'react'
import { Feature } from '../component'
import { ThemeContext } from '../ThemeContext'
import instance from '../../axiosConfig'

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

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className={`text-center mx-auto wow fadeInUp`} data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className={`fs-2 fw-medium text-primary`}>Brands</p>
        </div>

        <div className={`${darkMode && 'bg-dark'} row g-0 d-flex gap-4 justify-content-center`}>
          {
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

