import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokeApi } from "../service/pokeapi";
import { PokedexApi } from "../service/pokedetailsapi";

const PokemonData = () => {
  const [pokemon, setPokemon] = useState({
    pokemonDato: [],
  });

  const [quantity, setQuantity] = useState(10);
  //aqui va tener guardado los poquemones que pasaron el filtro
  const [pokemonFilter, setPokemonFilter] = useState([]);
          //entro p
  const [pokemonName, setPokemonName] = useState("");
          //entro a
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

  //Aqui esta el codigo para capturar la entrada de text en los 2 input
  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const inputName = event.target.name;

    if (inputName === "pokemonName") {
      setPokemonName(inputValue);
    } else if (inputName === "pokemonTypes") {
      setPokemonTypes(inputValue);
    }
  };
  //Aqui tenemo el codigo que va a obtener informacion como nombre,typo,imagen dle poquemon y lo regresamos como un array en 3 elementos
  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await PokeApi(quantity);

      const pokemonDetails = await Promise.all(
        pokemonData.map(async (result) => {
          const pokemonName = result.name;

          const pokemonInfo = await PokedexApi(pokemonName);
          const pokemonTypes = pokemonInfo.types.map((tipo) => tipo.type.name);
          const pokemonImageUrl = pokemonInfo.sprites.front_default;

          return [pokemonName, pokemonTypes, pokemonImageUrl];
        })
      );

      setPokemon({
        pokemonDato: pokemonDetails,
      });
    };

    fetchData();
  }, [quantity]);


  useEffect(() =>{
    const filterdata = pokemon.pokemonDato.filter((pokemonData) =>{
      const name = pokemonData[0].toLowerCase();
      const types= pokemonData[1].map((types) =>types.toLowerCase()).join(", ");

      const nameFilter = pokemonName === "" || name.startsWith(pokemonName)
      const typeFilter = pokemonTypes === "" || types.includes(pokemonTypes)

      return nameFilter && typeFilter;
    });
    setPokemonFilter(filterdata)
  },[ pokemonName, pokemonTypes, pokemon.pokemonDato ])
  
  

 



  return (
    <div>
      <div>
        <label htmlFor="pokemonName">Nombre del Pokemon </label>
        <input
          type="text"
          id="pokemonName"
          name="pokemonName"
          onChange={handleInputChange}
          value={pokemonName}
        />
      </div>
      <div>
        <label htmlFor="pokemonType"> Tipo de Pokemon</label>
        <input
          type="text"
          id="pokemonType"
          name="pokemonTypes"
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
        {pokemonFilter.map(([pokemonName, typeNames, imageUrl], index) => (
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
