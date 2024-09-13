import React, { useState } from 'react';
import '../styles/Form.css'; // Ruta al archivo CSS

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Validación en tiempo real
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length < 3) {
          error = 'El nombre debe tener al menos 3 caracteres.';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = 'Por favor, introduce un correo electrónico válido.';
        }
        break;
      case 'password':
        if (value.length < 6) {
          error = 'La contraseña debe tener al menos 6 caracteres.';
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  // Maneja los cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value); // Valida mientras el usuario escribe
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Valida antes de enviar si se requiere
    const isValid = Object.values(errors).every((error) => error === '');
    if (isValid) {
      alert('Formulario enviado con éxito');
      // Aquí puedes realizar cualquier acción adicional, como enviar los datos al servidor
    } else {
      alert('Por favor, corrige los errores en el formulario.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'input-error' : ''}`}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'input-error' : ''}`}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`form-input ${errors.password ? 'input-error' : ''}`}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>

      <button type="submit" className="submit-btn">Enviar</button>
    </form>
  );
};

export default Form;