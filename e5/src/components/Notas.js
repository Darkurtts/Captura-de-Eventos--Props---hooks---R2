import React, { useState, useEffect } from 'react';
import '../styles/Notas.css'; // Ruta al archivo CSS

const Notas = () => {
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  // Simulación del guardado automático
  const saveNote = () => {
    setMessage('Guardado automáticamente');
    setTimeout(() => {
      setMessage(''); // El mensaje desaparece después de 2 segundos
    }, 2000);
  };

  const handleInputChange = (e) => {
    setNote(e.target.value);

    // Si hay un temporizador activo, lo limpiamos
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Configura un nuevo temporizador para guardar automáticamente después de 2 segundos
    const newTimeoutId = setTimeout(() => {
      saveNote();
    }, 2000);

    setTimeoutId(newTimeoutId);
  };

  // Cargar la nota guardada (simulado desde localStorage)
  useEffect(() => {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  // Guardar la nota en localStorage cada vez que cambie
  useEffect(() => {
    if (note) {
      localStorage.setItem('note', note);
    }
  }, [note]);

  return (
    <div className="notes-container">
      <h1>Aplicación de Notas</h1>
      <textarea
        value={note}
        onChange={handleInputChange}
        placeholder="Escribe tus notas aquí..."
        className="note-textarea"
      />
      <p className="save-message">{message}</p>
    </div>
  );
};

export default Notas;