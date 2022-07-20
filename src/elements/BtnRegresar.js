import React from "react";
import styled from "styled-components";
import { ReactComponent as IconoFlecha } from "../imagenes/flecha.svg";
import { useNavigate } from "react-router-dom";

const BtnRegresar = ({ ruta = "/" }) => {
  const navigate = useNavigate();
  return (
    <>
      <Btn onClick={() => navigate(ruta)}>
        <Icono />
      </Btn>
    </>
  );
};

const Btn = styled.button`
  display: block;
  width: 3.12rem;
  height: 3.12rem;
  line-height: 3.12rem;
  text-align: center;
  margin-right: 1.25rem;
  border: none;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.55rem;
  cursor: pointer;

  @media (max-width: 60rem) {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
  }
`;

const Icono = styled(IconoFlecha)`
  width: 50%;
  height: auto;
  fill: #fff;
`;

export default BtnRegresar;
