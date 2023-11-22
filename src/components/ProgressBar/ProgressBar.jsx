import "./ProgressBar.css";
import React, { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const incrementProgress = () => {
    if (progress < 100) {
      setProgress((prevProgress) => prevProgress + 10);
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
