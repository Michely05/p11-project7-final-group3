import "./ProgressBar.css";
import React, { useState, useEffect } from "react";
import "../UserOptions/UserOptions";
import UserOptions from "../UserOptions/UserOptions";

function ProgressBar({ habits }) {
  const [progress, setProgress] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);

  const incrementProgress = () => {
    if (progress < 100) {
      // Incrementa el progreso en función del número total de botones
      const incrementAmount = 100 / buttonCount;
      setProgress((prevProgress) => Math.min(prevProgress + incrementAmount, 100));
    }
  };

  useEffect(() => {
    // Cuenta la cantidad de botones al renderizar el componente
    const buttons = document.querySelectorAll(".progressBtn button");
    setButtonCount(buttons.length);
  }, []);

  return (
    <div className="container">
      <div className="progressContainer">
        <div className="progressBar" style={{ width: `${progress}%` }}>
          {`${progress}%`}
        </div>
      </div>
      <div className="progressBtn">
        {habits.map(habit => <button key={habit.id} onClick={incrementProgress}>{habit.name}</button>)}
      </div>
    </div>
  );
}

export default ProgressBar;
