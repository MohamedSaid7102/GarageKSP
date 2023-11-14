import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../ThemeContext'
import instance from '../../axiosConfig'
import Carousel from 'react-multi-carousel'
import { Button, Modal } from 'react-bootstrap';
import { t } from 'i18next';
import i18n from '../../i18n';

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
      </div>
    </div >
  )
};

// Service Component
export const Services = () => {

  let [data, setData] = useState([]);


  /* Modal Logic Start */
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const shouldPaginate = data.length > 3;
  /* Modal Logic End */

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
    <div className={`container-xxl py-5`} dir={`${i18n.language == 'ar' ? 'rtl' : 'ltr'}`}>
      <div className={`container`}>
        <div className={`text-center mx-auto wow fadeInUp`} data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className={`fs-5 fw-medium text-primary`}>{t('services.title')}</p>
          <h1 className={`display-5 mb-5`}>{t('services.desc')}</h1>
          {shouldPaginate && <button className={`btn btn-outline-info btn-sm rounded border-0 fw-light`} onClick={openModal}>{t('showMore')}</button>}
        </div>
        <div className={`row g-4`} style={{ height: '400px' }}>
          {
            shouldPaginate ?
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

      {/* JSX Modal Start */}
      <Modal show={showModal} onHide={closeModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{t('services.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '80vh' }}>
          {
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5">
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
            </div>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            {t('close')}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* JSX Modal End */}

    </div>
  )
};

