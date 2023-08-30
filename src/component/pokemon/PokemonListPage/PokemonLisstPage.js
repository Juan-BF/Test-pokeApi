import React from "react";
import { Link } from "react-router-dom";
import "../PokemonListPage/stylolistapokemon.css"
import "../../pokemon/reset.css"

const PokemonListPage = ({ ResultFilter }) => {
  return (
    <section className="PokemonCards">
      {ResultFilter.map(([pokemonName, typeNames, imageUrl, id], index) => (
        <li className="cardsInformation" key={index}>
          <Link to={`/${id}`}>
            <img src={imageUrl} alt={`Pokemon ${pokemonName}`} />
          </Link>
          <p>{pokemonName}</p>
          <p>Tipo:</p>
          
          <spam> {typeNames.join(", ")}</spam>
        </li>
      ))}
    </section>
  );
};

export default PokemonListPage;