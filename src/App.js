// import logo from './logo.svg';
import './App.scss';
//import Button from '../src/components/Button'
//import Card from './components/Card'
import Card from './components/Cards'
import Button from './components/Button'

function App() {

  return (
   <div>
     <header>Clase 3- React estilos con sass y eventos</header>
     <div className="Card-Container">
       <Card />
       <Card />
       <Card />
       <Card />
     </div>
   </div>
  );
}

export default App;
