import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<header className="bg-warning bg-gradient text-white vh-100">
            <div className="container d-flex flex-column h-100 px-4 text-center justify-content-center align-items-center">
                <h1 className="fw-bolder">Welcome to Scrolling Nav</h1>
                <p className="lead">A functional Bootstrap 5 boilerplate for one page scrolling websites</p>
                <a className="btn btn-lg btn-light" href="#about">Start scrolling!</a>
            </div>
        </header>
	);
};
