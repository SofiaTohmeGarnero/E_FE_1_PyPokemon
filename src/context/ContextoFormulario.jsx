import React from "react";

export const ContextoFormulario = React.createContext();

const ProviderFormulario = ({ children }) => {
  const [formulario, setFormulario] = React.useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleInputBlur = (valorInput) => {
    const { campo, valor } = valorInput;

    setFormulario({
      ...formulario,
      [campo]: valor,
    });
  };

  return (
    <ContextoFormulario.Provider
      value={{
        formulario,
        handleInputBlur,
      }}
    >
      {children}
    </ContextoFormulario.Provider>
  );
};

export default ProviderFormulario;
