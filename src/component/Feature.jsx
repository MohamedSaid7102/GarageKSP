
export const Feature = ({ icon, title, description }) => {
  return (
    <div className="feature-brand col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
      <div className="feature-item border h-100 p-5">
        {icon && <div className="btn-square bg-light rounded-circle mb-4 feature-item__img" style={{ width: '64px', height: '64px', borderRadius: '100%', overflow: 'hidden' }}>
          <img className="img-fluid" src={icon} alt={`${title} Icon`} style={{ objectFit: 'cover' }} />
        </div>}
        {title && <h5 className="mb-3 text-lg-start feature-item__title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</h5>}
        {description && <p className="mb-0 text-lg-start feature-item__text">{description}</p>}
      </div>
    </div>
  );
};
