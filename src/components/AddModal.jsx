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

    const fetchPost = async (data) => {
        try {
            const response = await fetch('TU_ENLACE_DE_API', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Puedes necesitar incluir encabezados adicionales aquí
                },
                body: JSON.stringify({ data }),
            });

            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }

            const responseData = await response.json();
            console.log('Datos enviados correctamente:', responseData);
        } catch (error) {
            console.error('Error durante la llamada a fetchPost:', error);
        }
    };

    const handleAddClick = () => {
        // Llama a la función fetchPost para enviar los datos al servidor
        fetchPost(inputValue);

        // Actualiza el estado local o realiza cualquier otra acción según sea necesario
        onAdd(inputValue);

        // Reinicia el valor de la entrada
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
