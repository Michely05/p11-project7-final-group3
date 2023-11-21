import React, { useState } from 'react';
import './Modal.css';
import UserOptions from "./UserOptions";


export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const handleDoneButtonClick = () => {
    console.log("Texto introducido:", inputValue);
    

    fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: inputValue, }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      })
      .finally(() => {
        setShowModal(false);
        setInputValue("");
      });
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
