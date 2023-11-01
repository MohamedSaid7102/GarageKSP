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

  useEffect(() => {
    instance.get('/users/blogs')
      .then(response => {
        setBlogs(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
      <div className={`text-center mx-auto wow fadeInUp`} data-wow-delay="0.1s" style={{ maxWidth: '500px', marginBottom: '3rem' }}>
        <p className={`fs-2 fw-medium text-primary`}>Blogs</p>
      </div>

      <Carousel responsive={responsive}>
        {blogs.map(blog => (
          <Card key={blog.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={blog.blogImage} />
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{getFirstWords(blog.description, 9)}</Card.Text>
              <Button variant="primary" onClick={() => openModal(blog.id)}>Read More</Button>
            </Card.Body>
          </Card>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Blog Content</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '80vh' }}>
          {selectedBlogData && (
            <>
              <img src={selectedBlogData.blogImage} alt={selectedBlogData.title} style={{ width: '100%', height: '70%', objectFit: 'cover' }} />
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
    </Container>
  );
};
