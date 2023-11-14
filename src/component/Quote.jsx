import React, { useEffect, useState } from 'react';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import instance from '../../axiosConfig';
import { toast } from 'react-toastify';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

export const Quote = () => {
  const [settings, setSettings] = useState()
  const {t} = useTranslation();
  useEffect(() => {
    instance.get('/users/settings')
      .then(res => {
        setSettings(res.data.data)
      })
      .catch(error => {
        console.error('Error fetching dta: ', error)
      })
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service_id: 'Digital Marketing',
    message: '',
  });

  const services = [
    { id: '1', name: 'Digital Marketing' },
    { id: '2', name: 'Social Marketing' },
    { id: '3', name: 'Content Marketing' },
    { id: '4', name: 'E-mail Marketing' },
  ];

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      service_id: 'Digital Marketing',
      message: '',
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name == '' || formData.email == '' || formData.mobile == '' || formData.message == '')
      return;

    try {
      const response = await instance.post('/users/quotes', formData);
      console.log('Quote submitted:', response.data);
      resetFormData();
    } catch (error) {
      console.error('Error submitting quote:', error);
    }

  };

  return (
    <div className="container-xxl py-5" dir={`${i18n.language == 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp d-flex flex-column justify-content-center justify-content-md-start" data-wow-delay="0.1s">
            <p className="fs-5 fw-medium text-primary text-md-start">{t('getACar.title')}</p>
            <h1 className="display-5 mb-4 text-md-start">{t('getACar.desc')}</h1>

            {/* Phone Call Button */}
            <a className="phone-call-btn d-flex align-items-center rounded overflow-hidden border border-primary text-decoration-none" href={`tel:${settings?.phones}`}>
              <span className="btn-lg-square bg-primary" style={{ width: '55px', height: '55px' }}>
                <FontAwesomeIcon icon={faPhoneVolume} style={{ color: '#fff' }} aria-hidden="true" />
              </span>
              <span className="fs-5 fw-medium mx-4">{settings?.phones}</span>
            </a>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <h2 className="mb-4">{t('getACar.title')}</h2>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="name">{t('form.name')}</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="mail"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="mail">{t('form.email')}</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      placeholder="Your Mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <label htmlFor="mobile">{t('form.mobile')}</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">

                    <select
                      className="form-select"
                      id="service"
                      name="service_id"
                      value={formData.service_id}
                      onChange={handleChange}
                    >
                      <option value="">Select A Service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>

                    <label htmlFor="service">Choose A Service</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      name="message"
                      style={{ height: '130px' }}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="message">{t('form.message')}</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">{t('submit')}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
