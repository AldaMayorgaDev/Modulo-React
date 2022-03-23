import React from 'react';
import Button from './Button';
import DatosProducto from './DatosProducto';

function Card(){
    return (
        <div className="card">
            <div className="contenedorImagen">
                <img id = "imgProducto" src= 'https://cdn2.excelsior.com.mx/media/styles/grande/public/pictures/2021/09/09/2639715.jpg' alt="Imagen producto"/>
            </div>
            <div className="contenedorDatosProducto">
                <DatosProducto 
                nombre="Playera Barcelona Temp. 2021/2021 Versión Judagor Equipacíon UCL"
                talla='S'
                precio= '$130'
                />
               
                <Button
                 color='blue'   > Womens Chothing</Button>
                
            </div>
        </div>
    );
}
export default Card;