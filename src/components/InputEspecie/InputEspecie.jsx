import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { ContextoFormulario } from "../../context/ContextoFormulario";
import { getPokemonEspecies } from "../../servicios/getPokemonEspecies";
import { POKE_ESPECIES_ENTREGA_POR_PAGINA } from '../../utils/constantes';

const InputEspecie = ({ name, label, isPokemon }) => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const { handleBlur } = useContext(ContextoFormulario);
  const [offset, setOffset] = useState(0);

  const {
    data: especies,
  } = useQuery(
    [`getPokemonEspecies`, offset],
    () => getPokemonEspecies(offset),
    {
      keepPreviousData: true,
    }
  );

  const elegirEspecie = (e, nombreEspecie) => {
    e.preventDefault();

    handleBlur(isPokemon ? "ACTUALIZAR_POKEMON" : "ACTUALIZAR_ENTRENADOR", {
      campo: name,
      valor: nombreEspecie,
    });
    setMostrarPopup(false);
  };

  const renderizarEspecies = () => (
    <>
      {especies?.results?.map((especie) => (
        <button
          key={especie.name}
          className="botones-especie"
          onClick={(e) => elegirEspecie(e, especie.name)}
        >
          {especie.name}
        </button>
      ))}
    </>
  );

  return (
    <div className="input-contenedor">
      {mostrarPopup && (
        <div className="popup-especie">
          <h4>Seleccionar especie</h4>
          <div className="contenedor-especies">{renderizarEspecies()}</div>
          <div className="paginador">
            <button
              className="boton-anterior"
              disabled={!especies?.previous}
              onClick={() => {
                setOffset((prevState) => prevState - POKE_ESPECIES_ENTREGA_POR_PAGINA);
              }}
            >
              Anterior
            </button>
            <button
              className="boton-siguiente"
              disabled={!especies?.next}
              onClick={() => {
                setOffset((prevState) => prevState + POKE_ESPECIES_ENTREGA_POR_PAGINA);
              }}
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
      <p htmlFor={name}>{label}</p>
      <button
        className="boton-seleccionar-especies"
        onClick={() => setMostrarPopup(true)}
      >
        Seleccionar
      </button>
    </div>
  );
};

export default InputEspecie;
