import React, { Component, Fragment, useState, useContext } from "react";
import ReactStars from "react-stars";
import "../../styles/service.css";
//import { useEffect } from 'react';
//import axios from "axios";

import { Context } from "../store/appContext";

//import { render } from 'react-dom'

export const Ranking = () => {
  const { store, actions } = useContext(Context);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [ranking, setRanking] = useState({
    calificacion: "",
  });

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
                <imput
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
        <div className="row">
          {store.proveedores.map((proveedor, index) => (
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
                        Hogar
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 pt-1">
                    <p className="text-muted mb-0">
                      <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                      Siempre disponibles para todo lo que usted necesite!
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
                    >
                      <i className="bx bx-message-square-dots me-1"></i>{" "}
                      Contactoo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <a href="#" className="text-dark">
                        ARG Servicios y Suministros
                      </a>
                    </h5>
                    <span className="badge badge-soft-success mb-0">
                      Oficina
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                    Siempre disponibles para todo lo que usted necesite!
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    value="5"
                  />
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1"></i> Perfil
                  </button>
                  <button type="button" className="btn btn-primary btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1"></i> Contacto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <a href="#" className="text-dark">
                        Ferre Mundo SO, C.A
                      </a>
                    </h5>
                    <span className="badge badge-soft-danger mb-0">
                      Exteriores
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                    Siempre disponibles para todo lo que usted necesite!
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    value="2.5"
                  />
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1"></i> Perfil
                  </button>
                  <button type="button" className="btn btn-primary btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1"></i> Contacto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar-md">
                    <div className="avatar-title bg-soft-primary text-primary display-6 m-0 rounded-circle">
                      <i className="bx bxs-user-circle"></i>
                    </div>
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <a href="#" className="text-dark">
                        Global Prime Venezuela
                      </a>
                    </h5>
                    <span className="badge badge-soft-danger mb-0">
                      Oficina
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                    Siempre disponibles para todo lo que usted necesite!
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    value="4.5"
                  />
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1"></i> Perfil
                  </button>
                  <button type="button" className="btn btn-primary btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1"></i> Contacto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="avatar-md">
                    <div className="avatar-title bg-soft-primary text-primary display-6 m-0 rounded-circle">
                      <i className="bx bxs-user-circle"></i>
                    </div>
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <a href="#" className="text-dark">
                        FERREMUNDIAL PROTO 2020 C.A
                      </a>
                    </h5>
                    <span className="badge badge-soft-success mb-0">Hogar</span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                    Siempre disponibles para todo lo que usted necesite!
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    value="1.5"
                  />
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1"></i> Perfil
                  </button>
                  <button type="button" className="btn btn-primary btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1"></i> Contacto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <a href="#" className="text-dark">
                        INVERSIONES REFITECA, C.A.
                      </a>
                    </h5>
                    <span className="badge badge-soft-danger mb-0">
                      Exteriores
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                    Siempre disponibles para todo lo que usted necesite!
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
                  <button type="button" className="btn btn-primary btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1"></i> Contacto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <a href="#" className="text-dark">
                        EMICA MAYOR FERRETERO C.A.
                      </a>
                    </h5>
                    <span className="badge badge-soft-danger mb-0">Hogar</span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                    Siempre disponibles para todo lo que usted necesite!
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    value="2.5"
                  />
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1"></i> Perfil
                  </button>
                  <button type="button" className="btn btn-primary btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1"></i> Contacto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="flex-1 ms-3">
                    <h5 className="font-size-16 mb-1">
                      <a href="#" className="text-dark">
                        Ferreteria San Lorenzo
                      </a>
                    </h5>
                    <span className="badge badge-soft-success mb-0">
                      Oficina
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-1">
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>
                    Siempre disponibles para todo lo que usted necesite!
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                    value="4.5"
                  />
                </div>
                <div className="d-flex gap-2 pt-4">
                  <button
                    type="button"
                    className="btn btn-soft-primary btn-sm w-50"
                  >
                    <i className="bx bx-user me-1"></i> Perfil
                  </button>
                  <button type="button" className="btn btn-primary btn-sm w-50">
                    <i className="bx bx-message-square-dots me-1"></i> Contacto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
