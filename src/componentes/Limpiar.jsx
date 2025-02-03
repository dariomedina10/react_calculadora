import React from 'react';
import '../hojas-de-estilo/Limpiar.css';

const BotonLimpiar = (props) => (
  
  <div className='boton-clear'>
    {props.children  }
  </div>
  
);
export default BotonLimpiar;