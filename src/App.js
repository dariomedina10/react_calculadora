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
        <br></br><br></br> 
        <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
        <Boton manejarCLic={agregarInput}>1</Boton>
        <Boton manejarCLic={agregarInput}>2</Boton>
        <Boton manejarCLic={agregarInput}>3</Boton>
        <Boton manejarCLic={agregarInput}>+</Boton>
        </div>  
        <div className='fila'>
        <Boton>4</Boton>
        <Boton>5</Boton>
        <Boton>6</Boton>
        <Boton>-</Boton>
        </div>  
        <div className='fila'>
        <Boton>7</Boton>
        <Boton>8</Boton>
        <Boton>9</Boton>
        <Boton>*</Boton>
        
        </div>  
        <div className='fila'>
        <Boton>=</Boton>
        <Boton>0</Boton>
        <Boton>.</Boton>
        <Boton>/</Boton>
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
