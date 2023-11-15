import React, { useState } from 'react';
import './Checkbox.css';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="checkboxContainer" onClick={handleClick}>
      <div className={`checkbox ${checked ? 'checked' : ''}`}>
        {checked && (
          <span className="checkmark">✓</span>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
