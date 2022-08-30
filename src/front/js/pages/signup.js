import React, { Component, Fragment, useState, useContext } from "react";
//import { render } from "react-dom";
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
} from "reactstrap";
import Select from "react-select";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Signup = (props) => {
  const { store, actions } = useContext(Context);
  const [opcion, setopcion] = useState();
  const cambioestadoopcion = (e) => {
    setopcion(e.target.value);
    setUsuario({ ...usuario, typeuser: e.target.value });
  };
  const [usuario, setUsuario] = useState({
    nombre: "",
    identificacion: "",
    region: "",
    direccion: "",
    correo: "",
    contacto: "",
    clave: "",
    confirma: "",
    categoria: "",
    subcategoria: "",
    typeuser: "",
    letraidentificacion: "",
    photo: "",
    phone: "",
    personacontacto: "",
  });

  const gestionarcambios = (evento) => {
    //console.log(evento.target.value)
    setUsuario({
      ...usuario,
      [evento.target.name]: evento.target.value,
    });
  };
  const registrar = (evento) => {
    evento.preventDefault();
    actions.signup(usuario);
  };

  const regiones = [
    { label: "Amazonas", value: "Amazonas" },
    { label: "Anzoátegui", value: "Anzoátegui" },
    { label: "Apure", value: "Apure" },
    { label: "Aragua", value: "Aragua" },
    { label: "Barinas", value: "Barinas" },
    { label: "Bolívar", value: "Bolívar" },
    { label: "Carabobo", value: "Carabobo" },
    { label: "Cojedes", value: "Cojedes" },
    { label: "Delta Amacuro", value: "Delta Amacuro" },
    { label: "Distrito Capital", value: "Distrito Capital" },
    { label: "Falcón", value: "Falcón" },
    { label: "Guárico", value: "Guárico" },
    { label: "La Guaira", value: "La Guaira" },
    { label: "Lara", value: "Lara" },
    { label: "Mérida", value: "Mérida" },
    { label: "Miranda", value: "Miranda" },
    { label: "Monagas", value: "Monagas" },
    { label: "Nueva Esparta", value: "Nueva Esparta" },
    { label: "Portuguesa", value: "Portuguesa" },
    { label: "Sucre", value: "Sucre" },
    { label: "Táchira", value: "Táchira" },
    { label: "Trujillo", value: "Trujillo" },
    { label: "Yaracuy", value: "Yaracuy" },
    { label: "Zulia", value: "Zulia" },
    { label: "Dependencias Federales", value: "Aanzoátegui" },
    { label: "Dependencias Federales", value: "Dependencias Federales" },
  ];

  const enviarDatos = (evento) => {
    evento.preventDefault();
  };

  return (
    <div className="contenedor px-4 py-4 vh-100">
      <img
        src="https://picsum.photos/id/1/367/267"
        className="circular--square "
        alt="..."
      ></img>

      <div className="w-50 p-3 style=background-color: #eee;">
        <Form className="row" onSubmit={enviarDatos}>
          <div className="radiobutton">
            {/* <FormGroup>
						<Input
							id="radio1"
							type="radio"
							value="N"
							name = "letraidentificacion"
							checked = {opcion== "N" ? true : false }
							onChange={cambioestadoopcion}
						/>
						<Label for="radio1">
							Natural    
						</Label>
				
						</FormGroup> */}
            <FormGroup>
              <Input
                id="radio2"
                type="radio"
                value="J"
                name="letraidentificacion"
                checked={opcion == "C" ? true : false}
                onChange={cambioestadoopcion}
              />
              <Label for="radio2">Cliente</Label>
            </FormGroup>
            <FormGroup>
              <Input
                id="radio3"
                type="radio"
                value="P"
                name="typeuser"
                checked={opcion == "P" ? true : false}
                onChange={cambioestadoopcion}
              />
              <Label for="radio3">Proveedor</Label>
            </FormGroup>
          </div>

          <h3>Formulario de registro</h3>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Ingrese su nombre"
                  className="form-control"
                  type="text"
                  name="nombre"
                  onChange={gestionarcambios}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Cédula o R.I.F."
                  className="form-control"
                  type="text"
                  name="identificacion"
                  onChange={gestionarcambios}
                ></Input>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Seleccione región"
                  id="exampleSelect"
                  name="region"
                  type="select"
                >
                  <option>Amazonas</option>
                  <option>Anzoátegui</option>
                  <option>Apure</option>
                  <option>Aragua</option>
                  <option>Barinas</option>
                  <option>Bolívar</option>
                  <option>Carabobo</option>
                  <option>Cojedes</option>
                  <option>Delta Amacuro</option>
                  <option>Distrito Capital</option>
                  <option>Falcón</option>
                  <option>Guárico</option>
                  <option>La Guaira</option>
                  <option>Lara</option>
                  <option>Mérida</option>
                  <option>Miranda</option>
                  <option>Monagas</option>
                  <option>Nueva Esparta</option>
                  <option>Portuguesa</option>
                  <option>Sucre</option>
                  <option>Táchira</option>
                  <option>Trujillo</option>
                  <option>Yaracuy</option>
                  <option>Zulia</option>
                  <option>Dependencias Federales</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Ingrese dirección"
                  className="form-control"
                  type="text"
                  name="direccion"
                  onChange={gestionarcambios}
                ></Input>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="ejemplo@porsupuesto.com"
                  className="form-control"
                  type="email"
                  name="correo"
                  onChange={gestionarcambios}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Ingrese nro. teléfono"
                  className="form-control"
                  type="text"
                  name="phone"
                  onChange={gestionarcambios}
                ></Input>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Ingrese clave"
                  className="form-control"
                  type="password"
                  name="clave"
                  onChange={gestionarcambios}
                ></Input>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Confirme clave"
                  className="form-control"
                  type="password"
                  name="confirma"
                  onChange={gestionarcambios}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <h5>Solamente Proveedores</h5>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Descripción de la Empresa"
                  className="form-control"
                  type="text"
                  name="descripcion"
                  onChange={gestionarcambios}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Persona Contacto"
                  className="form-control"
                  type="text"
                  name="personacontacto"
                  onChange={gestionarcambios}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              
              <FormGroup>
                {store.categorias && (
                  <Input
                    placeholder="Seleccione categoria"
                    id="exampleSelectCategoria"
                    name="categoria"
                    type="select"
                  >
                    {store.categorias.map((categoria, index) => (
                      <option key={index}>
                        {categoria.descripcion_categoria +
                          " " +
                          categoria.descripcion_subcategoria}
                      </option>
                    ))}
                  </Input>
                )}
              </FormGroup>
            </Col>
          </Row>

          <div className="Boton">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={registrar}
            >
              Aceptar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
