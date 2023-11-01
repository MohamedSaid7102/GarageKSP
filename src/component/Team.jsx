import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import instance from '../../axiosConfig'


const FilterSection = ({ selectedFilters, setSelectedFilters }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    instance.get('/users/sections')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilterClick = (filterId) => {
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId));
    } else {
      setSelectedFilters([...selectedFilters, filterId]);
    }
  };

  return (
    <div className="filter-section">
      {data.map((filter) => (
        <button
          key={filter.id}
          className={`filter-button ${selectedFilters.includes(filter.id) ? 'selected' : ''}`}
          onClick={() => handleFilterClick(filter.id)}
        >
          {filter.title}
        </button>
      ))}
    </div>
  );
};

// TeamMember component
const TeamMember = ({ imgSrc, name, role, facebook, instagram, linkedin, whatsApp, youtube, tiktok }) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="card-item-transition-effect team-item rounded overflow-hidden pb-4">
        <img className="img-fluid mb-4" src={imgSrc} alt={name} />
        <h5>{name}</h5>
        <span className="text-primary">{role}</span>
        <ul className="team-social">
          {facebook && (
            <li>
              <a className="btn btn-square" href={facebook}>
                <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" style={{ marginRight: '10px' }} />
              </a>
            </li>
          )}
          {instagram && (
            <li>
              <a className="btn btn-square" href={instagram}>
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" style={{ marginRight: '10px' }} />
              </a>
            </li>
          )}
          {linkedin && (
            <li>
              <a className="btn btn-square" href={linkedin}>
                <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" style={{ marginRight: '10px' }} />
              </a>
            </li>
          )}
          {whatsApp && (
            <li>
              <a className="btn btn-square" href={whatsApp}>
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" style={{ marginRight: '10px' }} />
              </a>
            </li>
          )}
          {youtube && (
            <li>
              <a className="btn btn-square" href={youtube}>
                <FontAwesomeIcon icon={faYoutube} aria-hidden="true" style={{ marginRight: '10px' }} />
              </a>
            </li>
          )}
          {tiktok && (
            <li>
              <a className="btn btn-square" href={tiktok}>
                <FontAwesomeIcon icon={faTiktok} aria-hidden="true" style={{ marginRight: '10px' }} />
              </a>
            </li>
          )}
        </ul >
      </div >
    </div >
  );
};

// Team component
export const Team = () => {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    instance.get('/users/our_team')
      .then(response => {
        setData(response.data.data);
        setFilteredData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const newData = selectedFilters.length == 0 ? data : data.filter(item => selectedFilters.includes(item.id))
    setFilteredData(newData);
  }, [selectedFilters])

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

        <FilterSection selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />

        <div className="row g-4">
          {
            filteredData.map(item => (
              <TeamMember
                key={item.id}
                imgSrc={item.teamMemberPhoto}
                name={item.name}
                facebook={item.facebook}
                instagram={item.instagram}
                linkedin={item.linkedin}
                whatsApp={item.whatsApp}
                youtube={item.youtube}
                tiktok={item.tiktok}
                role={null}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

