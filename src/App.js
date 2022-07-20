import React from "react";
import {
  Header,
  Titulo,
  ContenedorBotones,
  ContenedorHeader,
} from "./elements/Header";
import Boton from "./elements/Boton";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import BotonCerrarSesion from "./elements/BotonCerrarSesion";
import FormGastos from "./components/FormGastos";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorias</Boton>
            <Boton to="/lista">Lista de Gastos</Boton>
            <BotonCerrarSesion to="/" />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
      <FormGastos />
      <Toaster />
    </>
  );
};

export default App;
