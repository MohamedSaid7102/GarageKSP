import teamMember1Image from '../assets/img/team-1.jpg'
import teamMember2Image from '../assets/img/team-2.jpg'
import teamMember3Image from '../assets/img/team-3.jpg'
import teamMember4Image from '../assets/img/team-4.jpg'

// TeamMember component
const TeamMember = ({ imgSrc, name, role }) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item rounded overflow-hidden pb-4">
        <img className="img-fluid mb-4" src={imgSrc} alt={name} />
        <h5>{name}</h5>
        <span className="text-primary">{role}</span>
        <ul className="team-social">
          <li><a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a></li>
          <li><a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a></li>
          <li><a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a></li>
          <li><a className="btn btn-square" href=""><i className="fab fa-linkedin-in"></i></a></li>
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
          <h1 className="display-5 mb-5">Our Expert People Ready to Help You</h1>
        </div>
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

