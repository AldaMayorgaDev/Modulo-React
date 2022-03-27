import React from 'react';
import Badge from 'react-bootstrap/Badge';
//import Categorias from '../../../data/categorias.json';


function CategoriasSection(props) {
	const {categorias} = props;
	
	return (
		<div style={{ margin: '2rem 0' }}>
			<h4>Categorias</h4>
			{ categorias.map((categoria)=>{
				return (<Badge pill className='mr-4'key={categoria} style={{ margin: '.1rem' }}>{categoria}</Badge>);
			})}
		</div>
	);
}

export default CategoriasSection;

