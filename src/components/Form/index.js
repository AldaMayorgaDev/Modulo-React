import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';

function FormNew(){
    const [datosForm, setDatosForm] = useState({
        email:'',
        password:''
    });

    function grabar(event){
        console.log('Usted teclea esto', event.target.value);
        setDatosForm({
            ...datosForm,
            [event.target.name]: event.target.value
        });
    };

    function enviarDatos(event){
        event.preventDefault();
        alert(JSON.stringify(datosForm))
        
    }

    return(
        <div>
            <Form onSubmit={enviarDatos}>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' onChange={(event)=>{grabar(event)}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' onChange={(event)=>{grabar(event)}}/>
  </Form.Group>

  <Button variant="primary" type="submit" disabled={datosForm.email === '' || datosForm.password === ''}>
    Enviar
  </Button>
</Form>
        {JSON.stringify(datosForm)}
        </div>
    );
}
export default FormNew;