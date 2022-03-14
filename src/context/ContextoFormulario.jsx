import { createContext, useReducer } from "react";

// Creamos nuestro estado inicial.
const initialState = {
    entrenador: {
      nombre: "",
      apellido: "",
      email: "",
    },
    pokemon: {
      nombrePokemon: "",
      tipoPokemon: "",
      elementoPokemon: "",
      alturaPokemon: "",
      edadPokemon: "",
    },
};

// Creamos la función reductora con los diferentes tipos de acciones.
const reducer = (state, action) => {
    switch (action.type) {
      case "ACTUALIZAR_ENTRENADOR":
        return {
          ...state,
          entrenador: {
            ...state.entrenador,
            ...action.payload,
          },
        };
      case "ACTUALIZAR_POKEMON":
        return {
          ...state,
          pokemon: {
            ...state.pokemon,
            ...action.payload,
          },
        };
      default:
        return state;
    }
};

export const ContextoFormulario = createContext();

export default function ProviderFormulario ({children}) {
    // Usamos useReducer en lugar de useState para menjar los estados
    const [formulario, dispatch] = useReducer(reducer, initialState);

    const handleBlur = (type, valorInput) => {
        const {campo, valor} = valorInput;
        /* ANTES: usando useState:
        setFormulario({
            ...formulario,
            [campo]: valor,
        }) 
        */
        dispatch({
            type,
            payload: {[campo]: valor},
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