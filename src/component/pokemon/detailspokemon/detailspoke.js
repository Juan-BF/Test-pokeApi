import { useParams } from "react-router-dom";
import { PokedexApi } from "../PokemonList/pokemonlist";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonDetail = () => {
  const { pokemonName } = useParams();

  const [pokemonInf, setpokemonInf] = useState({
        pokemonImg:''
        
  }) 


    useEffect(() =>{
        const fetchPokemon = async () =>{
            const result = await PokedexApi(pokemonName)
            const img = (result.sprites.front_default)
            // const movimientos = (result.moves)
            // console.log(result.moves)
            setpokemonInf({
              pokemonImg:img
            })
        }
        fetchPokemon()
        
    },[pokemonName])

    
  return (
    <div>
        {<img src={pokemonInf.pokemonImg}/>}
        
      
      <h2>Detalles de {pokemonName}</h2>
      {/* <p>{movimientos}</p> */}
      <Link  to={`/`}> Regresar </Link>
    </div>
  );
};

export { PokemonDetail }
