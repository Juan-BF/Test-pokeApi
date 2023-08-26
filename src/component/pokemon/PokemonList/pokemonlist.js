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
  


  const [nombre, setNombre] = useState("");
  const [types, setType] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    
    if (event.target.name === "nombre") {
      setNombre(inputValue);
    } else if (event.target.name === "types") {
      setType(inputValue);
    }
    
    const nombresFiltrados = pokemon.pokemonDato.filter((pokemonData) => {
      const nombre = pokemonData[0].toLowerCase();
      const tipos = pokemonData[1].map((tipo) => tipo.toLowerCase()).join(', ');
  
      return nombre.startsWith(inputValue) || tipos.includes(inputValue);
    });
  
    setNombresFiltrados(nombresFiltrados);
  };
  
  
  
  
  
  // const handleInputChange = (event) => {
  //   const letrasIngresadas = event.target.value.toLowerCase();
  //   const nombresFiltrados = pokemon.pokemonDato.filter((pokemonData) =>
  //     pokemonData[0].toLowerCase().startsWith(letrasIngresadas),
  //   );
   

  //   setNombre(event.target.value);
  //   setNombresFiltrados(nombresFiltrados);
  // };

  useEffect(() => {

    const fetDato = async () => {
      const pokeDato = await PokeApi(quantity);

      const pokedexData = await Promise.all(
        pokeDato.map(async (result) => {
          const name = result.name;

          const resultPoke = await PokedexApi(result.name);
          const resul = resultPoke.types;
          const imagen = resultPoke.sprites.front_default;
          const typename = await Promise.all(
            resul.map(async (re) => {
              const resposta = re.type.name;
              return resposta;
            })
          );

          return [name, typename, imagen];
        })
      );
      const final = await Promise.all(pokedexData);


    
      setPokemon({
        pokemonDato: final
      });
      setNombresFiltrados(final);
    };

    fetDato();
  }, [quantity]);


  return (
    <div>
      <div>
        <label htmlFor="nombre">Nombre Pokemon </label>

        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleInputChange}
          value={nombre}
        />
      </div>

   
      <div>
        <label htmlFor="Type">typos de pokemon </label>

        <input
          type="text"
          id="types"
          name="types"
          onChange={handleInputChange}
          value={types}
        />
      </div>


      <button type="submit" onClick={seeMore}>
        agregar 10
      </button>
      <br></br>
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
            <p>Types: {typeNames.join(', ')}</p>
          </li>
        ))}
      </section>
    </div>
  );
};

export { PokemonData, PokedexApi, PokeApi };
