import teamMember1Image from '../assets/img/team-1.jpg'
import teamMember2Image from '../assets/img/team-2.jpg'
import teamMember3Image from '../assets/img/team-3.jpg'
import teamMember4Image from '../assets/img/team-4.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'


// TeamMember component
const TeamMember = ({ imgSrc, name, role }) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="card-item-transition-effect team-item rounded overflow-hidden pb-4">
        <img className="img-fluid mb-4" src={imgSrc} alt={name} />
        <h5>{name}</h5>
        <span className="text-primary">{role}</span>
        <ul className="team-social">
          <li><a className="btn btn-square" href=""><FontAwesomeIcon icon={faFacebookF} aria-hidden="true" style={{ marginRight: '10px' }} /></a></li>
          <li><a className="btn btn-square" href=""><FontAwesomeIcon icon={faTwitter} aria-hidden="true" style={{ marginRight: '10px' }} /></a></li>
          <li><a className="btn btn-square" href=""><FontAwesomeIcon icon={faInstagram} aria-hidden="true" style={{ marginRight: '10px' }} /></a></li>
          <li><a className="btn btn-square" href=""><FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" style={{ marginRight: '10px' }} /></a></li>
        </ul>
      </div>
    </div>
  );
};

// Team component
export const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-medium text-primary">Our Team</p>
          <p className="fs-1 mb-5">Our Expert People Ready to Help You</p>
        </div>
        {/*
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <h2 className="fs-1 fw-medium text-primary">Our Team</h2>
          <p className="fs-4 mb-5 text-nowrap">Our Expert People Ready to Help You</p>
        </div>
          */}
        <div className="row g-4">
          <TeamMember imgSrc={teamMember1Image} name="Alex Robin" role="Founder & CEO" />
          <TeamMember imgSrc={teamMember2Image} name="Adam Crew" role="Co Founder" />
          <TeamMember imgSrc={teamMember3Image} name="Boris Johnson" role="Executive Manager" />
          <TeamMember imgSrc={teamMember4Image} name="Robert Jordan" role="Digital Marketer" />
        </div>
      </div>
    </div>
  );
};

