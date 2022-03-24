// import logo from './logo.svg';
import './App.css';
//import Button from '../src/components/Button'
import Card from './components/Card'
import Button from './components/Button'

function App() {

  return (
    <div className="App">
      <Card
        imagenProducto='https://cdn2.excelsior.com.mx/media/styles/grande/public/pictures/2021/09/09/2639715.jpg'
        nombre="Playera Barcelona Temp. 2021/2021 Versión Judagor Equipacíon UCL"
        talla='S'
        precio='$1300.00'
        textBtn= 'Comprar ahora 🛍 '/>
       
      
      <Card
        imagenProducto='https://img.planetafobal.com/2021/07/aubameyang-arsenal-2021-2022-adidas-kit-sd.jpg'
        nombre="Playera Arsenal Temp. 2021/2021 Versión Jugador, sellos Premier League"
        talla='M'
        precio='$99.00'textBtn= 'Comprar ahora 🛍 '/> 
    
    <Card
        imagenProducto='https://trizhop.com/wp-content/uploads/2020/09/fe200bf6.jpg'
        nombre="Chandal entrenamiento Manchester City, Temp. 2021/2021 Versión Aficionado"
        talla='S'
        precio='$70.99'
        textBtn= 'Comprar ahora 🛍 '/>

    </div>
  );
}

export default App;
