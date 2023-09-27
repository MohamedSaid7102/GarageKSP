import { useContext } from 'react'
import icon1 from '../assets/img/icon/icon-1.png'
import icon2 from '../assets/img/icon/icon-2.png'
import icon3 from '../assets/img/icon/icon-3.png'
import icon4 from '../assets/img/icon/icon-4.png'
import { Feature } from '../component'
import { ThemeContext } from '../ThemeContext'

export const Features = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className={`text-center mx-auto wow fadeInUp`} data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className={`fs-2 fw-medium text-primary`}>Brands</p>
        </div>

        <div className={`${darkMode && 'bg-dark'} row g-0 d-flex gap-4 justify-content-center`}>
          <Feature
            icon={icon1}
            title="Award Winning"
            description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam"
          />
          <Feature
            icon={icon2}
            title="Professional Staff"
            description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam"
          />
          <Feature
            icon={icon3}
            title="Fair Prices"
            description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam"
          />
          <Feature
            icon={icon4}
            title="24/7 Support"
            description="Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam"
          />
        </div>
      </div>
    </div >
  );
}

