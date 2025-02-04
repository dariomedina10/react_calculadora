import React from 'react';
import '../hojas-de-estilo/Boton.css';
//        <div className='fila'></div>} 
function Boton(props){
    
    const esOperador = valor =>{
       
       return isNaN (valor)  && (valor !== '.')   && (valor !== '=') 
        
    };
    
    return(
        
        <div
        className= {`boton-contenedor ${esOperador(props.children) ? 'operador' :null} `} 
        onClick={() => props.manejarCLic(props.children)}>   
        {props.children} 
        </div>
        
    );
}

export default Boton;