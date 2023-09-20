import icon5 from '../assets/img/icon/icon-5.png'
import icon6 from '../assets/img/icon/icon-6.png'
import icon7 from '../assets/img/icon/icon-7.png'
import icon8 from '../assets/img/icon/icon-8.png'
import icon9 from '../assets/img/icon/icon-9.png'
import icon10 from '../assets/img/icon/icon-10.png'

// Service Item Component
const ServiceItem = ({ iconSrc, title, description }) => (
  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div className="service-item position-relative h-100">
      <div className="service-text rounded p-5">
        <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: '64px', height: '64px' }}>
          <img className="img-fluid" src={iconSrc} alt={`${title} Icon`} />
        </div>
        <h5 className="mb-3">{title}</h5>
        <p className="mb-0">{description}</p>
      </div>
      <div className="service-btn rounded-0 rounded-bottom">
        <a className="text-primary fw-medium" href={`#${title.replace(' ', '-')}`}>Read More<i className="bi bi-chevron-double-right ms-2"></i></a>
      </div>
    </div>
  </div>
);

// Service Component
export const Services = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
        <p className="fs-5 fw-medium text-primary">Our Services</p>
        <h1 className="display-5 mb-5">Digital Marketing Services that We Offer</h1>
      </div>
      <div className="row g-4">
        <ServiceItem
          iconSrc={icon5}
          title="Digital Marketing"
          description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet"
        />
        <ServiceItem
          iconSrc={icon6}
          title="Internet Marketing"
          description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet"
        />
        <ServiceItem
          iconSrc={icon7}
          title="Content Marketing"
          description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet"
        />
        <ServiceItem
          iconSrc={icon8}
          title="Social Marketing"
          description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet"
        />
        <ServiceItem
          iconSrc={icon9}
          title="B2B Marketing"
          description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet"
        />
        <ServiceItem
          iconSrc={icon10}
          title="E-mail Marketing"
          description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet"
        />
      </div>
    </div>
  </div>
);

