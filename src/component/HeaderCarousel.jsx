import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import carouselImage1 from '../assets/img/carousel-1.jpg'
import carouselImage2 from '../assets/img/carousel-2.jpg'

export const HeaderCarousel = () => {
  return (
    <>

      {/* https://getbootstrap.com/docs/5.2/components/carousel/#how-it-works */}
      {/* Carousel Start */}
      <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img className="d-block w-100" src={carouselImage1} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7 text-start">
                      <p className="fs-4 text-white animated slideInRight" aria-label="Welcome to Garag KSP">Welcome to
                        <strong>Garag KSP</strong>
                      </p>
                      <h1 className="display-1 text-white mb-4 animated slideInRight" aria-label="Unlock Your Business Growth">Unlock Your Business
                        Growth</h1>
                      <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight" aria-label="Explore More">Explore
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src={carouselImage2} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-lg-7 text-end">
                      <p className="fs-4 text-white animated slideInLeft" aria-label="Welcome to Garag KSP">Welcome to <strong>Garag KSP</strong>
                      </p>
                      <h1 className="display-1 text-white mb-5 animated slideInLeft" aria-label="Ready to Grow Your Business">Ready to Grow Your
                        Business</h1>
                      <a href="" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft" aria-label="Explore More">Explore
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
      </div>
      {/* Carousel End */}
    </>
  )
}
