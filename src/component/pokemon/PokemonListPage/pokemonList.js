import React from "react";
import { Link } from "react-router-dom";
import { UlPokemonCards, DivCards } from "../PokemonListPage/PokemonListStyled";

const PokemonListPage = ({ ResultFilter }) => {
  const typeColors = {
    bug: "rgba(30, 122, 61, 0.4)",
    dark: "rgba(1, 5, 6, 0.4)",
    dragon: "rgba(68, 146, 158, 0.4)",
    electric: "rgba(235, 242, 42, 0.4)",
    fairy: "rgba(167, 23, 69, 0.4)",
    fighting: "rgba(161, 65, 39, 0.4)",
    fire: "rgba(177, 33, 30, 0.4)",
    flying: "rgba(74, 106, 130, 0.4)",
    ghost: "rgba(51, 51, 111, 0.4)",
    grass: "rgba(17, 135, 63, 0.4)",
    ground: "rgba(173, 122, 45, 0.4)",
    ice: "rgba(132, 219, 251, 0.4)",
    normal: "rgba(119, 86, 94, 0.4)",
    poison: "rgba(98, 43, 143, 0.4)",
    psychic: "rgba(171, 42, 112, 0.4)",
    rock: "rgba(72, 22, 5, 0.4)",
    steel: "rgba(99, 122, 111, 0.4)",
    water: "rgba(15, 84, 237, 0.4)",
  };

  return (
      <UlPokemonCards>
        {ResultFilter.map(([pokemonName, typeNames, imageUrl, id], index) => (
          <li key={id}>
            <Link to={`/${id}`}>
              <DivCards>
                <h3>{pokemonName}</h3>
                <img src={imageUrl} alt={`Pokemon-${pokemonName}`} />
                <p
                  style={{
                    backgroundColor: typeColors[typeNames[0]?.toLowerCase()],
                  }}
                >
                  {typeNames.join(" ")}
                </p>
              </DivCards>
            </Link>
          </li>
        ))}
      </UlPokemonCards>
  );
};

export default PokemonListPage;
