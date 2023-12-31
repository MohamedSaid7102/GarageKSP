import { Button, Modal } from 'react-bootstrap';
import project1Image from '../assets/img/project-1.jpg'
import project2Image from '../assets/img/project-2.jpg'
import project3Image from '../assets/img/project-3.jpg'
import project4Image from '../assets/img/project-4.jpg'
import Carousel from 'react-multi-carousel';
import { useEffect, useState } from 'react';
import instance from '../../axiosConfig';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


// TODO: Problem in showing off projects in carsoule

const ProductItem = ({ quantity, sellingPrice, imgSrc, title, description, openModal, style }) => {
  const {t} = useTranslation();

  return (
    <div className="project-item card-item-transition-effect m-1 m-sm-3 border" style={{ ...style }} dir={`${i18n.language == 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="position-relative">
        <div className="project-item__img">
          <img className="img-fluid" src={imgSrc} alt={title} />
        </div>
        <div className="project-overlay">
          <a className="btn btn-lg-square btn-light rounded-circle m-1" href={'#'} data-lightbox="project" onClick={openModal}>
            <i className="fa fa-eye" aria-hidden="true"></i>
          </a>
          <a className="btn btn-lg-square btn-light rounded-circle m-1" href="#">
            <i className="fa fa-link" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="p-4">
        <a className="d-block h5 text-sm-start" href="#" style={{ textDecoration: 'none', fontSize: '25px', marginBottom: '1rem' }}>
          {title}
        </a>
        {description && <span className="d-block text-sm-start mb-3">{description}</span>}
        {quantity && <span className="d-block text-sm-start mb-3" style={{ fontSize: '20px', fontWeight: 'lighter' }}><span style={{ fontSize: '25px', fontWeight: 'normal' }}>{t('ourProducts.quantity')}: </span>{quantity}</span>}
        {sellingPrice && <span className="d-block text-sm-start mb-3" style={{ fontSize: '20px', fontWeight: 'lighter' }}><span style={{ fontSize: '25px', fontWeight: 'normal' }}>{t('ourProducts.sellingPrice')}: </span>{sellingPrice}</span>}
      </div>
    </div>
  );
}

const ProductWrapper = ({ showProjectsModal, openProjectsModal, closeProjectsModal, shouldPaginate, setShouldPaginate }) => {
  const {t} = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectData, setSelectedProjectData] = useState(null);

  useEffect(() => {
    instance.get('/mobile/client/products')
      .then(response => {
        setProjects(response.data.data);
        // setProjects(Array(5).fill(response.data.data[0]));
        if (response.data.data.length > 1) setShouldPaginate(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedProject !== null) {
      instance.get(`/mobile/client/products/${selectedProject}`)
        .then(response => {
          setSelectedProjectData(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [selectedProject]);


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


  const openModal = (projectId) => {
    setSelectedProject(projectId);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="projects-wrapper">
        <div style={{ width: '100%', height: '550px' }}>
          {
            shouldPaginate ?
              <Carousel responsive={responsive} infinite={true} showDots={true} autoPlaySpeed={4000} autoPlay={true} keyBoardControl={true} sliderClass="gap-4" className='p-3'>
                {
                  projects.map(item => (
                    <ProductItem
                      key={item.id}
                      imgSrc={item.images[0].url}
                      title={item.name}
                      quantity={item.quantity}
                      sellingPrice={item.selling_price}
                      openModal={() => openModal(item.id)}
                      style={{
                        width: '100%', maxWidth: '500px', marginRight: '1.5rem'
                      }}
                    />
                  ))
                }
              </Carousel>
              :
              projects.map(item => (
                <ProductItem
                  key={item.id}
                  imgSrc={item.images[0].url}
                  title={item.name}
                  quantity={item.quantity}
                  sellingPrice={item.selling_price}
                  openModal={() => openModal(item.id)}
                  style={{
                    width: '100%', maxWidth: '500px', marginRight: '1.5rem'
                  }}
                />
              ))
          }
        </div>
      </div>


      {/* Projects List view Modal Start */}
      <Modal show={showProjectsModal} onHide={closeProjectsModal} size="xl">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{ height: '80vh' }}>
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5">
            {
              projects.map(item => (
                <ProductItem
                  key={item.id}
                  imgSrc={item.images[0].url}
                  title={item.name}
                  quantity={item.quantity}
                  sellingPrice={item.selling_price}
                  openModal={() => openModal(item.id)}
                />
              ))
            }
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeProjectsModal}>
            {t('close')}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Projects List view Modal End */}

      {/* Single project view Modal Start */}
      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProjectData?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '80vh' }}>
          {selectedProjectData && (
            <>
              <img src={selectedProjectData.images[0].url} alt={selectedProjectData.title} style={{ width: '100%', height: '70%', objectFit: 'cover' }} />
              <h1>{selectedProjectData.name}</h1>
              <span className="d-block text-center mb-3" style={{ fontSize: '15px', fontWeight: 'lighter' }}><span style={{ fontSize: '20px', fontWeight: 'normal' }}>{t('ourProducts.quantity')}: </span>{selectedProjectData.quantity}</span>
              <span className="d-block text-center mb-3" style={{ fontSize: '15px', fontWeight: 'lighter' }}><span style={{ fontSize: '20px', fontWeight: 'normal' }}>{t('ourProducts.sellingPrice')}: </span>{selectedProjectData.selling_price}</span>
              <p>{selectedProjectData.description}</p>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            {t('close')}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Single project view Modal End */}

    </>
  );
}

export const Products = () => {
  const {t} = useTranslation();
  /* Modal Logic Start */
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  const openProjectsModal = () => {
    setShowProjectsModal(true);
  };

  const closeProjectsModal = () => {
    setShowProjectsModal(false);
  };

  const [shouldPaginate, setShouldPaginate] = useState(false);
  /* Modal Logic End */

  return (
    <div className="container-xxl  p-0" style={{ marginTop: '5rem' }}>
      <div className="container">
        <div className=" pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px', marginInlineStart: i18next.language == 'ar' && 'auto', textAlign: i18next.language == 'ar' ? 'right' : 'left' }}>
          <p className="fs-5 fw-medium text-primary">{t('ourProducts.title')}</p>
          <h1 className="display-6 mb-5">{t('ourProducts.desc')}</h1>
          {/*shouldPaginate && <button className={`btn btn-outline-info btn-sm rounded border-0 mb-3 fw-light`} onClick={openProjectsModal}>Show More</button>*/}
          <button className={`btn btn-outline-info btn-sm rounded border-0 mb-3 fw-light`} onClick={openProjectsModal}>{t('showMore')}</button>
        </div>
        <ProductWrapper
          showProjectsModal={showProjectsModal}
          openProjectsModal={openProjectsModal}
          closeProjectsModal={closeProjectsModal}
          shouldPaginate={shouldPaginate}
          setShouldPaginate={setShouldPaginate} />
      </div>
    </div>
  );
}
