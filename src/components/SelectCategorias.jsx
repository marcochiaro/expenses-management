import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import theme from "./../theme";
import { ReactComponent as IconoDown } from "./../imagenes/down.svg";
import categorias from "../elements/ListaCategorias";
import IconoCategoria from "../elements/IconoCategoria";
import useClickOutside from "../elements/useClickOutside";

const SelectCategorias = ({ categoria, setCategoria }) => {
  const [mostrarSelect, setMostrarSelect] = useState(false);

  const handleClick = (e) => {
    setCategoria(e.currentTarget.dataset.valor);
  };

  const openSelect = () => {
    setMostrarSelect(true);
  };

  const closeSelect = () => {
    setMostrarSelect(false);
  };

  //Optimizacion: guarda version memorizada de la funcion. handleSelect va a cambiar solo cuando mostrarSelect cambie, si el componente se renderiza de nuevo, no va a volver a ejecturar el condicional ternario.
  const handleSelect = useCallback(() => {
    return mostrarSelect ? closeSelect() : openSelect();
  }, [mostrarSelect]);

  const ref = useRef(null);
  useClickOutside(ref, closeSelect);

  return (
    <ContenedorSelect onClick={handleSelect} ref={ref}>
      <OpcionSeleccionada>
        {categoria}
        <IconoDown />
      </OpcionSeleccionada>

      {mostrarSelect && (
        <Opciones>
          {categorias.map((categoria) => {
            return (
              <>
                <Opcion
                  id={categoria.id}
                  data-valor={categoria.id}
                  onClick={handleClick}
                >
                  <IconoCategoria id={categoria.id} />
                  {categoria.texto}
                </Opcion>
              </>
            );
          })}
        </Opciones>
      )}
    </ContenedorSelect>
  );
};

const ContenedorSelect = styled.div`
  background: ${theme.grisClaro};
  cursor: pointer;
  border-radius: 0.625rem;
  position: relative;
  height: 5rem;
  width: 40%;
  padding: 0px 1.25rem;
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  &:hover {
    background: ${theme.grisClaro2};
  }
`;

const OpcionSeleccionada = styled.div`
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 1.25rem;
    height: auto;
    margin-left: 1.25rem;
  }
`;

const Opciones = styled.div`
  background: ${theme.grisClaro};
  position: absolute;
  top: 5.62rem;
  left: 0;
  width: 100%;
  border-radius: 0.625rem;
  max-height: 18.75rem;
  overflow-y: auto;
`;

const Opcion = styled.div`
  padding: 1.25rem;
  display: flex;
  svg {
    width: 28px;
    height: auto;
    margin-right: 1.25rem;
  }
  &:hover {
    background: ${theme.grisClaro2};
  }
`;

export default SelectCategorias;
