import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import instance from '../../axiosConfig';

export const Contacts = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const { name, email, phone, message } = formData;

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name == '' || formData.email == '' || formData.phone == '' || formData.message == '')
      return;

    try {
      const response = await instance.post('/users/contact_us', formData);
      console.log('Message submitted:', response.data);
      resetFormData();
    } catch (error) {
      console.error('Error submitting message:', error);
    }

  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-medium text-primary">Contact Us</p>
          <h1 className="display-7 mb-5 fw-bold">If You Have Any Query, Please Contact Us</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                    />
                    <label htmlFor="phone">Phone</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      name="message"
                      style={{ height: '200px' }}
                      value={message}
                      onChange={handleInputChange}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary rounded-pill py-3 px-5" type="submit" onClick={handleSubmit}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <h3 className="mb-4">Contact Details</h3>
            <div className="d-flex border-bottom pb-3 mb-3">
              <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" color={'#fff'} />
              </div>
              <div className="ms-3">
                <h6 className="text-md-start">Our Office</h6>
                <span className="font-weight-light text-muted">Menofia</span>
              </div>
            </div>
            <div className="d-flex border-bottom pb-3 mb-3">
              <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                <FontAwesomeIcon icon={faPhoneVolume} aria-hidden="true" color={'#fff'} />
              </div>
              <div className="ms-3">
                <h6 className="text-md-start">Call Us</h6>
                <span className="font-weight-light text-muted">+201096787085</span>
              </div>
            </div>
            <div className="d-flex border-bottom-0 pb-3 mb-3">
              <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" color={'#fff'} />
              </div>
              <div className="ms-3">
                <h6 className="text-md-start">Mail Us</h6>
                <span className="font-weight-light text-muted">mohamedshelfwork@gmail.com</span>
              </div>
            </div>

            <iframe
              className="w-100 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ minHeight: '300px', border: '0' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
