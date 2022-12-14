import React, { Component, Fragment, useState, useContext } from "react";
import ReactStars from "react-stars";
import "../../styles/service.css";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from 'reactstrap';
import { useEffect } from 'react';
//import axios from "axios";

import { Context } from "../store/appContext";

export const Ranking = () => {
  const { store, actions } = useContext(Context);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [ranking, setRanking] = useState({
    calificacion: "",
  });
  const [busqueda, setBusqueda]= useState("");
  const handleChange=e=>{
    setBusqueda(e.target.value);
    if(busqueda==" "){
      setTablaUsuarios(store.proveedores)
    }else{
      filtrar(e.target.value); 
    }
  }
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.categoria.descripcion_categoria.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    if(terminoBusqueda==""){
      setTablaUsuarios(store.proveedores)
      return
    }
    setTablaUsuarios(resultadosBusqueda);
  }
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  useEffect(()=>{
    setTablaUsuarios(store.proveedores);
    },[store.proveedores])

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const changeUnmountOnClose = (e) => {
    let { value } = e.target;
    setUnmountOnClose(JSON.parse(value));
  };

  return (
    <div className="contenedor px-4 py-4 vh-100">
      <div className="d-flex justify-content-start">
        <p className="">
          <h1>Ranking de proveedores</h1>
        </p>
        <div className="col-4 col-md-4 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
              </div>
              <div className="col">
                <input
                  value={busqueda}
                  onChange={handleChange}
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Buscar categoria"
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-lg btn-success" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="d-flex wrap">
          {tablaUsuarios && tablaUsuarios.map((proveedor, index) => (
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sX04pUsoaJbnhxK3M2wt3aJCHApOG7FaRA&usqp=CAU"
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-1 ms-3">
                      <h5 className="font-size-16 mb-1">
                        <a href="#" className="text-dark">
                          {proveedor.nombre}
                        </a>
                      </h5>
                      <span className="badge badge-soft-success mb-0">
                        {proveedor.categoria.descripcion_categoria}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 pt-1">
                    <p className="text-muted mb-0">
                      <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                      {proveedor.descripcion}
                    </p>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                      edit={false}
                      value="3.5"
                    />
                  </div>
                  <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1"></i> Perfil
                  </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm w-50"
                      onClick={toggle}
                    >
                      <i className="bx bx-message-square-dots me-1">Calificar</i>{" "}
                      <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
                        <ModalHeader toggle={toggle}>Dejanos  tu Calificacion!</ModalHeader>
                        <ModalBody>
                          <Input
                            type="textarea"
                            placeholder="Cuentanos tu experiencia"
                            rows={5}
                          />
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={24}
                              color2={"#ffd700"}
                              edit={true}
                              value="3.5"
                            />
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={toggle}>
                            Enviar
                          </Button>{' '}
                          <Button color="secondary" onClick={toggle}>
                            Cancelar
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
