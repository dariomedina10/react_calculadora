import logo from './imagenes/freecodecamp.png';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx'
import BotonLimpiar from './componentes/Limpiar.jsx';
import { useState } from 'react';
import './App.css';

function App() {
  
  const [input,setInput] = useState ('');
  
  const agregarInput = valor => {
    setInput(input + valor); 
  } ;
  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
        <img src={logo} className='freecodecamp-logo' alt='logo' />
        </div>   
      
        <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
        <Boton manejarCLic={agregarInput}>1</Boton>
        <Boton manejarCLic={agregarInput}>2</Boton>
        <Boton manejarCLic={agregarInput}>3</Boton>
        <Boton manejarCLic={agregarInput}>+</Boton>
        
    
        </div>  
        <div className='fila'>
        <Boton manejarCLic={agregarInput}>4</Boton>
        <Boton manejarCLic={agregarInput}>5</Boton>
        <Boton manejarCLic={agregarInput}>6</Boton>
        <Boton manejarCLic={agregarInput}>-</Boton>
        </div>  
        <div className='fila'>
        <Boton manejarCLic={agregarInput}>7</Boton>
        <Boton manejarCLic={agregarInput}>8</Boton>
        <Boton manejarCLic={agregarInput}>9</Boton>
        <Boton manejarCLic={agregarInput}>*</Boton>
        
        </div>  
        <div className='fila'>
        <Boton manejarCLic={agregarInput}>=</Boton>
        <Boton manejarCLic={agregarInput}>0</Boton>
        <Boton manejarCLic={agregarInput}>.</Boton>
        <Boton manejarCLic={agregarInput}>/</Boton>
        </div>  
        <div className='fila'>
        <BotonLimpiar>Limpiar</BotonLimpiar>
        
        </div>
        <div className='fila'></div>  
      
       
      
        </div>   
    </div>
  );
}

export default App;
