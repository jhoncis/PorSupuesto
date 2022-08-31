import React, { Component } from "react";
import { Button,FormGroup,Label,Input,FormText,Form,Col,Row, NavItem,Navbar } from 'reactstrap';
import "../../styles/index.css";
import "../../styles/botones.css";


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
                      <h4>Aserradero Esanos</h4>
                      <p className="text-secondary mb-1">Caracas</p>
                      <p className="text-muted font-size-sm">Av. principal de Boleíta</p>
					  <p className="text-muted font-size-sm">ejemplo@porsupuesto.com</p>
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
						        	id="proveedor"
						        	className="form-control"
					        		type="text"
				        			name="nombre"
				        			Value="Aserradero Esanos"
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
          value="(239) 816-9029"
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
							value="Av. Principal de Boleíta Sur"
							disabled="disabled"	

						></Input>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Región</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <Input
				  		placeholder="Seleccione región"
      					id="exampleSelect"
      					name="region"
    					  type="select"
                value="Distrito Capital"
                disabled="disabled"
  				  >
     					 <option>
     					  	 Amazonas
   						</option>
    					<option>
	 						 Anzoátegui
      					</option>
						<option>
							Apure
   						</option>
    					<option>
							Aragua
      					</option>
						  <option>
							Barinas
   						</option>
    					<option>
							Bolívar
      					</option>
						<option>
							Carabobo
							</option>
    					<option>
							Cojedes
      					</option>
						  <option>
						  Delta Amacuro
   						</option>
    					<option>
						Distrito Capital
      					</option>
						<option>
						Falcón
   						</option>
    					<option>
						Guárico
      					</option>
						  <option>
						  La Guaira
   						</option>
    					<option>
						Lara
      					</option>
						<option>
						Mérida
   						</option>
    					<option>
						Miranda
      					</option>
						  <option>
						  Monagas
   						</option>
    					<option>
						Nueva Esparta
      					</option>
						<option>
						Portuguesa
   						</option>
    					<option>
						Sucre
      					</option>
						  <option>
						  Táchira
   						</option>
    					<option>
						Trujillo
      					</option>
						<option>
						Yaracuy
   						</option>
    					<option>
						Zulia
      					</option>
						  <option>
						  Dependencias Federales
   						</option>
	  				</Input>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-10">
                      <a className="btn btn-primary " target="__blank" href="">Editar</a>
                    </div>
                   
                  </div>


                </div>
              </div>
          	</div>
		
			<div className="row">

				<div className="col-lg-3 col-md-6 col-12 pt-2">
					<div className="card service-wrapper rounded border-0 shadow p-4">
						<div className="icon text-center text-custom h1 shadow rounded bg-white">
							<span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" className="uim-tertiary" rx="3"></rect><path class="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"></path></svg></span>
                		</div>
						<div className="content mt-4">
                    		<h5 className="title">Gestionar Clientes</h5>
							<p className="text-muted mt-3 mb-0">Conoce tus clientes potenciales, sus necesidades a nivel de servicio</p>
							<div className="mt-3">
                        			<a href="javascript:void(0)" className="text-custom">Gestionar <i className="mdi mdi-chevron-right"></i></a>
                   			 </div>
						</div>
						<div className="big-icon h1 text-custom">
                    <span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" className="uim-tertiary" rx="3"></rect><path className="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"></path></svg></span>
                </div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 col-12  pt-2">
					<div className="card service-wrapper rounded border-0 shadow p-4">
						<div className="icon text-center text-custom h1 shadow rounded bg-white">
							<span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" className="uim-tertiary" rx="3"></rect><path className="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"></path></svg></span>
                		</div>
						<div className="content mt-4">
                    		<h5 className="title">Calificar Clientes</h5>
							<p className="text-muted mt-3 mb-0">Califica los clientes de la comunidad Porsupuesto</p>
							<div className="mt-3">
                        			<a href="javascript:void(0)" className="text-custom">Calificar <i className="mdi mdi-chevron-right"></i></a>
                   			 </div>
						</div>
						<div className="big-icon h1 text-custom">
                    <span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" className="uim-tertiary" rx="3"></rect><path className="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"></path></svg></span>
                </div>
					</div>
				</div>



			</div>
		
		
		
		
		
		
		
		
		





		
          
		  </div>
		  </div>
              
        
    </div>   

	
	



	
	
	
	
	
	

	</div>	
	
);