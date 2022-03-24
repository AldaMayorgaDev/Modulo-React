import React from 'react';


function DatosProducto({nombre,talla, precio}){
    return(
        <div>
        <h2 ClassName="nombreProducto">{nombre}</h2>
        <h3>Talla: {talla}</h3>
        <span>{precio}</span>
        </div>
        
    );
}
export default DatosProducto;