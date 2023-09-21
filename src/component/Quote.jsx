import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Quote = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp d-flex flex-column justify-content-center justify-content-md-start" data-wow-delay="0.1s">
            <p className="fs-5 fw-medium text-primary text-md-start">Get A Quote</p>
            <h1 className="display-5 mb-4 text-md-start">Need Our Expert Help? We're Here!</h1>
            <p className="text-md-start">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
            <p className="mb-4 text-md-start">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>

            {/* Phone Call Button */}
            <a className="phone-call-btn d-flex align-items-center rounded overflow-hidden border border-primary text-decoration-none" href="tel:+01096787085">
              <span className="btn-lg-square bg-primary" style={{ width: '55px', height: '55px' }}>
                <FontAwesomeIcon icon={faPhoneVolume} style={{ color: '#fff' }} aria-hidden="true" />
              </span>
              <span className="fs-5 fw-medium mx-4">+012 345 6789</span>
            </a>

          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <h2 className="mb-4">Get A Free Quote</h2>
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                  <label htmlFor="mail">Your Email</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                  <label htmlFor="mobile">Your Mobile</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <select className="form-select" id="service">
                    <option selected>Digital Marketing</option>
                    <option value="Social Marketing">Social Marketing</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="E-mail Marketing">E-mail Marketing</option>
                  </select>
                  <label htmlFor="service">Choose A Service</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '130px' }}></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

