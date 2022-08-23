import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import 'animate.css';
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<header className="bg-warning bg-gradient text-white vh-100">
            <div className="container d-flex flex-column h-100 px-4 text-center justify-content-center align-items-center">
                <h1 className="animate__animated animate__rotateIn">Porsupuesto</h1>
                <p className="lead">Bienvenido a tu aplicación para consulta de servicios</p>
                <a className="btn btn-lg btn-light" href="#about">Start scrolling!</a>
            </div>
        </header>
	);
};
