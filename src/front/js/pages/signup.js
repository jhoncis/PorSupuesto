import React, { Component, Fragment, useState } from "react";
//import { render } from "react-dom";
import { Button,FormGroup,Label,Input,FormText,Form } from 'reactstrap';
import Select from 'react-select';
import "../../styles/index.css";


export const Signup = (props) => {
	const[opcion,setopcion] = useState(1);
	const cambioestadoopcion=e=>{
		setopcion(e.target.value);
	}
	const[usuario,setusuario] = useState({
		nombre: '',
		identificacion: '',
		region:' ',
		direccion:' ',
		correo: ' ',
		contacto: ' ',
		clave: ' ',
		confirma: ' '


	});
	const gestionarcambios = (evento) => {
		console.log(evento.target.value)
		setusuario({
			...usuario,
			[evento.target.name]: evento.target.value
		}

		)
	}

	const regiones = [
		{label: 'Amazonas', value: 'Amazonas'},
		{label: 'Anzoátegui', value: 'Anzoátegui'},
		{label: 'Apure', value: 'Apure'},
		{label: 'Aragua', value: 'Aragua'},
		{label: 'Barinas', value: 'Barinas'},
		{label: 'Bolívar', value: 'Bolívar'},
		{label: 'Carabobo', value: 'Carabobo'},
		{label: 'Cojedes', value: 'Cojedes'},
		{label: 'Delta Amacuro', value: 'Delta Amacuro'},
		{label: 'Distrito Capital', value: 'Distrito Capital'},
		{label: 'Falcón', value: 'Falcón'},
		{label: 'Guárico', value: 'Guárico'},
		{label: 'La Guaira', value: 'La Guaira'},
		{label: 'Lara', value: 'Lara'},
		{label: 'Mérida', value: 'Mérida'},
		{label: 'Miranda', value: 'Miranda'},
		{label: 'Monagas', value: 'Monagas'},
		{label: 'Nueva Esparta', value: 'Nueva Esparta'},
		{label: 'Portuguesa', value: 'Portuguesa'},
		{label: 'Sucre', value: 'Sucre'},
		{label: 'Táchira', value: 'Táchira'},
		{label: 'Trujillo', value: 'Trujillo'},
		{label: 'Yaracuy', value: 'Yaracuy'},
		{label: 'Zulia', value: 'Zulia'},
		{label: 'Dependencias Federales', value: 'Aanzoátegui'},
		{label: 'Dependencias Federales', value: 'Dependencias Federales'},
		
	]
 	return (<div className="contenedor px-4 py-4 vh-100">
			<Form className="row"> 
			<div className="radiobutton">
				<FormGroup>
					<Input
						id="radio1"
						type="radio"
						value="1"
						checked = {opcion== 1 ? true : false }
						onChange={cambioestadoopcion}
					/>
					<Label for="radio1">
					Persona Natural    
					</Label>
				
				</FormGroup>
					<FormGroup>
					<Input
						id="radio2"
						type="radio"
						value="2"
						checked = {opcion== 2 ? true : false }
						onChange={cambioestadoopcion}
					/>
					<Label for="radio2">
						Persona Jurídica
					</Label>
				</FormGroup>
				<FormGroup>
					<Input
					id="radio3"
					type="radio"
					value="3"
					checked = {opcion== 3 ? true : false }
					onChange={cambioestadoopcion}
					/>
					<Label for="radio3">
						Quiero ser Proveedor
					</Label>
				</FormGroup>
				</div>
				<h3>Formulario de registro</h3>
			<div className="campos">
				<div className="cold-md-3">		
						<input
							placeholder="Ingrese su nombre"
							className="form-control"
							type="text"
							name="nombre"
							onChange={gestionarcambios}
							></input>
						
				</div>
				<p></p>
				<div className="cold-md-3">
					
	 				<input
						placeholder="Cédula o R.I.F."
						className="form-control"
						type="text"
						name="identificacion"
						onChange={gestionarcambios}
					></input>
					
				</div>
				<p></p>
				<div className="cold-md-3">
					<Select placeholder="Seleccionar región"
					options = {regiones}
					onChange={gestionarcambios}
					/>
				</div>
				<p></p>
				<div className="cold-md-3">
					<input
					placeholder="Ingrese dirección"
					className="form-control"
					type="text"
					name="direccion"
					onChange={gestionarcambios}
					></input>
				</div>
				<p></p>
				<div className="cold-md-3">
					<input
					placeholder="ejemplo@porsupuesto.com"
					className="form-control"
					type="email"
					name="correo"
					onChange={gestionarcambios}
					></input>
				</div>
				<p></p>
				<div className="cold-md-3">
					<input
					placeholder="Ingrese nro. contacto"
					className="form-control"
					type="text"
					name="contacto"
					onChange={gestionarcambios}
					></input>
				</div>
				<p></p>
				<div className="cold-md-3">
					<input
						placeholder="Ingrese clave"
						className="form-control"
						type="password"
						name="clave"
						onChange={gestionarcambios}
					></input>
				</div>
				<p></p>
				<div className="cold-md-3">
					<input
					placeholder="Confirme clave"
					className="form-control"
					type="password"
					name="confirma"
					onChange={gestionarcambios}
					></input>
				</div>
				<div className="Boton"> 
					<button className="btn btn-primary" type="submit">Aceptar</button>
				</div>
		
				</div>
			</Form>

				
		
	</div> 
	);
	 }
