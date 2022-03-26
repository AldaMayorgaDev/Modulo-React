import React, {useState} from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function CardBootstrap(props) {
    const {anadirCarrito, id, title, price, description, image }= props;
    

    const [addedToFav, setAddedToFav]= useState(false);
    const [addedToCar, setAddedToCar]= useState(0);

    function addToFav(){
        console.log('Se añadió a tus Favs ❤ ');
        setAddedToFav(!addedToFav);
        
    }

    function addCar(){
        console.log('Se añadio al carrito: ' +(addedToCar+1))
        setAddedToCar(addedToCar+1);
    }

    return (
        <Card style={{ width: '18rem', marginRight: '2rem' , display:'flex'}}>
            <Card.Img variant="top" src={image} style={{height:'30%', width:'40%', align:'center'}} />
            <Card.Body>
                <Card.Title style={{ fontSize: '14px'}}>{title}</Card.Title>
                <Card.Subtitle>{price}</Card.Subtitle>
                <Card.Text style={{ fontSize: '12px'}}>
                    {description}
                </Card.Text>
                <Card.Link href="#">Ir al sitio </Card.Link>
                <br></br>
                <Button variant="primary" onClick={()=>(anadirCarrito())}>Comprar 💰 </Button>
                <Button variant="success" onClick={()=>addToFav()}>
                    Añadir a Fav     
               </Button>   
                    {
                        addedToFav && <Badge bg="light" text="dark">🧡</Badge>}
            
                <Button variant="warning" text="dark" onClick={()=>(addCar())}>Añadir a Carrito 🛄 </Button>
                {
                    addedToCar === 0 ? null : <Badge bg="light" text="dark">{addedToCar}</Badge>}
            </Card.Body>
        </Card>
    );
}

export default CardBootstrap;