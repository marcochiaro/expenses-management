import React, { useState } from "react";
import Helmet from "react-helmet";
import { ContenedorHeader, Header, Titulo } from "../elements/Header";
import Boton from "./../elements/Boton";
import {
  ContenedorBotones,
  Formulario,
  Input,
} from "../elements/ElementosFormulario";
import { ReactComponent as SvgLogin } from "../imagenes/login.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

const InicioSesion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const state = useAuth();

  console.log(state);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validacion del lado del cliente
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (!expresionRegular.test(email)) {
      toast.error("Ingrese un correo electronico valido.");
      return;
    }

    if (email === "" || password === "") {
      toast.error("Campos Obligatorios");
      return;
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.emailVerified);
        navigate("/");
        toast.success("Bievenido!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);

        let mensaje;
        switch (error.code) {
          case "auth/wrong-password":
            mensaje = "La contraseña ingresada es incorrecta";
            break;
          case "auth/user-not-found":
            mensaje = "No se encontro ningun usuario con este email";
            break;
          case "auth/invalid-email":
            mensaje = "El email ingresado no es valido";
            break;
          default:
            mensaje = "Ocurrio un error al intentar crear la cuenta";
            break;
        }

        toast.error(mensaje);
      });
  };
  return (
    <>
      <Helmet>
        <title>Inicio Sesion</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar Sesion</Titulo>
          <div>
            <Boton to="/crear-cuenta">Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          value={email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />

        <ContenedorBotones>
          <Boton as="button" type="submit" to="" primario>
            Iniciar Sesion
          </Boton>
        </ContenedorBotones>
      </Formulario>
      <Toaster />
    </>
  );
};

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem;
  margin-bottom: 1.25rem;
`;

export default InicioSesion;
