import React, { useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);

  const incrementProgress = () => {
    const maxProgress = 100;
    const incrementValue = 10;

    if (progress + incrementValue <= maxProgress && buttonCount < 7) {
      setProgress((prevProgress) => prevProgress + incrementValue);
      setButtonCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="container">
      <div className="progressContainer">
        <div className="progressBar" style={{ width: `${progress}%` }}>
          {`${progress}%`}
        </div>
      </div>
      <div className="progressBtn">
        <button onClick={incrementProgress}>Añadir Tarea</button>
        <button onClick={incrementProgress}>Añadir Tarea</button>
        <button onClick={incrementProgress}>Añadir Tarea</button>
        <button onClick={incrementProgress}>Añadir Tarea</button>
        <button onClick={incrementProgress}>Añadir Tarea</button>
        <button onClick={incrementProgress}>Añadir Tarea</button>
        <button onClick={incrementProgress}>Añadir Tarea</button>
      </div>
    </div>
  );
}

export default ProgressBar;

