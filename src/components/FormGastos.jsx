import React, { useState } from "react";
import Boton from "../elements/Boton";
import {
  ContenedorBotones,
  ContenedorFiltros,
  Formulario,
  Input,
  InputGrande,
} from "../elements/ElementosFormulario";
import { ReactComponent as IconoPlus } from "../imagenes/plus.svg";
import SelectCategorias from "./SelectCategorias";
import DatePicker from "./DatePicker";

const FormGastos = () => {
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputCantidad, setInputCantidad] = useState(0);
  const [categoria, setCategoria] = useState("hogar");

  const handleInputDescriptionChange = (e) => {
    if (e.target.name === "descripcion") {
      setInputDescripcion(e.target.value);
    } else if (e.target.name === "cantidad") {
      setInputCantidad(e.target.value);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Formulario onSubmit={handleFormSubmit}>
      <ContenedorFiltros>
        <SelectCategorias categoria={categoria} setCategoria={setCategoria} />
        <DatePicker />
      </ContenedorFiltros>
      <div>
        <Input
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Descripcion del gasto"
          value={inputDescripcion}
          onChange={handleInputDescriptionChange}
        />
      </div>

      <InputGrande
        type="number"
        name="cantidad"
        id="cantidad"
        placeholder="$0.00"
        value={inputCantidad}
      />
      <ContenedorBotones>
        <Boton type="submit" as="button" primario conIcono>
          Agregar Gasto
          <IconoPlus />
        </Boton>
      </ContenedorBotones>
    </Formulario>
  );
};

export default FormGastos;
