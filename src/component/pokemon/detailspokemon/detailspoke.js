import { useParams } from "react-router-dom";
import { PokedexApi } from "../PokemonList/pokemonlist";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonDetail = () => {
  const { pokemonName } = useParams();

  const [pokemonInf, setpokemonInf] = useState({
        pokemonImg:'',
        pokemonMov:[]
  }) 


    useEffect(() =>{
        const fetchPokemon = async () =>{
            const result = await PokedexApi(pokemonName)
            const detail = (result.moves)
            const details = await Promise.all(detail.map(async result =>{
              const resuldet = await (result.move.name)
              return resuldet
              
            }))
            const img = (result.sprites.front_default)

            setpokemonInf({
              pokemonImg : img,
              pokemonMov : details
            })
        }
        fetchPokemon()
        
    },[pokemonName])

    
  return (
    <div>
      
        {<img src={pokemonInf.pokemonImg}/>}
      <h2>Detalles de {pokemonName}</h2>
      <Link  to={`/`}> Regresar </Link>
      <section>
        <ul>

      {pokemonInf.pokemonMov.map((inf, index) =>{
        return(
          <div key={index}>
            <li>
            {inf}
            </li>
          </div>
        )
      })}
        
      </ul>
      </section>
    </div>
  );
};

export { PokemonDetail }
