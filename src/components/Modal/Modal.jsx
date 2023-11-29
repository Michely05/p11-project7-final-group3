import React, { useState } from "react";
import "./Modal.css";

export default function Modal({onAddedHabit}) {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const handleDoneButtonClick = () => {
    console.log("Texto introducido:", inputValue);
    onAddedHabit(inputValue);
    setShowModal(false);
    setInputValue("");
  };

  return (
    <div className="addButtonContainer">
      {!showModal && (
        <button className="addButton" onClick={handleAddButtonClick}>
          Añadir
        </button>
      )}
      {showModal && (
        <div className="modalBackground">
          <div className="modal">
            <input
              className="modalInput"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Leer, estudiar, tomar agua..."
            />
            <button className="doneButton" onClick={handleDoneButtonClick}>
              ¡Listo!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
