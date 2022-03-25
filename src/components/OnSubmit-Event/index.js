import React from 'react';

function Form(){

    //Se crear variable para capturar ahi los daots y despues mostrarlos en el alert

    let valorCapturado = '';
    function grabarInfo(event){
        console.log(event.target.value);
        valorCapturado = event.target.value;
    };

    function enviarInfo(){
        alert('La info enviada es: ' +valorCapturado);
    };

    return(
        <form onSubmit={enviarInfo}>
            <input 
                placeholder="Ingresa info:"
                onChange={(event)=>grabarInfo(event)}

            />
            <button
                type="submit"
                
            >
                Submit form!
            </button>
        </form>
    );
}


export default Form;