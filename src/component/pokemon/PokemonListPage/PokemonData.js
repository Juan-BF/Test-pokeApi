import React, { useState, useEffect } from "react";
import Filters from "../../Filter/InputFilter";
import PokemonListPage from "./PokemonLisstPage";
import GetPokemonApi from "../service/GetPokemonApi"
import GetPokemonData from "../service/GetPokemonData";
import Button from "../../Button/Button";

const PokemonData = () => {
  const [pokemon, setPokemon] = useState({
    pokemonDato: [],
  });
  
  const [quantity, setQuantity] = useState(10);
  const [pokemonFilter, setPokemonFilter] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState("");

  const updateQuantity = (amount) => {
    const newValue = quantity + amount;
    const newQuantity = newValue < 10 ? 10 : newValue > 1200 ? 1200 : newValue;
    setQuantity(newQuantity);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const inputName = event.target.name;

    if (inputName === "name") {
      setPokemonName(inputValue);
    } else if (inputName === "type") {
      setPokemonTypes(inputValue);
    }
  };

  const seeMore = () => {
    updateQuantity(10);
  };

  const showLess = () => {
    updateQuantity(-10);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await GetPokemonApi(quantity);

      const pokemonDetails = await Promise.all(
        pokemonData.map(async (result) => {
          const pokemonName = result.name;

          const pokemonInfo = await GetPokemonData(pokemonName);
          const pokemonTypes = pokemonInfo.types.map((tipo) => tipo.type.name);
          const pokemonImageUrl = pokemonInfo.sprites.front_default;
          const idPokemon = pokemonInfo.id

          return [pokemonName, pokemonTypes, pokemonImageUrl, idPokemon];
        })
      );

      setPokemon({
        pokemonDato: pokemonDetails,
      });
    };

    fetchData();
  }, [quantity]);
  useEffect(() => {
    const filterdata = pokemon.pokemonDato.filter((pokemonData) => {
      const name = pokemonData[0].toLowerCase();
      const types = pokemonData[1]
        .map((types) => types.toLowerCase())
        .join(", ");

      const nameFilter = pokemonName === "" || name.startsWith(pokemonName);
      const typeFilter = pokemonTypes === "" || types.includes(pokemonTypes);

      return nameFilter && typeFilter;
    });

    setPokemonFilter(filterdata);
  }, [pokemonName, pokemonTypes, pokemon.pokemonDato]);

  return (
    <div>
      <Button
      seeMore={seeMore} 
      showLess={showLess}
      nameBtnMore="Ver Mas"
      nameBtnLess="Ver Menos"
         />
      <Filters
        name={pokemonName}
        type={pokemonTypes}
        handleInputChange={handleInputChange}
      />
      <PokemonListPage ResultFilter={pokemonFilter} />
    </div>
  );
};

export { GetPokemonData as PokedexApi, GetPokemonApi, PokemonData };
