import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap/';


function FormEcommerce() {

    const [nuevoProducto, setNuevoProducto] = useState({
        category: '',
        description: '',
        image: '',
        price: '',
        title: ''
    })

    const [success, setSuccess] = React.useState('No enviado');

    function guardarInput(event) {
        setNuevoProducto({
            ...nuevoProducto,
            [event.target.name]: event.target.value

        });
    }

    function crearNuevoProducto(event) {
        event.preventDefault();
        setSuccess('Enviando nuevo producto')

        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify(nuevoProducto),
        })
            .then((res) => res.json())
            .then((json) => console.log(json))
            .then(() => setSuccess('Todo OK'))
            .catch(() => setSuccess('Hubo un error'))
    }


    return (
        <>
        <h1>success:{success}</h1>
        <p>Caputado: {JSON.stringify(nuevoProducto)}</p>
        <Form onSubmit={crearNuevoProducto}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="nombre" name='title'
                onChange={(event)=>guardarInput(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Precio" name='price'
                onChange={guardarInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" placeholder="Descripcion" name='description'
                onChange={guardarInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Image" name='image'
                onChange={guardarInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="category" name='category'
                onChange={guardarInput} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
        </>
    );
}

export default FormEcommerce; 