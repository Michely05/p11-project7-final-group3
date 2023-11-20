import React, { useState } from 'react';
import './Modal.css';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const handleDoneButtonClick = () => {
    // Puedes hacer algo con el valor de inputValue aquí
    console.log('Texto introducido:', inputValue);

    // Realizar una solicitud HTTP POST al servidor (ejemplo con JSON Server)
    fetch('http://localhost:3000/habits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ texto: inputValue }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        // Puedes realizar acciones adicionales después de la respuesta del servidor
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      })
      .finally(() => {
        // Cerrar el modal
        setShowModal(false);
        // Limpiar el valor del input
        setInputValue('');
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
          <div  className="modalBackground">
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
