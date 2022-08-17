import React, { Component, Fragment } from "react";
import { Button,FormGroup,Label,Input } from 'reactstrap';
import "../../styles/index.css";


export const Signup = (props) => (
	<div className="contenedor px-4 py-4 vh-100">
	<div className="tipouser">
   	<FormGroup className="radiobutton">
		<FormGroup>
			<Input
			id="radio1"
			type="radio"
			value="1"
			/>
			<Label for="radio1">
				Persona Natural    
			</Label>
		</FormGroup>
		
		<FormGroup>
			<Input
			id="radio2"
			type="radio"
			value="1"
			/>
			<Label for="radio2">
				Persona Jurídica
			</Label>
		</FormGroup>

		<FormGroup>
		<Input
		id="radio3"
		type="radio"
		value="1"
		/>
		<Label for="radio3">
			Quiero ser Proveedor
		</Label>
		</FormGroup>

	</FormGroup>
	</div>

<div className="Plantilla">
	<Fragment>
	<h3>Formulario de registro</h3>
	<div className="fila">
		<div className="cold-md-3">
			<input
				placeholder="Ingrese su nombre"
				className="form-control"
			></input>
		</div>
		<p></p>
		<div className="cold-md-3">
			<input
				placeholder="Ingrese nro. de identificación"
				className="form-control"
			></input>
		</div>
		<p></p>
		<div className="cold-md-3">
			<input
				placeholder="Ingrese dirección"
				className="form-control"
			></input>
		</div>
		<p></p>
		<div className="cold-md-3">
			<input
				placeholder="Ingrese nro. de identificación"
				className="form-control"
			></input>
		</div>
		<p></p>		
		<div className="cold-md-3">
			<input
				placeholder="ejemplo@porsupuesto.com"
				className="form-control"
			></input>
		</div>
		<p></p>
		<div className="cold-md-3">
			<input
				placeholder="Ingrese nro. contacto"
				className="form-control"
			></input>
		</div>
		<p></p>
		<div className="cold-md-3">
			<input
				placeholder="Ingrese clave"
				className="form-control"
			></input>
		</div>
		<p></p>
		<div className="cold-md-3">
			<input
				placeholder="Confirme clave"
				className="form-control"
			></input>
		</div>
		<p></p>
		<div className="cold-md-3">
			<button className="btn btn-primary" type="submit">Aceptar</button>
		</div>
	</div>
	</Fragment>
	
</div>


	</div>
);