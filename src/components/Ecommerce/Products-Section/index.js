import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardBootstrap from '../Card-RectBootstrap/index.jsx';
import Productos from '../../../data/productos.json';


function ProductSection(props) {
	const {anadirCarrito}= props;
	
	return (
		<div>
			<h4>New Products</h4>
			<Container fluid>
				<Row>
					{Productos.map((Producto)=>{
						const {id, title, price, description, image }=Producto;
						return(
							<CardBootstrap
							anadirCarrito={anadirCarrito}
							id={id} 
							title= {title} 
							price={price} 
							description={description} 
							image ={image}
							key={id}
							/>
							
						);
					})}
						
                           
					
	
				</Row>
			</Container>
		</div>
	);
}

export default ProductSection;