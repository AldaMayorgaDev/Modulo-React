import React from 'react';
import { Form, Button } from 'react-bootstrap';

function CustomForm() {
    let correo = '';
    let contraseña = '';

    function guardarinfo(event) {
        {
            if (event.target.id === 'formBasicEmail')
                correo = event.target.value;
            else {
                contraseña = event.target.value;
            }
        }
        console.log('Lo que has teclado en correo es: ' + correo +' lo que has tecleado en contraseña es: '+ contraseña);
    }

    function enviarInfo() {
        alert('El email ingresado es : ' + correo + ' La contraseña es: ' + contraseña);
    };

    return (
        <div style={{ padding: '20px', width: '50%', border: '2px solid black', background: '#eeee', alignContent: 'center', margin: '50px' }}>

            <Form onSubmit={enviarInfo}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        placeholder="Escriba su email"
                        onChange={(event) => { guardarinfo(event) }} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" onChange={(event) => { guardarinfo(event) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default CustomForm;