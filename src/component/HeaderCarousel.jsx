import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import instance from '../../axiosConfig'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

export const HeaderCarousel = () => {

  let [data, setData] = useState([]);
  const {t} = useTranslation();

  useEffect(() => {
    // Fetch data when the component mounts
    instance.get('/users/ads')
      .then(response => {
        setData(response.data.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>

      {/* https://getbootstrap.com/docs/5.2/components/carousel/#how-it-works */}
      {/* Carousel Start */}
      <div className="container-fluid px-0" style={{ height: '100vh', overflow: 'hidden' }} dir={`${i18n.language == 'ar' ? 'rtl' : 'ltr'}`}>
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

          <div className="carousel-inner">

            {data.map((item, index) => (
              <div className={`carousel-item ${index == 0 && 'active'}`} style={{ height: '100vh' }} key={item.id} id={item.id}>
                <img className="d-block w-100" src={item.image} alt={item.title} />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-lg-7 text-start">
                        <p className="fs-4 text-white animated slideInRight" aria-label="Welcome to Garag KSP" style={{textAlign: i18n.language == 'ar'? 'right':'left'}}>{t('headerCarousel.discount')}: {item.discount}</p>
                        <h1 className="display-1 text-white mb-4 animated slideInRight" aria-label="Unlock Your Business Growth" style={{textAlign: i18n.language == 'ar'? 'right':'left'}}>{item.title}</h1>
                        <p className="fs-4 text-white animated slideInRight" aria-label="Welcome to Garag KSP" style={{textAlign: i18n.language == 'ar'? 'right':'left'}}>{item.description}</p>
                        <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight" aria-label="Explore More" style={{textAlign: i18n.language == 'ar'? 'right':'left', marginInlineEnd: '100%', whiteSpace: 'nowrap'}}>{t('exploreMore')}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <FontAwesomeIcon icon={faAnglesLeft} size="xl" style={{ color: "#ffffff", }} aria-hidden="true" />
            <span className="visually-hidden" aria-label="Previous"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <FontAwesomeIcon icon={faAnglesRight} size="xl" style={{ color: "#ffffff", }} aria-hidden="true" />
            <span className="visually-hidden" aria-label="Next"></span>
          </button>

        </div>
      </div >
      {/* Carousel End */}
    </>
  )
}
