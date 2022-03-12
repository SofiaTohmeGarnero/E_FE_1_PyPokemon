// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useState } from "react";

export const ContextoFormulario = createContext();

export default function ProviderFormulario ({children}) {
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        nombrePokemon: '',
    });
    const handleBlur = (valorInput) => {
        const {campo, valor} = valorInput;
        setFormulario({
            ...formulario,
            [campo]: valor,
        })
    }

    return(
        <ContextoFormulario.Provider
            value={{formulario, handleBlur}}
        >
            {children}
        </ContextoFormulario.Provider>
    )
}