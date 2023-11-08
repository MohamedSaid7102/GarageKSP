import React, { useState, useEffect } from 'react';
import { Modal, Button, Card, Container } from 'react-bootstrap';
import instance from '../../axiosConfig';
import { getFirstWords } from '../../utils';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedBlogData, setSelectedBlogData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBloglistModal, setShowBloglistModal] = useState(false);

  useEffect(() => {
    instance.get('/users/blogs')
      .then(response => {
        setBlogs(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const shouldPaginate = blogs.length > 3;

  useEffect(() => {
    if (selectedBlog !== null) {
      instance.get(`/users/blogs/${selectedBlog}`)
        .then(response => {
          setSelectedBlogData(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [selectedBlog]);

  const openModal = (blogId) => {
    setSelectedBlog(blogId);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setShowModal(false);
  };

  const openBlogListModal = () => {
    setShowBloglistModal(true);
  };

  const closeBlogListModal = () => {
    setShowBloglistModal(false);
  };


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
    <Container>
      <div className={`text-center mx-auto wow fadeInUp d-flex ${shouldPaginate ? 'justify-content-between' : 'justify-content-center'}`} data-wow-delay="0.1s" style={{ marginBottom: '3rem' }}>
        <p className={`fs-2 fw-medium text-primary`}>Blogs</p>
        {shouldPaginate && <button className={`btn btn-outline-info btn-sm rounded border-0 fw-light`} onClick={openBlogListModal}>Show More</button>}
      </div>


      <Carousel responsive={responsive} infinite={true} showDots={true} autoPlaySpeed={4000} autoPlay={true} keyBoardControl={true} className="pb-5">
        {blogs.reverse().map(blog => (
          <Card key={blog.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={blog.blogImage} style={{ height: '15rem', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{getFirstWords(blog.description, 9)}</Card.Text>
              <Button variant="primary" onClick={() => openModal(blog.id)} style={{ width: '100%' }}>Read More</Button>
            </Card.Body>
          </Card>
        ))}
      </Carousel>

      {/* Single Blog Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Blog Content</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '80vh' }}>
          {selectedBlogData && (
            <>
              <img src={selectedBlogData.blogImage} alt={selectedBlogData.title} style={{ width: '100%', height: '70%', objectFit: 'contain' }} />
              <h1>{selectedBlogData.title}</h1>
              <p>{selectedBlogData.created_at}</p>
              <p>{selectedBlogData.description}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Blog list modal */}
      <Modal show={showBloglistModal} onHide={closeBlogListModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>All Blogs</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '80vh' }}>
          {blogs && (
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5">
              {blogs.map(blog => (
                <Card key={blog.id} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={blog.blogImage} style={{ height: '15rem', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{getFirstWords(blog.description, 9)}</Card.Text>
                    <Button variant="primary" onClick={() => openModal(blog.id)} style={{ width: '100%' }}>Read More</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeBlogListModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </Container>
  );
};
