import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";

const Home = () => {
  return (
    <>
      <header className="App-header">
        <img className="App-logo" alt="logo" src={pokebola} />
        <h1>Centro Pokemon de Ash</h1>
        <Link to="/formularioIngreso" className="boton-ingreso">
          Ingresar pokemon
        </Link>
      </header>
      <main></main>
    </>
  );
};

export default Home;
