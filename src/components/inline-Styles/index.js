/* Ejemplo de Uso de inline-Style o estilos de linea */

import React from 'react';

function InLineStyle(){
    return(
        <div style={{border: '1px solid red', margin:'20px' , color: 'blue'}}>
           <h1>Titulo que recibe inlinestyle</h1>
           <p>Practicando inlinestyle</p>
        </div>
    );
}

export default InLineStyle;