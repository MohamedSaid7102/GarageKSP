
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

export const TopBar = () => {
  return (
    <header className="container-fluid bg-primary text-white d-none d-lg-flex">
      <div className="container py-3">
        <div className="d-flex align-items-center">
          <a href="index.html" aria-label="Home Page">
            <h2 className="text-white fw-bold m-0">Garag KSP</h2>
          </a>
          <div className="ms-auto d-flex align-items-center">
            <small className="ms-4"><FontAwesomeIcon icon={faLocationDot} /> 123 Street, New York, USA</small>
            <small className="ms-4"><i className="fa fa-envelope me-3" aria-hidden="true"></i>info@example.com</small>
            <small className="ms-4"><FontAwesomeIcon icon={faPhoneVolume} /> +012 345 67890</small>
            <div className="ms-3 d-flex">
              <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center" href="#!" aria-label="Facebook"><i
                className="fab fa-facebook-f" aria-hidden="true"></i></a>
              <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center" href="#!" aria-label="Twitter"><i
                className="fab fa-twitter" aria-hidden="true"></i></a>
              <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center" href="#!" aria-label="LinkedIn"><i
                className="fab fa-linkedin-in" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

