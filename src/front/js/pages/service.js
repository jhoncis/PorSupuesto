import React, { Component } from "react";
import ReactStars from 'react-stars'
import "../../styles/service.css";
//import {useEffect, useState} from 'react';
//import axios from "axios";


//import { render } from 'react-dom'



export const Service = () => {
	const ratingChanged = (newRating) => {
		console.log(newRating)
	}
	return(
	<div className="contenedor px-4 py-4 vh-100">
		<p className="text-center"></p>
		<h1>Ranking de proveedores</h1>
		<div className="container">
			<div className="row">
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sX04pUsoaJbnhxK3M2wt3aJCHApOG7FaRA&usqp=CAU" alt="" className="avatar-md rounded-circle img-thumbnail" /></div>
								<div className="flex-1 ms-3">
									<h5 className="font-size-16 mb-1"><a href="#" className="text-dark">Ferreteria EPA</a></h5>
									<span className="badge badge-soft-success mb-0">Hogar</span>
								</div>
							</div>
							<div className="mt-3 pt-1">
								<p className="text-muted mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>Siempre disponibles para todo lo que usted necesite!</p>
								<ReactStars
									count={5}
									onChange={ratingChanged}
									size={24}
									color2={'#ffd700'} 
									edit={false}
									value={3}
            					/>
							</div>
							<div className="d-flex gap-2 pt-4">
								<button type="button" className="btn btn-soft-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Perfil</button>
								<button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contactoo</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="avatar-md rounded-circle img-thumbnail" /></div>
								<div className="flex-1 ms-3">
									<h5 className="font-size-16 mb-1"><a href="#" className="text-dark">ARG Servicios y Suministros</a></h5>
									<span className="badge badge-soft-success mb-0">Oficina</span>
								</div>
							</div>
							<div className="mt-3 pt-1">
								<p className="text-muted mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>Siempre disponibles para todo lo que usted necesite!</p>
								<ReactStars
									count={5}
									onChange={ratingChanged}
									size={24}
									color2={'#ffd700'} 
									edit={false}
									value={3}
								/>
							</div>
							<div className="d-flex gap-2 pt-4">
								<button type="button" className="btn btn-soft-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Perfil</button>
								<button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contacto</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="avatar-md rounded-circle img-thumbnail" /></div>
								<div className="flex-1 ms-3">
									<h5 className="font-size-16 mb-1"><a href="#" className="text-dark">Ferre Mundo SO, C.A</a></h5>
									<span className="badge badge-soft-danger mb-0">Exteriores</span>
								</div>
							</div>
							<div className="mt-3 pt-1">
								<p className="text-muted mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>Siempre disponibles para todo lo que usted necesite!</p>
								<ReactStars
									count={5}
									onChange={ratingChanged}
									size={24}
									color2={'#ffd700'} 
									edit={false}
									value={3}
								/>
							</div>
							<div className="d-flex gap-2 pt-4">
								<button type="button" className="btn btn-soft-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Perfil</button>
								<button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contacto</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div className="avatar-md">
									<div className="avatar-title bg-soft-primary text-primary display-6 m-0 rounded-circle"><i className="bx bxs-user-circle"></i></div>
								</div>
								<div className="flex-1 ms-3">
									<h5 className="font-size-16 mb-1"><a href="#" className="text-dark">Global Prime Venezuela</a></h5>
									<span className="badge badge-soft-danger mb-0">Oficina</span>
								</div>
							</div>
							<div className="mt-3 pt-1">
								<p className="text-muted mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>Siempre disponibles para todo lo que usted necesite!</p>
								<ReactStars
									count={5}
									onChange={ratingChanged}
									size={24}
									color2={'#ffd700'} 
									edit={false}
									value={3}
								/>
							</div>
							<div className="d-flex gap-2 pt-4">
								<button type="button" className="btn btn-soft-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Perfil</button>
								<button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contacto</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div className="avatar-md">
									<div className="avatar-title bg-soft-primary text-primary display-6 m-0 rounded-circle"><i className="bx bxs-user-circle"></i></div>
								</div>
								<div className="flex-1 ms-3">
									<h5 className="font-size-16 mb-1"><a href="#" className="text-dark">FERREMUNDIAL PROTO 2020 C.A</a></h5>
									<span className="badge badge-soft-success mb-0">Hogar</span>
								</div>
							</div>
							<div className="mt-3 pt-1">
								<p className="text-muted mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>Siempre disponibles para todo lo que usted necesite!</p>
								<ReactStars
									count={5}
									onChange={ratingChanged}
									size={24}
									color2={'#ffd700'} 
									edit={false}
									value={3}
								/>
							</div>
							<div className="d-flex gap-2 pt-4">
								<button type="button" className="btn btn-soft-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Perfil</button>
								<button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contacto</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="avatar-md rounded-circle img-thumbnail" /></div>
								<div className="flex-1 ms-3">
									<h5 className="font-size-16 mb-1"><a href="#" className="text-dark">INVERSIONES REFITECA, C.A.</a></h5>
									<span className="badge badge-soft-danger mb-0">Exteriores</span>
								</div>
							</div>
							<div className="mt-3 pt-1">
								<p className="text-muted mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>Siempre disponibles para todo lo que usted necesite!</p>
								<ReactStars
									count={5}
									onChange={ratingChanged}
									size={24}
									color2={'#ffd700'} 
									edit={false}
									value={3}
								/>
							</div>
							<div className="d-flex gap-2 pt-4">
								<button type="button" className="btn btn-soft-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Perfil</button>
								<button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contacto</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" className="avatar-md rounded-circle img-thumbnail" /></div>
								<div className="flex-1 ms-3">
									<h5 className="font-size-16 mb-1"><a href="#" className="text-dark">EMICA MAYOR FERRETERO C.A.</a></h5>
									<span className="badge badge-soft-danger mb-0">Hogar</span>
								</div>
							</div>
							<div className="mt-3 pt-1">
								<p className="text-muted mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>Siempre disponibles para todo lo que usted necesite!</p>
								<ReactStars
									count={5}
									onChange={ratingChanged}
									size={24}
									color2={'#ffd700'} 
									edit={false}
									value={3}
								/>
							</div>
							<div className="d-flex gap-2 pt-4">
								<button type="button" className="btn btn-soft-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Perfil</button>
								<button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contacto</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card">
						<div className="card-body">
							<div className="d-flex align-items-center">
								<div><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" className="avatar-md rounded-circle img-thumbnail" /></div>
								<div className="flex-1 ms-3">
									<h5 className="font-size-16 mb-1"><a href="#" className="text-dark">Ferreteria San Lorenzo</a></h5>
									<span className="badge badge-soft-success mb-0">Oficina</span>
								</div>
							</div>
							<div className="mt-3 pt-1">
								<p className="text-muted mb-0"><i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>Siempre disponibles para todo lo que usted necesite!</p>
								<ReactStars
									count={5}
									onChange={ratingChanged}
									size={24}
									color2={'#ffd700'} 
									edit={false}
									value={3}
								/>
							</div>
							<div className="d-flex gap-2 pt-4">
								<button type="button" className="btn btn-soft-primary btn-sm w-50"><i className="bx bx-user me-1"></i> Perfil</button>
								<button type="button" className="btn btn-primary btn-sm w-50"><i className="bx bx-message-square-dots me-1"></i> Contacto</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)}