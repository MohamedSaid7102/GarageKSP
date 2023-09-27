import project1Image from '../assets/img/project-1.jpg'
import project2Image from '../assets/img/project-2.jpg'
import project3Image from '../assets/img/project-3.jpg'
import project4Image from '../assets/img/project-4.jpg'

const ProjectItem = ({ imgSrc, title, description }) => {
  return (
    <div className="project-item m-1 mb-3 m-sm-3 border">
      <div className="position-relative">
        <div className="project-item__img">
          <img className="img-fluid" src={imgSrc} alt={title} />
        </div>
        <div className="project-overlay">
          <a className="btn btn-lg-square btn-light rounded-circle m-1" href={imgSrc} data-lightbox="project">
            <i className="fa fa-eye" aria-hidden="true"></i>
          </a>
          <a className="btn btn-lg-square btn-light rounded-circle m-1" href="#">
            <i className="fa fa-link" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="p-4">
        <a className="d-block h5 text-sm-start" href="#">
          {title}
        </a>
        <span className="d-block text-sm-start mb-3">{description}</span>
      </div>
    </div>
  );
}

const ProjectWrapper = () => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-md-start justify-content-center" >
      <ProjectItem
        imgSrc={project1Image}
        title="Data Analytics & Insights"
        description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem"
      />
      <ProjectItem
        imgSrc={project2Image}
        title="Marketing Content Strategy"
        description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem"
      />
      <ProjectItem
        imgSrc={project3Image}
        title="Business Target Market"
        description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem"
      />
      <ProjectItem
        imgSrc={project4Image}
        title="Social Marketing Strategy"
        description="Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem"
      />
    </div>
  );
}

export const Projects = () => {
  return (
    <div className="container-xxl pt-5">
      <div className="container">
        <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-medium text-primary">Our Projects</p>
          <h1 className="display-5 mb-5">We've Done Lot's of Awesome Projects</h1>
        </div>
        <ProjectWrapper />
      </div>
    </div>
  );
}
