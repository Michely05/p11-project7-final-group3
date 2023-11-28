import React, { useState } from 'react';
import './Checkbox.css';

const Checkbox = ({ className, onClick, checked, label}) => {
  const [isChecked, setChecked] = useState(checked);

  const handleClick = () => {
    setChecked(!isChecked);
    onClick();
  };

  return (
    <div className="checkboxContainer" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={`checkbox ${isChecked ? 'checked' : ''}`}>
        {isChecked && <span className="checkmark">✓</span>}
      </div>
      <span className="checkboxLabel">{label}</span>
    </div>
  );
};

export default Checkbox;

