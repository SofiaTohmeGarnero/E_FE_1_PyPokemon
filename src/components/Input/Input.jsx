import React, { useState, useContext, useEffect, useRef } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" , isPokemon = false, shouldFocus = false}) => {
  const {handleBlur} = useContext(ContextoFormulario);
  const ref = useRef(null);

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

  useEffect(() => {
    if(ref.current && shouldFocus){
      ref.current.focus();
    }
  }, [shouldFocus])

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={localState}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
};

export default Input;
