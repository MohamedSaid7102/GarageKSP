import { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import instance from "../../axiosConfig";
import { getFirstWords } from "../../utils";
import { ThemeContext } from "../ThemeContext";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from "react-router-dom";

export const Jobs = () => {

  const [jobs, setJobs] = useState();
  const [showJobModal, setShowJobModal] = useState(false);
  const [showJobListModal, setShowJobListModal] = useState(false);
  const [presentedJob, setPresentedJob] = useState(null);
  const [presentedJobId, setPresentedJobId] = useState(null);

  const shouldPaginate = jobs?.length > 3;

  useEffect(() => {
    instance.get('/users/job_announcements?handle=')
      .then(response => {
        setJobs(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    instance.get(`/users/job_announcements/${presentedJobId}`)
      .then(response => {
        setPresentedJob(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [presentedJobId])

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

  const openJobListModal = () => {
    setShowJobListModal(true);
  }

  const closeJobListModal = () => {
    setShowJobListModal(false);
  }

  const openJobModal = (jobId) => {
    setPresentedJobId(jobId) /* This will trigger useEffect to fetch and setPresentedJob to the job with this jobId */
    setShowJobModal(true); /* After this show the modal */
  }

  const closeJobModal = () => {
    setShowJobModal(false);
  }

  return (
    <Container>
      <div className={`text-center mx-auto wow fadeInUp d-flex ${shouldPaginate ? 'justify-content-between' : 'justify-content-center'}`} data-wow-delay="0.1s" style={{ marginBottom: '3rem' }}>
        <p className={`fs-2 fw-medium text-primary`}>Jobs</p>
        {shouldPaginate && <button className={`btn btn-outline-info btn-sm rounded border-0 fw-light`} onClick={openJobListModal}>Show More</button>}
      </div>

      <div className="d-flex" style={{ gap: '10px' }}>
        {shouldPaginate ? (
          <Carousel responsive={responsive} infinite={true} showDots={true} autoPlaySpeed={4000} autoPlay={true} keyBoardControl={true} className="pb-5 w-100">
            {jobs?.map(item => (
              <JobPost
                key={item.id}
                name={item.name}
                status={item.status}
                startAt={item.starts_at}
                endAt={item.ends_at}
                experience={item.experience_years}
                requirements={item.requirements}
                openJobModal={() => openJobModal(item.id)}
              />
            ))}
          </Carousel>
        ) :
          jobs?.map(item => (
            <JobPost
              key={item.id}
              name={item.name}
              status={item.status}
              startAt={item.starts_at}
              endAt={item.ends_at}
              experience={item.experience_years}
              requirements={item.requirements}
              openJobModal={() => openJobModal(item.id)}
            />
          ))
        }
      </div>

      {/* Single Job Modal, This will be show if the user click on More button */}
      <Modal show={showJobModal} onHide={closeJobModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Job Description</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: 'max-content' }}>
          {presentedJob && (
            <>
              <span style={{ position: 'absolute', top: '5px', right: '5px', width: '10px', height: '10px', opacity: '0.5', borderRadius: '100%', boxShadow: '0 0 10px #555', backgroundColor: presentedJob.status ? 'lightgreen' : 'red' }}></span>
              <h3>{presentedJob.name}</h3>
              <p>Experience: {presentedJob.experience_years}</p>
              <p>{presentedJob.requirements}</p>
              <button disabled={!presentedJob.status} className={`btn ${presentedJob.status ? 'btn-outline-info' : 'btn-outline-danger'} btn-block`} onClick={() => { }}>
                <NavLink to={`sendcv/${presentedJob.id}`} style={{ textDecoration: 'none', color: !presentedJob.status && 'red' }}>{presentedJob.status ? 'Apply' : 'This Job is Not Available'}</NavLink>
              </button>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeJobModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Job List Modal, This will be show if the user click on show more */}
      <Modal show={showJobListModal} onHide={closeJobListModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Job List</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center flex-wrap" style={{ height: 'max-content', gap: '20px' }}>
          {jobs?.map(item => (
            <JobPost
              key={item.id}
              name={item.name}
              status={item.status}
              startAt={item.starts_at}
              endAt={item.ends_at}
              experience={item.experience_years}
              requirements={item.requirements}
              openJobModal={() => openJobModal(item.id)}
            />
          ))
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeJobListModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </Container >
  );
};


const JobPost = ({ name, status, startAt, endAt, experience, requirements, openJobModal }) => {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={`position-relative ${darkMode ? 'bg-dark' : 'bg-light'} border rounded p-4 d-flex flex-column`} style={{ maxWidth: '300px' }}>
      <span style={{ position: 'absolute', top: '5px', right: '5px', width: '10px', height: '10px', opacity: '0.5', borderRadius: '100%', boxShadow: '0 0 10px #555', backgroundColor: status ? 'lightgreen' : 'red' }}></span>
      <h3>{name}</h3>
      <p>Experience: {experience}</p>
      <p style={{ flexGrow: 1 }}>{getFirstWords(requirements)}</p>
      <button className="btn btn-outline-info btn-block" onClick={openJobModal}>More</button>
    </div >
  )
}
