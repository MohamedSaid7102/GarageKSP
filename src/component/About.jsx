import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import instance from '../../axiosConfig';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const {t} = useTranslation();
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

  const getVideoId = (url) => {
    const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url?.match(videoIdRegex);
    return match ? match[1] : null;
  };
  
  return (
    <>
      <div className={`container-xxl my-5`} style={{ position: 'relative' }}  dir={`${i18n.language == 'ar' ? 'rtl' : 'ltr'}`}>
        <img src={data.image} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} />
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
                <p className={`fs-5 fw-medium text-primary`}>{t('about.title')}</p>
                <h1 className={`display-6 mb-4`}>{data.name}</h1>
                <p className={`mb-4`}>{data.description}</p>
                <div className={`d-flex justify-content-center justify-content-center`}>
                  <a className={`btn btn-primary rounded-pill py-3 px-5`} href="#">{t('exploreMore')}</a>
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
              <h3 className={`modal-title`} id="exampleModalLabel" style={{flex: 1}}>{data.name}</h3>
              <button type="button" className={`btn-close`} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={`modal-body`}>
              {/* 16:9 aspect ratio */}
              <div className={`ratio ratio-16x9`}>
              <iframe className={`embed-responsive-item`} id="video" width="1550" height="696" src={`https://www.youtube.com/embed/${getVideoId(data?.youtube_video_url)}`} title={data.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}
    </>
  );
};
