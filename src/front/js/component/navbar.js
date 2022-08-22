import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
    const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container px-4">
                <Link className="navbar-brand" to="/">PorSupuesto</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    {!store.token?
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2"><Link to="/about">About</Link></li>
                        <li className="nav-item mx-2"><Link to="/service">Service</Link></li>
						<li className="nav-item mx-2"><Link to="/contact">Contact</Link></li>
						<li className="nav-item mx-2"><Link to="/loging">Loging</Link></li>
						<li className="nav-item mx-2"><Link to="/signup">Sign Up</Link></li>
                    </ul>
                    :
                    <button onClick={() => actions.logout()} className="btn btn-primary"> Log out </button>
                    }
                </div>
            </div>
        </nav>
	);
};
