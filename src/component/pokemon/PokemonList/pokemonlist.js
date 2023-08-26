import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokeApi } from "../service/pokeapi";
import { PokedexApi } from "../service/pokedetailsapi";
import { Pokk } from "../service/pokedetailsapi";

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


  
 


  const handleInputChange = (event) => {
    const letrasIngresadas = event.target.value.toLowerCase();

    const nombresFiltrados = pokemon.pokemonDato.filter((pokemonDato) =>
      pokemonDato.name.toLowerCase().startsWith(letrasIngresadas)
    );

    setNombre(event.target.value);
    setNombresFiltrados(nombresFiltrados);
    // console.log(nombre)
  };

  useEffect(() => {
    const fetDato = async () => {


      // const datosGeneralesPokemon = await PokedexApi(nombre)
      //  const datosDeHabilidades = (datosGeneralesPokemon.abilities)


      
// const poder = await Promise.all(pokedato)
      
async function PokedexApid(namePok){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${namePok}/`)
   
  const ester = await response.json()
  // console.log(ester)
  return ester
} 

PokedexApid("bulbasaur")



      const pokeDato = await PokeApi(quantity);


  //  console.log(pokedexData)
    
  const pokedexData3 = await Promise.all(
    pokeDato.map(async (result) => {
      const variable = result.name
      // const resul = variable.map(resu => resu.types.type.name)
      const resultPoke = await PokedexApid(result.name);
      
      return resultPoke;
    })
  );


      const pokedexData = await Promise.all(
        pokeDato.map(async (result) => {
          const variable = result.name
          const resultPoke = await PokedexApi(result.name);
          const resul = resultPoke.types

          const repos =await Promise.all(resul.map(async (re) =>{
            const resposta = re.type.name
           return resposta
          } ))
          console.log(variable + ' ' + repos)
          // console.log(repos + )
          

          // console.log(variable)
          return resultPoke;
        })
      );


      const pokedexData2 = await Promise.all(
        pokedexData.map(async (result) => {
          const igual = result
          // const resultPoke = await Pokk(result);
          // const resultado = resultPoke.types
          // console.log(igual)
          // return resultado;
        })
      );

// console.log(pokedexData)
      
      // const inte = pokedexData.map(poked => poked.forms)
      
      // console.log(inte)



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
          value={nombre}
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
