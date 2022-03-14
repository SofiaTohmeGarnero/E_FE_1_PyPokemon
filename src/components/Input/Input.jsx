import React, { useState, useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" , isPokemon = false}) => {
  const {handleBlur} = useContext(ContextoFormulario)

  const [localState, setLocalState] = useState('')

  const onChange = (e) => {
    setLocalState(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();
    handleBlur(
      isPokemon ? "ACTUALIZAR_POKEMON" : "ACTUALIZAR_ENTRENADOR",
      {
      campo: name,
      valor: localState,}
      )
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={localState}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
