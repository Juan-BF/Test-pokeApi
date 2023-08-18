import { useParams } from "react-router-dom";
import { PokedexApi } from "../pokedex/pokedex";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonDetail = () => {
  const { pokemonName } = useParams();

  const [pokemonInf, setpokemonInf] = useState() 


    useEffect(() =>{
        const fetchPokemon = async () =>{
            const result = await PokedexApi(pokemonName)
            const results = (result.sprites.front_default)
            setpokemonInf(results)
        }
        fetchPokemon()
        
    },[pokemonName])

    
  return (
    <div>
        {<img src={pokemonInf}/>}
        
      
      <h2>Detalles de {pokemonName}</h2>
      <Link  to={`/`}> Regresar </Link>
    </div>
  );
};

export { PokemonDetail }
