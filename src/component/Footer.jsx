import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { DownloadButton } from "./common/DownloadButton";
import { Button, Modal } from "react-bootstrap";
import instance from "../../axiosConfig";
import { NavLink } from "react-router-dom";

// Footer component
export const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [termsConditions, setTermsConditions] = useState(null);
  const [settings, setSettings] = useState();
  const termsRef = useRef(true);
  useEffect(() => {
    instance
      .get("/users/terms_and_conditions")
      .then((response) => {
        setTermsConditions(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    instance
      .get("/users/settings")
      .then((res) => {
        setSettings(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching dta: ", error);
      });
  }, [termsRef]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="container-fluid  footer mt-5 py-5 wow fadeIn"
        style={{ backgroundColor: "#222" }}
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <FooterSection
              title="Our Office"
              items={[
                {
                  icon: (
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      aria-hidden="true"
                      style={{ marginRight: "10px" }}
                    />
                  ),
                  text: settings?.address,
                },
                {
                  icon: (
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      aria-hidden="true"
                      style={{ marginRight: "10px" }}
                    />
                  ),
                  text: settings?.phones.map((item, index) => (
                    <span key={index}>
                      {item}
                      <br />
                    </span>
                  )),
                },
              ]}
            />
            <FooterSection
              title="Quick Links"
              items={[
                { text: "About Us", link: "/about" },
                { text: "Contact Us", link: "/contacts" },
                { text: "Our Services", link: "/services" },
              ]}
              openModal={openModal}
            />
            <FooterNewsletter data={settings} />
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "max-content", maxHeight: "80vh" }}>
          {termsConditions && (
            <>
              <p
                style={{
                  fontWeight: "lighter",
                  fontSize: "17px",
                  textAlign: "start",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                  Employee Terms:{" "}
                </span>
                {termsConditions.employee_terms}
              </p>
              <p
                style={{
                  fontWeight: "lighter",
                  fontSize: "17px",
                  textAlign: "start",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                  Clients Terms:{" "}
                </span>
                {termsConditions.client_terms}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// FooterSection component
const FooterSection = ({ title, items, openModal }) => {
  return (
    <div className="col-lg-3 col-md-6 text-lg-start">
      <h4 className="text-white mb-4">{title}</h4>
      <ul className="list-unstyled d-flex flex-column justify-content-center">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item.icon && item.icon}
            {item.link ? (
              <NavLink
                to={item.link}
                className="btn btn-link text-decoration-none text-center text-lg-start"
              >
                {item.text}
              </NavLink>
            ) : (
              item.text
            )}
            {item.time && <h6 className="text-light">{item.time}</h6>}
          </li>
        ))}
      </ul>
      {title == "Quick Links" && (
        <a
          href={`#`}
          onClick={openModal}
          className="btn btn-link text-decoration-none text-center text-lg-start"
        >
          Terms & Conditions
        </a>
      )}
    </div>
  );
};

// FooterNewsletter component
const FooterNewsletter = ({ data }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h4 className="text-white mb-4 text-lg-start">Newsletter</h4>
      <div className="position-relative w-100">
        <input
          className="text-light form-control bg-transparent w-100 py-3 ps-4 pe-5"
          type="text"
          placeholder="Your email"
        />
        <button
          type="button"
          className="btn btn-light py-2 position-absolute top-0 end-0 mt-2 me-2"
        >
          SignUp
        </button>
      </div>
      <div className="mt-4 d-flex flex-wrap gap-3">
        {data?.facebook && (
          <a
            className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center"
            target="_blank"
            href={data.facebook}
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "#4761ff" }}
              aria-hidden="true"
            />
          </a>
        )}

        {data?.instagram && (
          <a
            className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center"
            href={data.instagram}
            target="_blank"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#4761ff" }}
              aria-hidden="true"
            />
          </a>
        )}

        {data?.twitter && (
          <a
            className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center"
            href={data.twitter}
            target="_blank"
            aria-label="Twitter"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#4761ff" }}
              aria-hidden="true"
            />
          </a>
        )}

        {data?.linkedin && (
          <a
            className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center"
            href={data.linkedin}
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#4761ff" }}
              aria-hidden="true"
            />
          </a>
        )}

        {data?.whatsapp && (
          <a
            className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center"
            href={data.whatsapp}
            target="_blank"
            aria-label="Whatsapp"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ color: "#4761ff" }}
              aria-hidden="true"
            />
          </a>
        )}

        {data?.tiktok && (
          <a
            className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center"
            href={data.tiktok}
            target="_blank"
            aria-label="TikTok"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              style={{ color: "#4761ff" }}
              aria-hidden="true"
            />
          </a>
        )}

        {data?.youtube && (
          <a
            className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center"
            href={data.youtube}
            target="_blank"
            aria-label="Youtube"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ color: "#4761ff" }}
              aria-hidden="true"
            />
          </a>
        )}

        {data?.gmail && (
          <a
            className="btn btn-sm-square btn-light text-primary rounded-circle ms-2 d-flex align-items-center justify-content-center"
            href={data.youtube}
            rel="noreferrer"
            target="_blank"
            aria-label="Youtube"
          >
            <FontAwesomeIcon
              icon={faMailBulk}
              style={{ color: "#4761ff" }}
              aria-hidden="true"
            />
          </a>
        )}
      </div>

      <DownloadButton
        store="android"
        url="https://play.google.com/store/apps/details?id=com.drcode.ksb&pli=1"
        style={{ marginTop: "1rem" }}
      />

      <DownloadButton
        store="ios"
        url="www.google.com"
        style={{ marginTop: "1rem" }}
      />
    </div>
  );
};

export default Footer;
