import React from "react";
import Modal from "react-modal";
import '../index';

function Modals(props) {
  const { modalIsOpen, closeModal, pokemon } = props

    return(
      <div className="container">
        <Modal isOpen={modalIsOpen}>
          <div className="modal-card">
            <img src={pokemon.sprites.other.dream_world.front_default} alt='pokemon-image' width='300px' height='150px'/>
            <h2>#0{pokemon.id}</h2>
            <h3>{pokemon.name}</h3>
            <small>Type: {pokemon.types[0].type.name}</small>
            <small>Height: {pokemon.height}</small>
            <small>Weight: {pokemon.weight}</small>
          </div>
          <button className="modal-button" onClick={closeModal}>Close</button>
        </Modal>
      </div>
    )
}
export default Modals;