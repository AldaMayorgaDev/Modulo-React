import React from 'react';
import {Button} from 'react-bootstrap';

function ButtonConEvento(){
    function click(nombre, edad){
        console.log("Evento click dispadado 🥄 ");
        alert(`hola ${nombre}m tu edad dentro de 2 años será; ${edad+2} años 👴 `)
    }
    return(
        <Button onClick={()=>click('adahir', 27)}>Activa el evento </Button>
        
    );
};

export default ButtonConEvento;