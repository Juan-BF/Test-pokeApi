import { useParams } from "react-router-dom";
import { PokedexApi } from "../PokemonList/pokemonlist";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const PokemonDetail = () => {
  const { pokemonName } = useParams();

  const [pokemonInf, setpokemonInf] = useState({
        pokemonImg:'',
        pokemonMoves:[],
        nombreCaracteristica:[],
  }) 


    useEffect(() =>{
        const fetchPokemon = async () =>{
            const datosGeneralesPokemon = await PokedexApi(pokemonName)
            const movimientos = (datosGeneralesPokemon.moves)
            const datosDeHabilidades = (datosGeneralesPokemon.abilities)
            const datoType = (datosGeneralesPokemon.forms) 
            const img = (datosGeneralesPokemon.sprites.front_default)


            const nombreDeMovimientos = movimientos.map(move => move.move.name);
            console.log(datoType)

            
            const apiDeHabilidadesPromesas = await Promise.all(datosDeHabilidades.map(async datosGeneralesPokemon =>{
              const url = datosGeneralesPokemon.ability.url
              const nombre = datosGeneralesPokemon.ability.name                    
              const respuestaApi = await fetch(url)
              const respuestaApiJson = await respuestaApi.json()
              const habilidades = respuestaApiJson.effect_entries
              const habilidadEn = habilidades.find(habilidad => habilidad.language.name === "en")
              const caracteristica = habilidadEn.effect

              


              return [nombre, caracteristica];            
            }))
           
            const habilidadesResult = await Promise.all(apiDeHabilidadesPromesas);

            setpokemonInf({
              pokemonImg : img,
              pokemonMoves : nombreDeMovimientos,
              nombreCaracteristica:habilidadesResult,

            })
        }
        fetchPokemon()
        
    },[pokemonName])


  return (
    <div> 
      
      <div>
    <ul>
      {pokemonInf.nombreCaracteristica.map(([nombre, caracteristica], index) => (
        <li key={index}>
          <p>{nombre}:</p> <span>{caracteristica}</span>
        </li>
      ))}
    </ul>
  </div>


        {<img src={pokemonInf.pokemonImg}/>}
            <h2>Detalles de {pokemonName}</h2>
            <Link  to={`/`}> Regresar </Link>
            <section>
              <ul>
            {pokemonInf.pokemonMoves.map((inf, index) =>{
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
