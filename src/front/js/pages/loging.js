import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Loging = () => {
	const { store, actions} = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = () => {
		const opts = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		};
		fetch("https://3001-jhoncis-porsupuesto-4ebld26kwsp.ws-us61.gitpod.io/api/token", opts)
			.then(resp => {
				if(resp.status ===200) return resp.json();
				else alert("There has been some error");
			})
			.then()
			.catch(error => {
				console.error("There was an error!!!!", error);
			})

	}
	
	return (
		<div className="container px-4 vh-100 text-center mt-5">
			<h1><p className="mt-5 text-center">Loging</p></h1>
			<input type="text" placeholder="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
			<input type="password" placeholder="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
			<button onClick={handleClick}>Loging</button>
		</div>
	);
}