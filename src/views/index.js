import React, {useState} from 'react';
import NavBar from '../components/Ecommerce/Navbar/index';
import CategoriasSection from '../components/Ecommerce/Categorias-Section/index';
import GreetingSection from '../components/Ecommerce/Greeting-Section/index';
import ProductSection from '../components/Ecommerce/Products-Section/index';
import FormEcommerce from '../components/Ecommerce/Form/index'

function Home(){
    const [carrito, setCarrito] = useState(0);
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState('');


     function anadirCarrito(){
         setCarrito(carrito+1);
     }

     React.useEffect(()=>{
        console.log('Se dispara useEfects del productos');

        function getProductos(){
            setProductos([]);

            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductos(json))
            .then(()=>setLoading(''))
        };

        getProductos();
        setLoading('Loading...');

     },[]);

     React.useEffect(() => {
         console.log('Se dispara el useEfects de categorias');

         async function getCategorias(){
             setCategorias([]);

            const resp= await fetch('https://fakestoreapi.com/products/categories')
            .then(resp=>resp.json())
            
            setCategorias(resp)
         }

         getCategorias();
     },[]);


    return (
        <div>
            <NavBar carrito={carrito}/>
               {/*  <GreetingSection />
                
                <CategoriasSection categorias={categorias}/>
                <ProductSection anadirCarrito={anadirCarrito} productos={productos} loading={loading}/> */}
            <FormEcommerce />    
        </div>
    );
}
export default Home;