import React, {useState} from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function CardBootstrap() {
    const URLimg = 'https://i0.wp.com/www.cerocero.com.mx/wp-content/uploads/2021/12/FFhB5dZXIAQjKzn-1.jpg?ssl=1';

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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={URLimg} />
            <Card.Body>
                <Card.Title>Tickets Camp Nou</Card.Title>
                <Card.Subtitle>F.C Barcelona vs R. Sociedad</Card.Subtitle>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Delectus debitis nemo dolorem, nihil perferendis alias distinctio corporis earum itaque esse.
                    Autem, impedit harum? Quisquam earum maxime dolore itaque distinctio totam.
                </Card.Text>
                <Card.Link href="#">Ir al sitio </Card.Link>
                <br></br>
                <Button variant="primary">Comprar 💰 </Button>
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