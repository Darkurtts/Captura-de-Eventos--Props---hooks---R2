import React, { useState, useEffect } from 'react';
import '../styles/Galeria.css'; // Ruta al archivo CSS

const images = [
  'http://localhost:3000/picui.png',
  'http://localhost:3000/picui2.jfif',
  'http://localhost:3000/picui3.jfif',
];

const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (event.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="gallery-container">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="gallery-image"
      />
      <p className="gallery-instructions">
        Usa las teclas de flecha izquierda y derecha para navegar.
      </p>
    </div>
  );
};

export default Galeria;