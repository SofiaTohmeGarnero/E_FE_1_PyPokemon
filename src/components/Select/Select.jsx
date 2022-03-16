import React, { useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Select = ({ name, label, isPokemon = false, tipos, disabled }) => {
  const { handleBlur } = useContext(ContextoFormulario);

  const onChange = (e) => {
    e.preventDefault();
    handleBlur(isPokemon ? "ACTUALIZAR_POKEMON" : "ACTUALIZAR_ENTRENADOR", {
      campo: name,
      valor: e.target.value,
    });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} disabled={disabled}>
        <option value='' hidden >Seleccionar un tipo</option>
        {tipos?.results?.length
          ? tipos.results.map((type, i) => {
              return (
                <option value={type.name} key={`${type.name}-${i}`}>
                  {type.name}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

export default Select;
