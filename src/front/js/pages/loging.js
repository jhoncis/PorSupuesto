import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Loging = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const token = sessionStorage.getItem("token");
  console.log("This is your token", token);
  const handleClick =() => {
    actions.loging(email,password);//.then(() =>{
      //history.push("/")
    //})
  };

  const handleLoging = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(process.env.BACKEND_URL + "/api/token", opts)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There has been some error");
      })
      .then(data => {
        console.log("this came from the backend", data)
        sessionStorage.setItem("token", data.access_token);
      })
      .catch((error) => {
        console.error("There was an error!!!!", error);
      });
  };

  return (
    <div className="container px-4 vh-100 text-center mt-5">
      <h1><p className="mt-5 text-center">Loging</p></h1>
      {token && token!="" && token!=undefined? (
        "You are logged in with this token" + token
      ):(
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>Loging</button>
        </div>

        )}
    </div>
  );
};
