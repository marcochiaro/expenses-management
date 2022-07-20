import React from "react";
import { Header, Titulo } from "../elements/Header";
import BtnRegresar from "../elements/BtnRegresar";
import { Helmet } from "react-helmet";

const GastosPorCategoria = () => {
  return (
    <>
      <Helmet>
        <title>Gastos Por Categoria</title>
      </Helmet>

      <Header>
        <BtnRegresar ruta="/" />
        <Titulo>Gastos Por Categoria</Titulo>
      </Header>
    </>
  );
};

export default GastosPorCategoria;
