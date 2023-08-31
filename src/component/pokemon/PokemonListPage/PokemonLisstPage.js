import React from "react";
import { Link } from "react-router-dom";
import "../PokemonListPage/stylolistapokemon.css";
import "../../pokemon/reset.css";

const PokemonListPage = ({
  ResultFilter,
}) => {
  return (
    <section>
      <ul className="PokemonCards">
        {ResultFilter.map(([pokemonName, typeNames, imageUrl, id], index) => (
          // className="cardsInformation"
          <li  key={index}>
            <Link to={`/${id}`}>
              <div>
                <img 
                  className={`PokemonImage`}
                  
                  src={imageUrl}
                  alt={`Pokemon ${pokemonName}`}
                />
              </div>
            </Link>
            {/* <p>{pokemonName}</p> */}
            {/* <p>Tipo:</p> */}

            {/* <spam> {typeNames.join(", ")}</spam> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PokemonListPage;
