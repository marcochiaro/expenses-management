import React, { useState } from "react";
import Helmet from "react-helmet";
import { ContenedorHeader, Header, Titulo } from "../elements/Header";
import Boton from "./../elements/Boton";
import {
  ContenedorBotones,
  Formulario,
  Input,
} from "../elements/ElementosFormulario";
import { ReactComponent as SvgRegister } from "../imagenes/registro.svg";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const RegistroUsuarios = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleChangeInput = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
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
      toast.error("Ingresa un correo electronico valido.");
      return;
    }

    if (email === "" || password === "" || password2 === "") {
      toast.error("Campos Obligatorios");
      return;
    }

    if (password !== password2) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    //creacion usuario con firebase
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...debug
        console.log(user);
        //redireccion al home luego del login exitoso
        navigate("/");
        toast.success("Bievenido!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
        let mensaje;
        switch (error.code) {
          case "auth/invalid-password":
            mensaje = "La contraseña debe tener al menos 6 caracteres";
            break;
          case "auth/email-already-in-use":
            mensaje = "El email ya se encuentra en uso";
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
        <title>Crear Cuenta</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Crear Cuenta</Titulo>
          <div>
            <Boton to="/iniciar-sesion">Iniciar Sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Toaster />
      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          value={email}
          onChange={handleChangeInput}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChangeInput}
        />
        <Input
          type="password"
          name="password2"
          placeholder="Repetir Contraseña"
          value={password2}
          onChange={handleChangeInput}
        />

        <ContenedorBotones>
          <Boton as="button" type="submit" to="" primario>
            Crear Cuenta
          </Boton>
        </ContenedorBotones>
      </Formulario>
    </>
  );
};

const Svg = styled(SvgRegister)`
  width: 100%;
  max-height: 6.25rem;
  margin-bottom: 1.25rem;
`;

export default RegistroUsuarios;
