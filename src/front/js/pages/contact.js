import React, { Component, useState, useContext } from "react";

import { Link } from "react-router-dom";
import {
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  Form,
  Col,
  Row,
  NavItem,
  Navbar,
} from "reactstrap";
import "../../styles/index.css";

import { Context } from "../store/appContext";

export const Contact = (props) => {
  const { store, actions } = useContext(Context);

  
  const [Imagen, setImagen] = useState("");
  const [Loading, setLoading] = useState(false);
  const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append("upload_preset", "imagenes");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/porsupuesto/upload",
      {
        method: "POST",
        body: data,
      }
    );
  };

  return (
    <div className="contenedor px-4 py-4 vh-90">
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35717211-stock-illustration-vector-user-icon.jpg"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{store.usuario && store.usuario.name}</h4>
                      <p className="text-secondary mb-1">
                        {store.usuario && store.usuario.region}
                      </p>
                      <p className="text-muted font-size-sm">
                        {store.usuario && store.usuario.direccion}
                        </p>
                      <p className="text-muted font-size-sm">
                      {store.usuario && store.usuario.email}
                      </p>
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
                        Value={store.usuario && store.usuario.name}
                        disabled="disabled"
                      ></Input>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tel??fono</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Input
                        placeholder="Ingrese nro. tel??fono"
                        className="form-control"
                        type="text"
                        value={store.usuario && store.usuario.phone}
                        name="contacto"
                        disabled="disabled"
                      ></Input>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Direcci??n</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <Input
                        id="iddireccion"
                        className="form-control"
                        type="text"
                        name="direccion"
                        value={store.usuario && store.usuario.direccion}
                        disabled="disabled"
                      ></Input>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-10">
                      <a
                        className="btn btn-primary "
                        target="__blank"
                        href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >
                        Editar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">

				     <div className="col-lg-3 col-md-6 col-12 pt-2">
					      <div className="card service-wrapper rounded border-0 shadow p-4">
					         	<div className="icon text-center text-custom h1 shadow rounded bg-white">
					         		<span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" className="uim-tertiary" rx="3"></rect><path className="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"></path></svg></span>
                		</div>
						     <div className="content mt-4">
                    		<h5 className="title">Testimoniales</h5>
					          		<p className="text-muted mt-3 mb-0">Sube tus im??genes testimoniales de tus proyectos con nuestros proveedores</p>
							          <div className="mt-3">
                        			                 			 
                              <FormGroup>
                                 <Input
                                     id="exampleFile"
                                     name="file"
                                     type="file"
                                     onChange={upLoadImage}
                                  />
                               </FormGroup>
                         
                         
                         </div>
					    	</div>
					    	<div className="big-icon h1 text-custom">
                    <span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" class="uim-tertiary" rx="3"></rect><path class="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"></path></svg></span>
                </div>
              </div>
            </div>


        <div className="col-lg-3 col-md-6 col-12  pt-2">
					      <div className="card service-wrapper rounded border-0 shadow p-4">
					         	<div className="icon text-center text-custom h1 shadow rounded bg-white">
					         		<span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" className="uim-tertiary" rx="3"></rect><path className="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"></path></svg></span>
                		</div>
						     <div className="content mt-4">
                    		<h5 className="title">Ranking Proveedores</h5>
					          		<p className="text-muted mt-3 mb-0">Consulta el ranking de nuestros proveedores</p>
							          <div className="mt-3">
                        			<a href="javascript:void(0)" className="text-custom"><Link to ="/ranking">Ranking</Link> <i className="mdi mdi-chevron-right"></i></a>
                   			 </div>
					    	</div>
					    	<div className="big-icon h1 text-custom">
                    <span className="uim-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><rect width="20" height="15" x="2" y="3" class="uim-tertiary" rx="3"></rect><path class="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"></path></svg></span>
                </div>
					  </div>
				</div>

        












			</div>
		   
        </div>
      </div>
    </div>
  );
};
