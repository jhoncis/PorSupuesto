import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import 'animate.css';
import "../../styles/home.css";
import Carousel from '../component/Carousel';
  

export const Home = () => {
	const { store, actions } = useContext(Context);
  
 	return (
         <div>
           <div className="gira px-4 vh-90">
             <Carousel/>
             <h1 className="animate__animated animate__rotateIn" align="center">Porsupuesto</h1>
                <p className="lead" align="center">Bienvenido a tu aplicación para consulta de servicios"</p>
           </div>   
           
           <div className="acerca">
            <h2>Acerca de Nosotros</h2>
              <div className="izquierda">
                <p>Porsupuesto es una propuesta para facilitar a nuestros clientes la tarea de ubicar y contactar proveedores que los acompañen en sus proyectos de remodelación de hogar, oficina o exteriores</p>
             <p> Nuestros proveedores tienen la oportunidad de publicitar sus servicios y la posibilidad de interactuar con clientes potenciales</p>
              </div>
              <div className="derecha">
                 <img src="https://st.depositphotos.com/1010043/3075/i/450/depositphotos_30753345-stock-photo-room-addition.jpg" alt="..." />   
              </div>
           
              
           </div>
          </div>  
  
	);
};