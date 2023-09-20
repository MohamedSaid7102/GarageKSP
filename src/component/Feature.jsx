
export const Feature = ({ icon, title, description }) => {
  return (
    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
      <div className="feature-item border h-100 p-5">
        <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
          <img className="img-fluid" src={icon} alt={`${title} Icon`} />
        </div>
        <h5 className="mb-3 text-lg-start">{title}</h5>
        <p className="mb-0 text-lg-start">{description}</p>
      </div>
    </div>
  );
};
