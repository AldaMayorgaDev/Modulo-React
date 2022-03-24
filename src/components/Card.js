import React from 'react';
import Button from './Button';

import DatosProducto from './DatosProducto';

function Card({nombre,talla, precio, imagenProducto, textBtn}){
    return (
        <div className="card">
            <div className="contenedorImagen">
                <img id = "imgProducto" src= {imagenProducto} alt="Imagen producto"/>
            </div>
            <div className="contenedorDatosProducto">
                <DatosProducto
                nombre={nombre}
                talla={talla}
                precio= {precio}/>
                <Button
                textBtn={textBtn}/>
            </div>
        </div>
    );
}
export default Card;