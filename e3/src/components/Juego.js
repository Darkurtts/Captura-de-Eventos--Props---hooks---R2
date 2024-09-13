import React, { useState } from 'react';
import '../styles/Juego.css'; // Ruta al archivo CSS

const Juego = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
  }

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (isNaN(userGuess)) {
      setMessage('Por favor, ingresa un número válido.');
    } else if (userGuess < randomNumber) {
      setMessage('Más alto.');
    } else if (userGuess > randomNumber) {
      setMessage('Más bajo.');
    } else {
      setMessage(`¡Correcto! Adivinaste el número en ${attempts} intentos.`);
      setRandomNumber(generateRandomNumber()); // Genera un nuevo número para reiniciar el juego
      setAttempts(0);
    }
    setGuess('');
  };

  return (
    <div className="game-container">
      <h1>Juego de Adivinar el Número</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={guess}
          onChange={handleChange}
          className="guess-input"
          placeholder="Ingresa un número del 1 al 100"
        />
        <button type="submit" className="submit-btn">Adivinar</button>
      </form>
      <p className="message">{message}</p>
      <p className="attempts">Intentos: {attempts}</p>
    </div>
  );
};

export default Juego;