import React, { useState, useEffect } from "react";
import "./ProgressBar.css";
import "../UserOptions/UserOptions";
import Checkbox from "../Checkbox/Checkbox";

function ProgressBar({ habits }) {
  const limitedHabits = habits.slice(0, 12);
  const [progress, setProgress] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleCheckboxClick = (habitId) => {
    // Verifica si el botón ya está seleccionado
    const isCheckboxSelected = selectedButtons.includes(habitId);

    // Actualiza el estado de los botones seleccionados
    if (isCheckboxSelected) {
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

    const newProgress = totalHabits === 0 ? 0 : Math.floor((totalSelected / totalHabits) * 100);
    setProgress(newProgress);
  }, [selectedButtons, limitedHabits]);

  return (
    <div className="progressContainer">
      <div className="barContainer">
        <div className="progressBar" style={{ width: `${progress}%` }}>
          {`${progress}%`}
        </div>
      </div>
      <div className="progressBtn">
        {limitedHabits.map((habit) => (
          <div key={habit.id}>
          <Checkbox
            onClick={() => handleCheckboxClick(habit.id)}
            checked={selectedButtons.includes(habit.id) ? "selected" : ""}
            label={habit.name}
          />
          </div>
        ))}
      </div>
      </div>
  );
}

export default ProgressBar;
