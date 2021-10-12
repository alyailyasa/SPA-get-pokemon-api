import React from "react";
import "../index";

const MyPokemon = () => {
  const pokemons = localStorage.getItem("pokemonList") || [];
  const pokemonsList = (pokemons.length && JSON.parse(pokemons)) || {};
  const catched = pokemonsList?.catch || [];

  return (
    <div className="pokemon-container">
      {catched.length !== 0 ? (
        catched.map((pokemon, index) => {
          return (
            <div className="card">
                <div key={index}>
                  <img src={pokemon.image} width="200" height="150" />
                  <h3>{pokemon.name}</h3>
                  <p>Type : {pokemon.type}</p>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <h3>No Data in My Pokemon List</h3>
        </>
      )}
    </div>
  );
};

export default MyPokemon;
