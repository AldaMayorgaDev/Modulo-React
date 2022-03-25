import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardBootstrap() {
    const URLimg = 'https://i0.wp.com/www.cerocero.com.mx/wp-content/uploads/2021/12/FFhB5dZXIAQjKzn-1.jpg?ssl=1';
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
                <Button variant="primary">Comprar 💰 </Button>
            </Card.Body>
        </Card>
    );
}

export default CardBootstrap;