import React from 'react';

function Form(){

    function grabarInfoDeInput(event){
        console.log('Soy el evento OnChange y me estoy activando: 🌵 ');
        console.log('lo que teclaste es: ', event.target.value);


    }
    return(
        <form>
            <input 
                placeholder="Nombre" 
                onChange={(event)=> grabarInfoDeInput(event)}
            />
            <button>Submit form! </button>
        </form>
    );
};

export default Form;