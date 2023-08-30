import React from "react";
import { Link } from "react-router-dom";
import "../PokemonListPage/stylolistapokemon.css";
import "../../pokemon/reset.css";

const PokemonListPage = ({
  ResultFilter,
  isHovered,
  setIsHovered,
  alternativeImageUrls,
}) => {
  return (
    <section className="PokemonCards">
      {ResultFilter.map(([pokemonName, typeNames, imageUrl, id], index) => (
        <li className="cardsInformation" key={index}>
          <Link to={`/${id}`}>
            <div>
              <img
                className={`PokemonImage`}
                onMouseEnter={() => setIsHovered(index, true)}
                onMouseLeave={() => setIsHovered(index, false)}
                src={isHovered[index] ? alternativeImageUrls[index] : imageUrl}

                
                alt={`Pokemon ${pokemonName}`}
              />
            </div>
          </Link>
          {/* <p>{pokemonName}</p> */}
          {/* <p>Tipo:</p> */}

          {/* <spam> {typeNames.join(", ")}</spam> */}
        </li>
      ))}
    </section>
  );
};

export default PokemonListPage;
