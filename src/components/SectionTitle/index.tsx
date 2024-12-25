import React from 'react';
import './index.scss';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="section-title">
      <div className="title-border"></div>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle; 