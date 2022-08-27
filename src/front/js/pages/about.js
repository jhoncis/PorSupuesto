import React, { Component } from "react";
import { Button,FormGroup,Label,Input,FormText,Form,Col,Row, NavItem } from 'reactstrap';

export const About = () => (
	<div className="container px-4 vh-100">
		<h2>Proveedor</h2>
		<div className="">
		<Row>
    	<Col md={6}>
      			<FormGroup>	
						<Input
							placeholder="Nombre del Proveedor"
							id="proveedor"
							className="form-control"
							type="text"
							name="nombre"
							Value="Aserradero Esanos"
							disabled="disabled"					
						></Input>
						<Label for="proveedor"></Label>
				</FormGroup>
		</Col>
		<Col md={6}>
      			<FormGroup>	
						<Input
							placeholder="Region"
							id="idregion"
							className="form-control"
							type="text"
							name="region"
							value="Distrito Capital"
							disabled="disabled"					
						></Input>
						<Label for="region"></Label>
				</FormGroup>
		</Col>
		<Col md={6}>
      			<FormGroup>	
						<Input
							placeholder="Dirección"
							id="iddireccion"
							className="form-control"
							type="text"
							name="direccion"
							value="Av. Principal de Boleíta Sur"
							disabled="disabled"	

						></Input>
						<Label for="region"></Label>
				</FormGroup>
		</Col>
		<div className="d-grid gap-2 d-md-block">
					<Button type="button" className="btn btn-primary" data-bs-toggle="button">Gestionar clientes</Button>
		 			<Button type="button" className="btn btn-primary" data-bs-toggle="button">Descargar modelo Presupuesto</Button>
		 			<Button type="button" className="btn btn-primary" data-bs-toggle="button">Actualizar categorías</Button>
					<Button type="button" className="btn btn-primary" data-bs-toggle="button">Perfil Usuario</Button>
		</div>
		</Row>
	</div>	
	</div>
);