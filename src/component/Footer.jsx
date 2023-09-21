import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Footer component
export const Footer = () => {
  return (
    <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <FooterSection
            title="Our Office"
            items={[
              { icon: <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" style={{ marginRight: '10px' }} />, text: '123 Street, New York, USA' },
              { icon: <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" style={{ marginRight: '10px' }} />, text: '+012 345 67890' },
              { icon: <FontAwesomeIcon icon={faPhoneVolume} aria-hidden="true" style={{ marginRight: '10px' }} />, text: 'info@example.com' },
            ]}
          />
          <FooterSection
            title="Quick Links"
            items={[
              { text: 'About Us', link: '/about' },
              { text: 'Contact Us', link: '/contact' },
              { text: 'Our Services', link: '/services' },
              { text: 'Terms & Condition', link: '/terms' },
              { text: 'Support', link: '/support' },
            ]}
          />
          <FooterSection
            title="Business Hours"
            items={[
              { text: 'Monday - Friday', time: '09:00 am - 07:00 pm' },
              { text: 'Saturday', time: '09:00 am - 12:00 pm' },
              { text: 'Sunday', time: 'Closed' },
            ]}
          />
          <FooterNewsletter />
        </div>
      </div>
    </div>
  );
};

// FooterSection component
const FooterSection = ({ title, items }) => {
  return (
    <div className="col-lg-3 col-md-6 text-lg-start">
      <h4 className="text-white mb-4">{title}</h4>
      <ul className="list-unstyled d-flex flex-column justify-content-center">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item.icon && item.icon}
            {item.link ? (
              <a href={item.link} className="btn btn-link text-decoration-none text-center text-lg-start">
                {item.text}
              </a>
            ) : (
              item.text
            )}
            {item.time && <h6 className="text-light">{item.time}</h6>}
          </li>
        ))}
      </ul>
    </div>
  );
};

// FooterNewsletter component
const FooterNewsletter = () => {
  return (
    <div className="col-lg-3 col-md-6">
      <h4 className="text-white mb-4 text-lg-start">Newsletter</h4>
      <p className="text-lg-start">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
      <div className="position-relative w-100">
        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
        <button type="button" className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
      </div>
    </div>
  );
};

export default Footer;
