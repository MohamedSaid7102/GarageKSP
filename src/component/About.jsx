import icon5 from '../assets/img/icon/icon-5.png'
import icon6 from '../assets/img/icon/icon-6.png'

export const About = () => {
  return (
    <>
      <div className="container-xxl about my-5">
        <div className="container">
          <div className="row g-0">

            <div className="col-lg-6">
              <div className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/vKa6-4oQz9A" data-bs-target="#videoModal">
                  <span></span>
                </button>
              </div>
            </div>

            <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white rounded-top p-5 mt-lg-5">
                <p className="fs-5 fw-medium text-primary">About Us</p>
                <h1 className="display-6 mb-4 text-lg-start">The Best Marketing Agency to Improve Your Business</h1>
                <p className="mb-4 text-lg-start">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                <div className="row g-5 pt-2 mb-5">

                  <div className="col-sm-6 d-flex flex-column align-items-center align-items-lg-start">
                    <img className="img-fluid mb-4" src={icon5} alt="Managed Services Icon" />
                    <h5 className="mb-3 text-lg-start">Managed Services</h5>
                    <span className="text-lg-start d-block">Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>

                  <div className="col-sm-6 d-flex flex-column align-items-center align-items-lg-start">
                    <img className="img-fluid mb-4" src={icon6} alt="Dedicated Experts Icon" />
                    <h5 className="mb-3 text-lg-start">Dedicated Experts</h5>
                    <span className="text-lg-start d-block">Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>

                </div>

                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Explore More</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Start */}
      <div className="modal modal-video fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" id="video" allowFullScreen
                  allowScriptAccess="always" width="1550" height="696" src="https://www.youtube.com/embed/vKa6-4oQz9A" title="ويوم يحشر أعداء الله إلى النار فهم يوزعون _ تلاوة بأداء وهدوء وترنم _ عبدالله الجهني" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}
    </>
  );
};
