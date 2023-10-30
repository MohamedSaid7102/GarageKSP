import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import icon5 from '../assets/img/icon/icon-5.png'
import icon6 from '../assets/img/icon/icon-6.png'
import instance from '../../axiosConfig';

export const About = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  let [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    instance.get('/users/about_us')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className={`container-xxl my-5`} style={{ background: `linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)), url(${data.image}) center no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className={`container`}>
          <div className={`row g-0`}>

            <div className={`col-lg-6`}>
              <div className={`h-100 d-flex align-items-center justify-content-center`} style={{ minHeight: '300px' }}>
                <button type="button" className={`btn-play`} data-bs-toggle="modal" data-src={data.youtube_video_url} data-bs-target="#videoModal">
                  <span></span>
                </button>
              </div>
            </div>

            <div className={`col-lg-6 pt-lg-5 wow fadeIn`} data-wow-delay="0.5s">
              <div className={`${darkMode ? 'bg-dark' : 'bg-white'} rounded-top p-5 mt-lg-5`}>
                <p className={`fs-5 fw-medium text-primary`}>About Us</p>
                <h1 className={`display-6 mb-4`}>{data.name}</h1>
                <p className={`mb-4`}>{data.description}</p>
                <div className={`row g-5 pt-2 mb-5`}>

                  <div className={`col-sm-6 d-flex flex-column align-items-center align-items-lg-start`}>
                    <img className={`img-fluid mb-4`} src={icon5} alt="Managed Services Icon" />
                    <h5 className={`mb-3 text-lg-start`}>Managed Services</h5>
                    <span className={`text-lg-start d-block`}>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>

                  <div className={`col-sm-6 d-flex flex-column align-items-center align-items-lg-start`}>
                    <img className={`img-fluid mb-4`} src={icon6} alt="Dedicated Experts Icon" />
                    <h5 className={`mb-3 text-lg-start`}>Dedicated Experts</h5>
                    <span className={`text-lg-start d-block`}>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>

                </div>

                <div className={`d-flex justify-content-center justify-content-lg-start`}>
                  <a className={`btn btn-primary rounded-pill py-3 px-5`} href="#">Explore More</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Start */}
      <div className={`modal modal-video fade`} id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className={`modal-dialog`}>
          <div className={`modal-content rounded-0`}>
            <div className={`modal-header`}>
              <h3 className={`modal-title`} id="exampleModalLabel">Youtube Video</h3>
              <button type="button" className={`btn-close`} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={`modal-body`}>
              {/* 16:9 aspect ratio */}
              <div className={`ratio ratio-16x9`}>
                <iframe className={`embed-responsive-item`} id="video" allowFullScreen
                  allowScriptAccess="always" width="1550" height="696" src={data.youtube_video_url} title={data.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

              {/*

              <div className={`ratio ratio-16x9`}>
                <iframe className={`embed-responsive-item`} id="video" allowFullScreen
                  allowScriptAccess="always" width="1550" height="696" src={data.youtube_video_url} title={data.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              */}

            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}
    </>
  );
};
