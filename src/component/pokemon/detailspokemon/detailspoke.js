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
              const datosDeHabilidades = (datosGeneralesPokemon.abilities)
              const img = (datosGeneralesPokemon.sprites.front_default)
            
              const DatoTypeUrl = datosGeneralesPokemon.forms.map(type => type.url)
              const nombreDeMovimientos = datosGeneralesPokemon.moves.map(move => move.move.name);
            
            

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
           

            // const respuestappa = await fetch(datoTypeUrl)
            // const respuestappaJson = await respuestappa.json()
            // const nombreType = respuestappaJson.types
            // .map(type => type.type.name)
            // .reverse()


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
