import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "../elements/Header";
import BtnRegresar from "../elements/BtnRegresar";

const ListaDeGastos = () => {
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>

      <Header>
        <BtnRegresar></BtnRegresar>
        <Titulo>Lista de Gastos</Titulo>
      </Header>
    </>
  );
};

export default ListaDeGastos;
