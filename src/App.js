// import logo from './logo.svg';
import './App.scss';
//import Button from '../src/components/Button'
//import Card from './components/Card'
import Card from './components/Cards'
import Button from './components/Button'

import CardBootstrap from'./components/Card-RectBootstrap/index.jsx';

function App() {

  return (
   <div>
     <header>Clase 4- useState </header>
     <div className="Card-Container">
       {/* <Card /> */}
       <CardBootstrap/>
        <CardBootstrap/>
        <CardBootstrap/>
      
     </div>
   </div>
  );
}

export default App;
