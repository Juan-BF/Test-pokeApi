import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokeApi } from "../service/pokeapi";
import { PokedexApi } from "../service/pokedetailsapi";

const PokemonData = () => {
  const [pokemon, setPokemon] = useState({
    pokemonDato: [],
  });

  const [quantity, setQuantity] = useState(10);
  const [nombresFiltrados, setNombresFiltrados] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState("");

  const updateQuantity = (amount) => {
    const newValue = quantity + amount;
    const newQuantity = newValue < 10 ? 10 : newValue > 1200 ? 1200 : newValue;
    setQuantity(newQuantity);
  };

  const seeMore = () => {
    updateQuantity(10);
  };

  const showLess = () => {
    updateQuantity(-10);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const inputName = event.target.name;

    if (inputName === "nombre") {
      setPokemonName(inputValue);
    } else if (inputName === "types") {
      setPokemonTypes(inputValue);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const pokeData = await PokeApi(quantity);

      const pokedexData = await Promise.all(
        pokeData.map(async (result) => {
          const name = result.name;

          const resultPoke = await PokedexApi(result.name);
          const types = resultPoke.types.map((tipo) => tipo.type.name);
          const imageUrl = resultPoke.sprites.front_default;

          return [name, types, imageUrl];
        })
      );

      setPokemon({
        pokemonDato: pokedexData,
      });
    };

    fetchData();
  }, [quantity]);

  useEffect(() => {
    const filteredData = pokemon.pokemonDato.filter((pokemonData) => {
      const nombre = pokemonData[0].toLowerCase();
      const tipos = pokemonData[1].map((tipo) => tipo.toLowerCase()).join(", ");
  
      const nameFilter = pokemonName === "" || nombre.startsWith(pokemonName);
      const typesFilter = pokemonTypes === "" || tipos.includes(pokemonTypes);
  
      return nameFilter && typesFilter;
    });
  
    setNombresFiltrados(filteredData);
  }, [pokemonName, pokemonTypes, pokemon.pokemonDato]);

  return (
    <div>
      <div>
        <label htmlFor="nombre">Nombre Pokemon </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleInputChange}
          value={pokemonName}
        />
      </div>

      <div>
        <label htmlFor="Type">Tipos de pokemon </label>
        <input
          type="text"
          id="types"
          name="types"
          onChange={handleInputChange}
          value={pokemonTypes}
        />
      </div>

      <button type="submit" onClick={seeMore}>
        agregar 10
      </button>
      <br />
      <button type="submit" onClick={showLess}>
        quitar 10
      </button>

      <section>
        {nombresFiltrados.map(([pokemonName, typeNames, imageUrl], index) => (
          <li key={index}>
            <Link to={`/${pokemonName}`}>
              <img src={imageUrl} alt={`Pokemon ${pokemonName}`} />
            </Link>
            <p>{pokemonName}</p>
            <p>Types: {typeNames.join(", ")}</p>
          </li>
        ))}
      </section>
    </div>
  );
};


export { PokemonData, PokedexApi, PokeApi };
