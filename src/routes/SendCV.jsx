import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';

export const SendCV = () => {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    yearsOfExperience: '',
    collegeDegree: '',
    contactInfo1: '',
    contactInfo2: '',
    contactInfo3: '',
    technicalSkill1: '',
    technicalSkill2: '',
    technicalSkill3: '',
    technicalSkill4: '',
    technicalSkill5: '',
    technicalSkill6: '',
    cv: null, // to store the selected CV file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCvChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access the form data in the formData object here
    console.log(formData);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ maxWidth: '1000px', margin: '5rem auto', display: 'flex', flexDirection: 'column', gap: '18px', paddingInline: '10px' }}>
        <Row style={{ display: 'fex', justifyContent: 'flex-end' }}>
          <Col md={4}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="yearsOfExperience">
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="collegeDegree">
              <Form.Label>College Degree</Form.Label>
              <Form.Control
                type="text"
                name="collegeDegree"
                value={formData.collegeDegree}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ display: 'fex', justifyContent: 'flex-end' }}>
          <Col md={4}>
            <Form.Group controlId="contactInfo1">
              <Form.Label>Contact Info 1</Form.Label>
              <Form.Control
                type="text"
                name="contactInfo1"
                value={formData.contactInfo1}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="contactInfo2">
              <Form.Label>Contact Info 2</Form.Label>
              <Form.Control
                type="text"
                name="contactInfo2"
                value={formData.contactInfo2}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="contactInfo3">
              <Form.Label>Contact Info 3</Form.Label>
              <Form.Control
                type="text"
                name="contactInfo3"
                value={formData.contactInfo3}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ display: 'fex', justifyContent: 'flex-end' }}>
          <Col md={4}>
            <Form.Group controlId="technicalSkill1">
              <Form.Label>Technical Skill 1</Form.Label>
              <Form.Control
                type="text"
                name="technicalSkill1"
                value={formData.technicalSkill1}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="technicalSkill2">
              <Form.Label>Technical Skill 2</Form.Label>
              <Form.Control
                type="text"
                name="technicalSkill2"
                value={formData.technicalSkill2}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="technicalSkill3">
              <Form.Label>Technical Skill 3</Form.Label>
              <Form.Control
                type="text"
                name="technicalSkill3"
                value={formData.technicalSkill3}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="technicalSkill4">
              <Form.Label>Technical Skill 4</Form.Label>
              <Form.Control
                type="text"
                name="technicalSkill4"
                value={formData.technicalSkill4}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ display: 'fex', justifyContent: 'flex-end' }}>
          <Col md={4}>
            <Form.Group controlId="technicalSkill5">
              <Form.Label>Technical Skill 5</Form.Label>
              <Form.Control
                type="text"
                name="technicalSkill5"
                value={formData.technicalSkill5}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="technicalSkill6">
              <Form.Label>Technical Skill 6</Form.Label>
              <Form.Control
                type="text"
                name="technicalSkill6"
                value={formData.technicalSkill6}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="cv">
              <Form.Label>Upload CV (.pdf)</Form.Label>
              <Form.Control
                type="file"
                name="cv"
                onChange={handleCvChange}
                accept=".pdf"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" style={{ width: '100%', margin: 'auto' }}>
          Send
        </Button>
      </Form>
    </>
  )
}
