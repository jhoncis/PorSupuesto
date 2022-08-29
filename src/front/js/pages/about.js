import React, { Component } from "react";
import { Button,FormGroup,Label,Input,FormText,Form,Col,Row, NavItem,Card,CardBody,CardTitle,CardSubtitle,CardText,CardImg,CardGroup } from 'reactstrap';
import "../../styles/index.css";


export const About = () => (
	<div className="contenedor px-4 py-4 vh-100">
    <div className="infoprov">
		  <Row>
			<h3>Usuario Proveedor</h3>
      
    	<Col md={6}>
      			<FormGroup>	
						<Input
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
    		</Row>
    </div>
    <div className="opciones">
		<CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://st2.depositphotos.com/1071909/6630/i/450/depositphotos_66305687-stock-photo-marketing-segmentation-customers-care.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h6">
	  Gestionar clientes
      </CardTitle>
      <CardText>
        Calificación de nuestros clientes.Contacta clientes potenciales.
      </CardText>
      <Button>
        Clientes
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://st2.depositphotos.com/1202020/45957/i/450/depositphotos_459573162-stock-photo-illustration-many-pawns-segmented-different.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h6">
	  Actualizar categorías
      </CardTitle>
      <CardText>
        Manten actualizado los servicios que ofreces.
      </CardText>
      <Button>
        Categoría
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://st2.depositphotos.com/3591429/12476/i/450/depositphotos_124764912-stock-photo-man-with-digital-tablet.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h6">
        Perfil de Usuario
      </CardTitle>
      <CardText>
        Edita tu perfil de usuario
      </CardText>
      <Button>
        Usuario
      </Button>
    </CardBody>
  </Card>
</CardGroup>	
</div>
	</div>	
	
);