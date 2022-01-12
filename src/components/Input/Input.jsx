import React, { useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  const { handleInputBlur, formulario } = useContext(ContextoFormulario);

  const [value, setValue] = React.useState(formulario[name] || "");

  const onChange = (e) => setValue(e.target.value);

  const onBlur = (e) => {
    e.preventDefault();

    handleInputBlur({
      campo: name,
      valor: value,
    });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
