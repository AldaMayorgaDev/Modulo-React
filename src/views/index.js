import React, {useState} from 'react';
import NavBar from '../components/Ecommerce/Navbar/index';
import CategoriasSection from '../components/Ecommerce/Categorias-Section/index';
import GreetingSection from '../components/Ecommerce/Greeting-Section/index';
import ProductSection from '../components/Ecommerce/Products-Section/index'
function Home(){
    const [carrito, setCarrito] = useState(0);

     function anadirCarrito(){
         setCarrito(carrito+1);
     }
    return (
        <div>
            <NavBar carrito={carrito}/>
                <GreetingSection />
                
                <CategoriasSection />
                <ProductSection anadirCarrito={anadirCarrito}/>
        </div>
    );
}
export default Home;