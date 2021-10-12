import React, { useState } from "react";
import Modals from "./Modals";
import "../index";

const PokemonCards = ({ image, name, type, pokemon }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const savePokemon = () => {
    const pokemons = localStorage.getItem("pokemonList") || [];
    const pokemonsList = (pokemons.length && JSON.parse(pokemons)) || {};
    const catched = pokemonsList?.catch || [];
    const newPokemons = { catch: [...catched, { name, image, type }] };
    localStorage.setItem("pokemonList", JSON.stringify(newPokemons));
  };

  return (
    <div className="card">
      <img src={image} alt={name} width="200px" height="100px" />
      <div className="detail">
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <div className="btn-flex">
          <button className="card-button" onClick={openModal}>
            Detail
          </button>
          <button className="card-button" onClick={savePokemon}>
            Add to My Pokemon
          </button>
        </div>
      </div>
      <Modals
        closeModal={closeModal}
        pokemon={pokemon}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};

export default PokemonCards;
