import React, { useContext } from "react";
import { useMutation } from "react-query";
import { ContextoFormulario } from "../../context/ContextoFormulario";
import { postNewPokemon } from "../../servicios/postNewPokemon";

const Detalle = () => {
  const { formulario } = useContext(ContextoFormulario);

  const { nombre, apellido, email } = formulario.entrenador;
  const {
    nombrePokemon,
    tipoPokemon,
    elementoPokemon,
    alturaPokemon,
    edadPokemon,
    especiePokemon,
  } = formulario.pokemon;

  const mutation = useMutation((newPokemon) => postNewPokemon(newPokemon));

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {nombre}</p>
          <p>Apellido: {apellido}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {nombrePokemon}</p>
          <p>Tipo: {tipoPokemon}</p>
          <p>Elemento: {elementoPokemon}</p>
          <p>Altura: {alturaPokemon}</p>
          <p>Edad: {edadPokemon}</p>
          <p>Especie: {especiePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => {
          mutation.mutate(formulario);
        }}
      >
        Enviar Solicitud
      </button>
      {mutation.isLoading ? (
        <p>Enviando formulario...</p>
      ) : mutation.isSuccess ? (
        <p>¡Tu formulario se ha enviado con éxito!</p>
      ) : mutation.isError ? (
        <p>{mutation.error.message}</p>
      ) : null}
    </div>
  );
};

export default Detalle;
