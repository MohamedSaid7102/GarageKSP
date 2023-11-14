import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import instance from "../../axiosConfig";
import Carousel from "react-multi-carousel";
import { Button, Modal } from "react-bootstrap";

const FilterSection = ({ selectedFilters, setSelectedFilters }) => {
  const [data, setData] = useState([]);
  const sectionsRef = useRef(true);
  useEffect(() => {
    // Fetch data when the component mounts
    instance
      .get("/users/sections")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [sectionsRef]);

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
          className={`filter-button ${
            selectedFilters.includes(filter.id) ? "selected" : ""
          }`}
          onClick={() => handleFilterClick(filter.id)}
        >
          {filter.title}
        </button>
      ))}
    </div>
  );
};

// TeamMember component
const TeamMember = ({
  imgSrc,
  name,
  role,
  facebook,
  instagram,
  linkedin,
  whatsApp,
  youtube,
  tiktok,
  style,
}) => {
  return (
    <div
      className="col-lg-3 col-md-6 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ ...style }}
    >
      <div className="card-item-transition-effect team-item rounded overflow-hidden pb-4">
        <img
          className="img-fluid mb-4"
          src={imgSrc}
          alt={name}
          style={{ height: "15rem", objectFit: "cover" }}
        />
        <h5>{name}</h5>
        <span className="text-primary">{role}</span>
        <ul className="team-social">
          {facebook && (
            <li>
              <a className="btn btn-square" href={facebook}>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  aria-hidden="true"
                  style={{ marginRight: "10px" }}
                />
              </a>
            </li>
          )}
          {instagram && (
            <li>
              <a className="btn btn-square" href={instagram}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  aria-hidden="true"
                  style={{ marginRight: "10px" }}
                />
              </a>
            </li>
          )}
          {linkedin && (
            <li>
              <a className="btn btn-square" href={linkedin}>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  aria-hidden="true"
                  style={{ marginRight: "10px" }}
                />
              </a>
            </li>
          )}
          {whatsApp && (
            <li>
              <a className="btn btn-square" href={whatsApp}>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  aria-hidden="true"
                  style={{ marginRight: "10px" }}
                />
              </a>
            </li>
          )}
          {youtube && (
            <li>
              <a className="btn btn-square" href={youtube}>
                <FontAwesomeIcon
                  icon={faYoutube}
                  aria-hidden="true"
                  style={{ marginRight: "10px" }}
                />
              </a>
            </li>
          )}
          {tiktok && (
            <li>
              <a className="btn btn-square" href={tiktok}>
                <FontAwesomeIcon
                  icon={faTiktok}
                  aria-hidden="true"
                  style={{ marginRight: "10px" }}
                />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

// Team component
export const Team = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  /* Modal Logic Start */
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const shouldPaginate = data.length > 3;
  /* Modal Logic End */

  useEffect(() => {
    // Fetch data when the component mounts
    instance
      .get("/users/our_team")
      .then((response) => {
        setData(response.data.data);
        setFilteredData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const newData =
      selectedFilters.length == 0
        ? data
        : data.filter((item) => selectedFilters.includes(item.id));
    setFilteredData(newData);
  }, [selectedFilters]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium text-primary">Our Team</p>
          <p className="fs-1 mb-5">Our Expert People Ready to Help You</p>
          {shouldPaginate && (
            <button
              className={`btn btn-outline-info btn-sm rounded border-0 fw-light`}
              onClick={openModal}
            >
              Show More
            </button>
          )}
        </div>

        <FilterSection
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        <div className="row g-4" style={{ height: "400px" }}>
          {shouldPaginate ? (
            <Carousel
              responsive={responsive}
              infinite={true}
              showDots={true}
              autoPlaySpeed={4000}
              autoPlay={true}
              keyBoardControl={true}
              sliderClass="gap-4 p-5"
            >
              {filteredData.map((item) => (
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
                  role={item.section.title}
                  style={{ width: "100%", maxWidth: "400px" }}
                />
              ))}
            </Carousel>
          ) : (
            filteredData.map((item) => (
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
          )}
        </div>

        {/* JSX Modal Start */}
        <Modal show={showModal} onHide={closeModal} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Our Team</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: "80vh" }}>
            {
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5">
                {data.map((item) => (
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
                    style={{ width: "100%", maxWidth: "400px" }}
                  />
                ))}
              </div>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* JSX Modal End */}
      </div>
    </div>
  );
};
