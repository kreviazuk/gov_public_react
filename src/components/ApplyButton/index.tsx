import React from 'react';
import './index.scss';

interface ApplyButtonProps {
  text: string;
  onClick?: () => void;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ text, onClick }) => {
  return (
    <button className="apply-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default ApplyButton; 