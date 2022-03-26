import React, {useState} from 'react';

function CountExample(){
    //Declara un nuevo state variable, la que llamaremos 'Count'
    // const [variable, funcion que actulizara varible] = useState(valor inicial...)
    // El valor inicial puede ser un numero, un arreglo, string, arreglo...
    const [count, setCount] =useState(0);
    return(
        <div >
            <p>Has hecho click {count} veces</p>
            <button onClick={()=>setCount(count+1)}> Click aqui</button>
        </div>
    );
}
export default CountExample;