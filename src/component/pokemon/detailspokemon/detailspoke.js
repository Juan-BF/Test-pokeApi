import { useParams } from "react-router-dom";
import { PokedexApi } from "../PokemonList/pokemonlist";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const PokemonDetail = () => {
  const { pokemonName } = useParams();

  const [pokemonInf, setpokemonInf] = useState({
        pokemonImg:'',
        pokemonMoves:[],
        // pokemonAbilitysName:[],
        pokes:[],
      
     
  }) 



    useEffect(() =>{
        const fetchPokemon = async () =>{
            const datosGeneralesPokemon = await PokedexApi(pokemonName)
            const movimientos = (datosGeneralesPokemon.moves)
            const datosDeHabilidades = (datosGeneralesPokemon.abilities)
            const img = (datosGeneralesPokemon.sprites.front_default)
          
        

            const nombreDeMovimientos = await Promise.all(movimientos.map(async datosGeneralesPokemon =>{
              const respuesta = await (datosGeneralesPokemon.move.name)
              return respuesta  
            }))
            


            // const nombresDeHabilidades = await Promise.all(datosDeHabilidades.map(async datosGeneralesPokemon =>{
            //   const respuesta = await (datosGeneralesPokemon.ability.name)
            //   return respuesta  
            // }))



            const apiDeHabilidadesPromesas = await Promise.all(datosDeHabilidades.map(async datosGeneralesPokemon =>{

              const url = datosGeneralesPokemon.ability.url
              const name = datosGeneralesPokemon.ability.name

              
              const respuestaApi = await fetch(url)
              const respuestaApiJson = await respuestaApi.json()

              const habilidades = respuestaApiJson.effect_entries
              const habilidadEn = habilidades.find(habilidad => habilidad.language.name === "en")
              const caracteristica = habilidadEn.effect
              const total = name + ':' + caracteristica

              return [total]
            }))
           
           

            setpokemonInf({
              pokemonImg : img,
              pokemonMoves : nombreDeMovimientos,
              // pokemonAbilitysName : nombresDeHabilidades,
              pokes:apiDeHabilidadesPromesas,
              

            })
        }
        fetchPokemon()
        
    },[pokemonName])








  return (
    <div> 
      
     
      {pokemonInf.pokes.map((ind, index) =>{
        return(
            <div key={index}>

            <p>{ind}</p>
            </div>
        )
    
      })}
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
