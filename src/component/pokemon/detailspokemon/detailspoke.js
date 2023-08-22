import { useParams } from "react-router-dom";
import { PokedexApi } from "../PokemonList/pokemonlist";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const PokemonDetail = () => {
  const { pokemonName } = useParams();

  const [pokemonInf, setpokemonInf] = useState({
        pokemonImg:'',
        pokemonMov:[],
        pokemonAbilitys:[]
  }) 
  
  const [details, setDetails] = useState()




    useEffect(() =>{
        const fetchPokemon = async () =>{
            const result = await PokedexApi(pokemonName)
            const detail = (result.moves)
            const detaiil = (result.abilities)
            const img = (result.sprites.front_default)
          
            // console.log(detaiil)
            const details = await Promise.all(detail.map(async result =>{
              const respuesta = await (result.move.name)
              
              return respuesta  
            }))
            
            // console.log(details)

            const dabiliti = await Promise.all(detaiil.map(async result =>{
              const respuesta = await (result.ability.name)
              console.log(result)
              return respuesta  
            }))
            
            // 
            
            
            const Description = await Promise.all(detaiil.map(async result =>{
              const respuesta = await (result.ability.url)
              
              const respuestaFet = await fetch (`${respuesta}`)
              const retrun =await  respuestaFet.json()
              const retdr = (retrun.effect_entries)
              // console.log(retrun)



              const int = await Promise.all(retdr.map(async resultt =>{
                const respueest = await (resultt)
                // console.log(respueest)
                
              }))
              
              return respuesta
            }))

            setDetails({
              details:Description
            })









            setpokemonInf({
              pokemonImg : img,
              pokemonMov : details,
              pokemonAbilitys : dabiliti
            })
        }
        fetchPokemon()
        
    },[pokemonName])

  return (
    <div>
      
      {pokemonInf.pokemonAbilitys.map((ind, index) =>{
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
