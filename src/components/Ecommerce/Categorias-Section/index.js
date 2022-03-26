import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Categorias from '../../../data/categorias.json';


function CategoriasSection() {
	
	return (
		<div style={{ margin: '2rem 0' }}>
			<h4>Categorias</h4>
			{Categorias.map((Categoria)=>{
				return (<Badge pill className='mr-4'key={Categoria} style={{ margin: '.1rem' }}>{Categoria}</Badge>);
			})}
		</div>
	);
}

export default CategoriasSection;

