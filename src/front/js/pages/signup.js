import React, { Component, Fragment, useState, useContext } from "react";
//import { render } from "react-dom";
import { Button,FormGroup,Label,Input,FormText,Form,Col,Row, NavItem } from 'reactstrap';
import Select from 'react-select';
import "../../styles/index.css";
import { Context } from "../store/appContext";


export const Signup = (props) => {
	const {store, actions} = useContext(Context)
	const[opcion,setopcion] = useState("N");
	const cambioestadoopcion=e=>{
		setopcion(e.target.value);
	}
	const[usuario,setUsuario] = useState({
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
		//console.log(evento.target.value)
		setUsuario({
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
		

	
	const enviarDatos = (evento) => {
		evento.preventDefault();
	}
	

	return (<div className="contenedor px-4 py-4 vh-100">
		
		<img src="https://picsum.photos/id/1/367/267" className="circular--square " alt="..."></img>
		
		
		<div className="w-50 p-3 style=background-color: #eee;">
		
			<Form className="row" onSubmit={enviarDatos}> 
				<div className="radiobutton">
					<FormGroup>
						<Input
							id="radio1"
							type="radio"
							value="N"
							checked = {opcion== "N" ? true : false }
							onChange={cambioestadoopcion}
						/>
						<Label for="radio1">
							Natural    
						</Label>
				
						</FormGroup>
						<FormGroup>
					<Input
						id="radio2"
						type="radio"
						value="J"
						checked = {opcion== "J" ? true : false }
						onChange={cambioestadoopcion}
					/>
					<Label for="radio2">
						Jurídica
					</Label>
				</FormGroup>
				<FormGroup>
					<Input
					id="radio3"
					type="radio"
					value="P"
					checked = {opcion== "P" ? true : false }
					onChange={cambioestadoopcion}
					/>
					<Label for="radio3">
						Proveedor
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
					name="region"
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
			<Col md={4}>
				<h6>Categoría Hogar</h6>
				<FormGroup>
					<div className="d-flex">
					<Input
					className="form-control"
					id="hogar1"
					type="checkbox"
					name="catehogar"
					value="Remodelar cocina"
					onChange={gestionarcambios}
					></Input>
					<Label for="hogar1">
						Remodelar cocina</Label>
					</div>
					<div className="d-flex">
					<Input
					className="form-control"
					id="hogar2"
					type="checkbox"
					name="catehogar"
					value="Reparar gabinetes de cocina"
					onChange={gestionarcambios}
					></Input>
					<Label for="hogar2">
					Gabinetes de cocina</Label>
					</div>
					<div className="d-flex">
					<Input
					className="form-control"
					id="hogar3"
					type="checkbox"
					name="catehogar"
					value="Remodelar dormitorio"
					onChange={gestionarcambios}
					></Input>
					<Label for="hogar3">
					Remodelar dormitorio</Label>
					</div>
				</FormGroup>
			</Col>
			<Col md={4}>
				<h6>Categoría Oficina</h6>
				<FormGroup>
					
					<div className="d-flex">
					
					<Input
					id="oficina1"
					className="form-control"
					type="checkbox"
					name="cateoficina"
					value="Remodelar recepción"
					onChange={gestionarcambios}
					></Input>
					<Label for="oficina1">
					Remodelar recepción</Label>
					</div>
					<div className="d-flex">
					<Input
					className="form-control"
					id="oficina2"
					type="checkbox"
					name="cateoficina"
					value="Pintar oficina"
					onChange={gestionarcambios}
					></Input>
					<Label for="oficina2">
					Pintar oficina</Label>
					</div>
					<div className="d-flex">
					<Input
					className="form-control"
					id="oficina3"
					type="checkbox"
					name="cateoficina"
					value="Remodelar oficina"
					onChange={gestionarcambios}
					></Input>
					<Label for="oficina3">
					Remodelar oficina</Label>
					</div>
				</FormGroup>
			</Col>
			<Col md={4}>
				<h6>Categoría Exteriores</h6>
				<FormGroup>
					
					<div className="d-flex">
					<Input
					className="form-control"
					id="exterior1"
					type="checkbox"
					name="cateoficina"
					value="Remodelar recepción"
					onChange={gestionarcambios}
					></Input>
					<Label for="exterior1">
					Mantenimiento jardín</Label>
					</div>
					
					<div className="d-flex">
					<Input
					className="form-control"
					id="exterior2"
					type="checkbox"
					name="cateoficina"
					value="Hacer jardín paisajismo"
					onChange={gestionarcambios}
					></Input>
					<Label for="exterior2">
					Hacer jardín paisajismo</Label>
					</div>
					
					<div className="d-flex">
					<Input
					className="form-control"
					id="exterior3"
					type="checkbox"
					name="cateoficina"
					value="Remodelar oficina"
					onChange={gestionarcambios}
					></Input>
					<Label for="exterior3">
					Mantenimiento piscina</Label>
					</div>
				</FormGroup>
			</Col>

</Row>
			
				<div className="Boton"> 
					<button className="btn btn-primary" type="submit" onClick={registrar}>Aceptar</button>
				</div>
		
			
			</Form>
		</div>
	</div>	
		
	
	);
	 }
