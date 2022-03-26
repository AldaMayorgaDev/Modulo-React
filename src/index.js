import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InLineStyle from './components/inline-Styles/index';
import ModuleStyles from './components/Module-Styles/index';
import ReactBootstrap from './components/React-bootstrap/react-bootstrap';
//import Form from './components/OnChange-Event/index';
//import Form from './components/OnSubmit-Event/index';
//import ButtonConEvento from './components/OnClick-Event/index';
// import CardBootstrap from './components/Card-RectBootstrap/index.jsx';
//import CustomForm from './components/CustomForm/index';

//import CountExample from './components/Count-UseState/count.js';
import FormNew from './components/Form/index'
/* Importando Bootstrap aqui */
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <FormNew />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
