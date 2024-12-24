import './index.scss';

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <div className="title-border"></div>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle; 