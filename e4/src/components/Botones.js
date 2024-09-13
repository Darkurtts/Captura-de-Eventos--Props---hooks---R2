import React from 'react';
import '../styles/Botones.css'; // Ruta al archivo CSS

const Botones = () => {
  const handleClick = (action) => {
    console.log(`Botón ${action} fue clickeado.`);
    alert(`¡Hiciste clic en el botón ${action}!`);
  };

  const handleDoubleClick = (action) => {
    console.log(`Botón ${action} fue doble clickeado.`);
    alert(`¡Hiciste doble clic en el botón ${action}!`);
  };

  return (
    <div className="button-container">
      <button
        className="action-button"
        onClick={() => handleClick('uno')}
        onDoubleClick={() => handleDoubleClick('uno')}
      >
        Botón 1
      </button>
      <button
        className="action-button"
        onClick={() => handleClick('dos')}
        onDoubleClick={() => handleDoubleClick('dos')}
      >
        Botón 2
      </button>
      <button
        className="action-button"
        onClick={() => handleClick('tres')}
        onDoubleClick={() => handleDoubleClick('tres')}
      >
        Botón 3
      </button>
    </div>
  );
};

export default Botones;