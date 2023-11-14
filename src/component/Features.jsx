import { useContext, useEffect, useState } from 'react'
import { Feature } from '../component'
import { ThemeContext } from '../ThemeContext'
import instance from '../../axiosConfig'
import Carousel from 'react-multi-carousel'
import { Button, Modal } from 'react-bootstrap'
import { t } from 'i18next'
import i18n from '../../i18n'

export const Features = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [data, setData] = useState([]);

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
    instance.get('/public/brands')
      .then(response => {
        setData(response.data.data);
        // For testing the pagination
        // setData(Array(5).fill(response.data.data[0]));
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
    <div className="container-xxl py-5"  dir={`${i18n.language == 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className={`text-center mx-auto wow fadeInUp d-flex ${shouldPaginate ? 'justify-content-between' : 'justify-content-center'}`} data-wow-delay="0.1s" style={{ marginBottom: '3rem' }}>
          <p className={`fs-2 fw-medium text-primary`}>{t('brands.title')}</p>
          {shouldPaginate && <button className={`btn btn-outline-info btn-sm rounded border-0 fw-light`} onClick={openModal}>{t('showMore')}</button>}
        </div>

        <div className={`${darkMode && 'bg-dark'} row g-0 d-flex gap-4 justify-content-center`} style={{ height: '400px' }}>
          {
            shouldPaginate ?
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

        {/* JSX Modal Start */}
        <Modal show={showModal} onHide={closeModal} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{t('brands.title')}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: '80vh' }}>
            {data && (
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5">
                {
                  data.map(item => (
                    <Feature
                      key={item.id}
                      icon={item.image}
                      title={item.name}
                      style={{ width: '100%', maxWidth: '350px' }}
                    />
                  ))
                }
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              {t('close')}
            </Button>
          </Modal.Footer>
        </Modal>
        {/* JSX Modal End */}

      </div>
    </div >
  );
}

