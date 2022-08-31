import React, { Component } from "react";
import { Button,FormGroup,Label,Input,FormText,Form,Col,Row, NavItem,Navbar } from 'reactstrap';
import "../../styles/index.css";


export const About = () => (
	<div className="contenedor px-4 py-4 vh-100">
    <div className="container">
       <div className="main-body">
    
          
         
    
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://st2.depositphotos.com/1757583/11054/i/450/depositphotos_110546762-stock-photo-suppliers-3d-rendering-red-sticker.jpg" alt="Admin" className="rounded-circle" width="150"/>
                    <div className="mt-3">
                      <h4>Luis Lamus</h4>
                      <p className="text-secondary mb-1">Guarenas</p>
                      <p className="text-muted font-size-sm">Ciudad Casarapa</p>
                    
                    </div>
                  </div>
                </div>
              </div>
              </div>
                  
         
          <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Nombre</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <Input
						        	id="usuario"
						        	className="form-control"
					        		type="text"
				        			name="nombre"
				        			Value="Luis Lamus"
				        			disabled="disabled"					
				        		></Input>
                    </div>
                  </div>
                 <hr/>
                  
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Correo</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <Input
					placeholder="usuario@porsupuesto.com"
					className="form-control"
					type="email"
					name="correo"
					disabled="disabled"	
					></Input>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Teléfono</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <Input
					placeholder="Ingrese nro. teléfono"
					className="form-control"
					type="text"
                    value="(212) 316-9847"
					name="contacto"
					disabled="disabled"	
					></Input>
                      
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Dirección</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    <Input
							id="iddireccion"
							className="form-control"
							type="text"
							name="direccion"
							value="Urb. Ciudad Casarapa"
							disabled="disabled"	

						></Input>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-10">
                      <a className="btn btn-primary " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Editar</a>
                      <a className="btn btn-outline-primary " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Imagen</a>
                    </div>
                   
                  </div>


                </div>
              </div>
          </div>
          






          </div>     
        </div>
    </div>   
	</div>	
	
);