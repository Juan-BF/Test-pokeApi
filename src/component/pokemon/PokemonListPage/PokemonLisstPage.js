import React from "react";
import { Link } from "react-router-dom";

const PokemonListPage = ({ ResultFilter }) => {
  return (
    <section>
      {ResultFilter.map(([pokemonName, typeNames, imageUrl], index) => (
        <li key={index}>
          <Link to={`/${pokemonName}`}>
            <img src={imageUrl} alt={`Pokemon ${pokemonName}`} />
          </Link>
          <p>{pokemonName}</p>
          <p>Types: {typeNames.join(", ")}</p>
        </li>
      ))}
    </section>
  );
};

export default PokemonListPage;