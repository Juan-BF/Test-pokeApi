import React, { useState, useEffect } from "react";
import Filters from "../../Filter/InputFilter";
import PokemonListPage from "./PokemonLisstPage";
import GetPokemonApi from "../service/GetPokemonApi";
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
          const pokemonImageUrl2 = pokemonInfo.sprites.front_shiny;

          const idPokemon = pokemonInfo.id;

          return [
            pokemonName,
            pokemonTypes,
            pokemonImageUrl,
            idPokemon,
            pokemonImageUrl2,
          ];
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

  const [isHovered, setIsHovered] = useState(
    Array(pokemonFilter.length).fill(false)
  );


  
  return (
    <div className="boxAll">
      <div className="contentBox">
        <h1 className="titleList">ELIGE A TU HÉROE</h1>
        <p className="descritionList">
          Mentes estratégicas, criaturas formidables, intrépidos exploradores...
          En el universo Pokémon, la diversidad es infinita. Desencadena
          habilidades únicas y poderosos ataques en tu camino hacia el éxito
          como Entrenador Pokémon. ¡Atrapa, entrena y compite para alcanzar la
          cima!
        </p>
      </div>
      <Filters
        name={pokemonName}
        type={pokemonTypes}
        handleInputChange={handleInputChange}
      />
      <PokemonListPage
        ResultFilter={pokemonFilter}
        isHovered={isHovered}
        setIsHovered={(index, value) => {
          const updatedIsHovered = [isHovered];
          updatedIsHovered[index] = value;
          setIsHovered(updatedIsHovered);
        }}
        alternativeImageUrls={pokemon.pokemonDato.map((details) => details[4])}
      />
      <Button
        seeMore={seeMore}
        showLess={showLess}
        nameBtnMore="Ver Mas"
        nameBtnLess="Ver Menos"
      />
    </div>
  );
};

export { GetPokemonData as PokedexApi, GetPokemonApi, PokemonData };
