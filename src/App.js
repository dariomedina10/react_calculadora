import logo from './imagenes/freecodecamp.png';
import './App.css';

function App() {
  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
        <img src={logo} className='freecodecamp-logo' alt='logo' />
        </div>   
        
        <div className='contenedor-calculadora'>
        <div className='fila'></div>  
        <div className='fila'></div>  
        <div className='fila'></div>  
        <div className='fila'></div>  
        <div className='fila'></div>  
      
       
      
        </div>   
    </div>
  );
}

export default App;
