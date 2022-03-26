import React, {useState} from 'react';
import './App.scss';

/* Ejemplo de prop drilling */

function Saludo() {
  const [name, setName]= useState('Aldahir');
  return (
    <div><Titulo name={name}/> </div>
  );
}

function Titulo(props) {
  return (
    <div><NombreEnPantalla name={props.name}/></div>
  );
}

function NombreEnPantalla(props) {
  return (
    <div>Bienvenido {props.name}</div>
  );
}

function SectionCategorias() {
  return (
    <div>Categorias</div>
  );
}

function SectionProductos() {
  return (
    <div>Productos</div>
  );
}
function App() {
  return (
    <div>
      <header>Clase 5- e </header>
      <Saludo />
      <SectionCategorias />
      <SectionProductos />
    </div>
  );
}

export default App;
