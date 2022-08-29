import React, { Component, Fragment, useState, useContext } from "react";
//import { render } from "react-dom";
import { Button,FormGroup,Label,Input,FormText,Form,Col,Row } from 'reactstrap';
import Select from 'react-select';
import "../../styles/index.css";
import { Context } from "../store/appContext";


export const Signup = (props) => {
	const {store, actions} = useContext(Context)
	const[opcion,setopcion] = useState(1);
	const cambioestadoopcion=e=>{
		setopcion(e.target.value);
	}
	const[usuario,setusuario] = useState({
		nombre: 'samuel',
		identificacion: '45678920',
		region:'capital ',
		direccion:'caracas',
		correo: 'samuel@hotmail.com ',
		contacto: 'samuel',
		clave: '123456',
		confirma: '123456',
		categoria: 'hogar',
		subcategoria: 'exterior',
		typeuser: 'n',
		letraidentificacion: 'j',
		photo: '',
		phone: '041457895'
	});
	const gestionarcambios = (evento) => {
		console.log(evento.target.value)
		setusuario({
			...usuario,
			[evento.target.name]: evento.target.value
		})
	}
	const registrar = (evento) => {
		evento.preventDefault();
		actions.signup(usuario)
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
	const categoria = [
		{label: 'Hogar', value: 'Hogar'},
		{label: 'Oficina', value: 'Oficina'},
		{label: 'Exteriores', value: 'Exteriores'},
		
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
  	<Row>
    	<Col md={6}>
      			<FormGroup>	
						<Input
							placeholder="Ingrese su nombre"
							className="form-control"
							type="text"
							name="nombre"
							onChange={gestionarcambios}
						></Input>
				</FormGroup>
		</Col>
		<Col md={6}>
    			<FormGroup>					
	 				<Input
						placeholder="Cédula o R.I.F."
						className="form-control"
						type="text"
						name="identificacion"
						onChange={gestionarcambios}
					></Input>
			</FormGroup>
    	</Col>
	
			<Col md={6}>
      			<FormGroup>
					<Select placeholder="Seleccionar región"
					options = {regiones}
					onChange={gestionarcambios}
					/>
				</FormGroup>
			</Col>
			<Col md={6}>
				<FormGroup>
					<Input
					placeholder="Ingrese dirección"
					className="form-control"
					type="text"
					name="direccion"
					onChange={gestionarcambios}
					></Input>
					</FormGroup>
			</Col>

			<Col md={6}>
					<FormGroup>
					<Input
					placeholder="ejemplo@porsupuesto.com"
					className="form-control"
					type="email"
					name="correo"
					onChange={gestionarcambios}
					></Input>
				</FormGroup>
				</Col>
			<Col md={6}>
				<FormGroup>
				<Input
					placeholder="Ingrese nro. teléfono"
					className="form-control"
					type="text"
					name="contacto"
					onChange={gestionarcambios}
					></Input>
				</FormGroup>
				</Col>
					
				<Col md={6}>
				<FormGroup>
					<Input
						placeholder="Ingrese clave"
						className="form-control"
						type="password"
						name="clave"
						onChange={gestionarcambios}
					></Input>
					</FormGroup>
				</Col>
				
				<Col md={6}>
				<FormGroup>
					<Input
					placeholder="Confirme clave"
					className="form-control"
					type="password"
					name="confirma"
					onChange={gestionarcambios}
					></Input>
				</FormGroup>
				</Col>
		</Row>
			<h5>Solamente Proveedores</h5>
<Row>
		<Col md={6}>
    			<FormGroup>					
	 				<Input
						placeholder="Descripción de la Empresa"
						className="form-control"
						type="text"
						name="descripcion"
						onChange={gestionarcambios}
					></Input>
				</FormGroup>
    	</Col>
			<Col md={6}>
      			<FormGroup>
				<Input
					placeholder="Persona Contacto"
						className="form-control"
						type="text"
						name="contacto"
						onChange={gestionarcambios}
				
				></Input>
				</FormGroup>
			</Col>
			<Col md={6}>
				<FormGroup>
					<Select placeholder="Categoría de servicio"
					options = {categoria}
					onChange={gestionarcambios}
					/>
				</FormGroup>
			</Col>
			<Col md={6}>
				<FormGroup>
					<Select placeholder="Sub-categoría de servicio"
					options = {categoria}
					onChange={gestionarcambios}
					/>
					</FormGroup>
			</Col>

</Row>
			<div className="campos">
				<div className="Boton"> 
					<button className="btn btn-primary" type="submit" onClick={registrar}>Aceptar</button>
				</div>
		
				</div>
			</Form>

	</div>	
		
	
	);
	 }
