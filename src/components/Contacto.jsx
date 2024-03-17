import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <div>
      <h3>Contacto</h3>
      <form>
        <div>
          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Contacto;


