import React, { useState } from 'react';
import './AddModal.css';

function AddModal({ onAdd }) {
    const [inputValue, setInputValue] = useState("Correr, Estudiar, Leer...");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputClick = () => {
        setInputValue("");
    };

    const handleAddClick = () => {
        onAdd(inputValue);
        setInputValue("Correr, Estudiar, Leer...");
    };

    return (
        <div className="AddModalContainer">
            <input
                className="AddModalInput"
                value={inputValue}
                onChange={handleInputChange}
                onClick={handleInputClick}
            />
            <button className="AddModalButton" onClick={handleAddClick}>
                ¡Listo!
            </button>
        </div>
    );
}

export default AddModal;