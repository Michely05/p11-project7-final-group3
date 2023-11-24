import React, { useState, useEffect } from "react";
import "./ProgressBar.css";
import "../UserOptions/UserOptions";
import UserOptions from "../UserOptions/UserOptions";

function ProgressBar({ habits }) {
  const limitedHabits = habits.slice(0, 12);
  const [progress, setProgress] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (habitId) => {
    // Verifica si el botón ya está seleccionado
    const isButtonSelected = selectedButtons.includes(habitId);

    // Actualiza el estado de los botones seleccionados
    if (isButtonSelected) {
      setSelectedButtons((prevSelected) =>
        prevSelected.filter((selectedId) => selectedId !== habitId)
      );
    } else {
      setSelectedButtons((prevSelected) => [...prevSelected, habitId]);
    }
  };

  useEffect(() => {
    // Calcula el progreso en función de los botones seleccionados
    const totalSelected = selectedButtons.length;
    const totalHabits = limitedHabits.length;

    const newProgress = (totalSelected / totalHabits) * 100;
    setProgress(newProgress);
  }, [selectedButtons, limitedHabits]);

  return (
    <>
      <div className="container">
        <div className="progressContainer">
          <div className="progressBar" style={{ width: `${progress}%` }}>
            {`${progress}%`}
          </div>
        </div>
      </div>

      <div className="progressBtn">
        {limitedHabits.map((habit) => (
          <button
            key={habit.id}
            onClick={() => handleButtonClick(habit.id)}
            className={selectedButtons.includes(habit.id) ? "selected" : ""}
          >
            {habit.name}
          </button>
        ))}
      </div>
      {habits.length > 12 && <p>Solo se mostrarán los 12 primeros hábitos.</p>}
    </>
  );
}

export default ProgressBar;
