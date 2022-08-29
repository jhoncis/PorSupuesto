import React, { Component } from "react";
import { Button,FormGroup,Label,Input,FormText,Form,Col,Row, NavItem,Progress } from 'reactstrap';

export const Contact = () => (
	<div className="conteiner px-4 vh-100"><p className="mt-5 text-center"> </p>
	<div>
  <Progress
    animated
    className="my-3"
    value={10}
  />
  <Progress
    animated
    className="my-3"
    color="success"
    value="25"
  />
  <Progress
    animated
    className="my-3"
    color="info"
    value={50}
  />
  <Progress
    animated
    className="my-3"
    color="warning"
    value={75}
  />
  <Progress
    animated
    className="my-3"
    color="danger"
    value="100"
  />
  <Progress
    className="my-3"
    multi
  >
    <Progress
      animated
      bar
      value="10"
    />
    <Progress
      animated
      bar
      color="success"
      value="30"
    />
    <Progress
      animated
      bar
      color="warning"
      value="20"
    />
    <Progress
      animated
      bar
      color="danger"
      value="20"
    />
  </Progress>
</div>

  	</div>
);