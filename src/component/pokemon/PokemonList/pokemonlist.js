import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokeApi } from "../service/pokeapi";
import { PokedexApi } from "../service/pokedetailsapi";

const PokemonData = () => {
  const [pokemon, setPokemon] = useState({
    pokemonDato: [],
  });
  const [quantity, setQuantity] = useState(10);

  const seeMore = () => {
    setQuantity(quantity < 1200 ? quantity + 10 : quantity);
  };
  const showLess = () => {
    setQuantity(quantity > 10 ? quantity - 10 : quantity);
  };




  const [nombresFiltrados, setNombresFiltrados] = useState([]);
  const [nombresd, setNombre] = useState("");




  const handleInputChange = (event) => {
    const letrasIngresadas = event.target.value.toLowerCase();

    const nombresFiltrados = pokemon.pokemonDato.filter((pokemonDato) =>
      pokemonDato.name.toLowerCase().startsWith(letrasIngresadas)
    );

    setNombre(event.target.value);
    setNombresFiltrados(nombresFiltrados);
  };







  useEffect(() => {
    const fetDato = async () => {
      const pokeDato = await PokeApi(quantity);
      const pokedexData = await Promise.all(
        pokeDato.map(async (result) => {
          const resultPoke = await PokedexApi(result.name);
          return resultPoke;
        })
      );
      setPokemon({
        pokemonDato: pokedexData,
      });
      setNombresFiltrados(pokedexData);
    };

    fetDato();
  }, [quantity]);

  return (
    <div>
      <div>
        <label htmlFor="nombre">endereco da imagem da carta</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleInputChange}
          value={nombresd}
        />
      </div>
      <button type="submit" onClick={seeMore}>agregar 10</button>
            <br></br>
            <button type="submit" onClick={showLess}>quitar 10</button>
      <section>






        {nombresFiltrados.map((nombre, index) => (
          <li key={index}>
            <Link to={`/${nombre.name}`}>
              <img
                src={nombre.sprites.front_default}
                alt={`Pokemon ${nombre.name}`}
              />
            </Link>
            <p>{nombre.name}</p>
          </li>
        ))}




      </section>
    </div>
  );
};

export { PokemonData, PokedexApi, PokeApi };
