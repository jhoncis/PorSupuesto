import React, { Component } from "react";
import ReactStars from 'react-stars'
//import { render } from 'react-dom'


export const Service = () => {
	const ratingChanged = (newRating) => {
		console.log(newRating)
	}
	//Separar las tarjetas
	return(
	<div className="bg-warning vh-100">
		<p className="mt-5 text-center"></p>
		<h1>Ranking de proveedores</h1>
		<div className="my-2 d-flex align-content-stretch justify-content-center flex-wrap">
			<div className="card col-4" style={{width: "18rem"}}>
				<img src="" className="card-img-top" alt=""/>
				<div className="card-body">
					<h5 className="card-title">example</h5>
					<p className="card-text">Ubicacion</p>
					<p className="card-text">
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							color2={'#ffd700'} 
							edit={true}
							value={3}
						/>
  					</p>
					  <button className="btn btn-primary btn-sm">Perfil</button>
				</div>
			</div>
			<div className="card col-4" style={{width: "18rem"}}>
				<img src="" className="card-img-top" alt=""/>
				<div className="card-body">
					<h5 className="card-title">example</h5>
					<p className="card-text">Ubicacion</p>
					<p className="card-text">
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							color2={'#ffd700'} 
							edit={false}
							value={3}
						/>
  					</p>
					  <button className="btn btn-primary btn-sm">Perfil</button>
				</div>
			</div>
			<div className="card col-4" style={{width: "18rem"}}>
				<img src="" className="card-img-top" alt=""/>
				<div className="card-body">
					<h5 className="card-title">example</h5>
					<p className="card-text">Ubicacion</p>
					<p className="card-text">
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							color2={'#ffd700'} 
							edit={false}
							value={3}
						/>
  					</p>
					  <button className="btn btn-primary btn-sm">Perfil</button>
				</div>
			</div>
			<div className="card col-4" style={{width: "18rem"}}>
				<img src="" className="card-img-top" alt=""/>
				<div className="card-body">
					<h5 className="card-title">example</h5>
					<p className="card-text">Ubicacion</p>
					<p className="card-text">
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							color2={'#ffd700'} 
							edit={false}
							value={3}
						/>
  					</p>
					  <button className="btn btn-primary btn-sm">Perfil</button>
				</div>
			</div>
			<div className="card col-4" style={{width: "18rem"}}>
				<img src="" className="card-img-top" alt=""/>
				<div className="card-body">
					<h5 className="card-title">example</h5>
					<p className="card-text">Ubicacion</p>
					<p className="card-text">
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							color2={'#ffd700'} 
							edit={false}
							value={3}
						/>
  					</p>
					  <button className="btn btn-primary btn-sm">Perfil</button>
				</div>
			</div>
			<div className="card col-4" style={{width: "18rem"}}>
				<img src="" className="card-img-top" alt=""/>
				<div className="card-body">
					<h5 className="card-title">example</h5>
					<p className="card-text">Ubicacion</p>
					<p className="card-text">
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							color2={'#ffd700'} 
							edit={false}
							value={3}
						/>
  					</p>
					  <button className="btn btn-primary btn-sm">Perfil</button>
				</div>
			</div>
			<div className="card col-4" style={{width: "18rem"}}>
				<img src="" className="card-img-top" alt=""/>
				<div className="card-body">
					<h5 className="card-title">example</h5>
					<p className="card-text">Ubicacion</p>
					<p className="card-text">
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							color2={'#ffd700'} 
							edit={false}
							value={3}
						/>
  					</p>
					  <button className="btn btn-primary btn-sm">Perfil</button>
				</div>
			</div>
			<div className="card col-4" style={{width: "18rem"}}>
				<img src="" className="card-img-top" alt=""/>
				<div className="card-body">
					<h5 className="card-title">example</h5>
					<p className="card-text">Ubicacion</p>
					<p className="card-text">
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							color2={'#ffd700'} 
							edit={false}
							value={3}
						/>
  					</p>
					<button className="btn btn-primary btn-sm">Perfil</button>
				</div>
			</div>
		</div>
	</div>
)}