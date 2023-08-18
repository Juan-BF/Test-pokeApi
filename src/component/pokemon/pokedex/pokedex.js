import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PokeApi } from '../service/pokeapi'
import { PokedexApi } from '../service/pokedetailsapi'


const PokemonData = () =>{

    const [ pokemon, setPokemon ] =useState({
        pokemonDato:[],
        
    })
    const [quantity, setQuantity] = useState(10);

  const seeMore = () => {
    setQuantity(quantity + 1);
    
  };
  const showLess = () =>{
    setQuantity(quantity - 1);
}
 
      

    useEffect(() =>{
        const fetDato = async () =>{
            const pokeDato = await PokeApi(quantity)
            console.log(pokeDato)
            const pokedexData = await Promise.all(pokeDato.map(async result =>{
                const resultPoke = await PokedexApi(result.name)
                return resultPoke
            }))
        

            setPokemon({
                pokemonDato: pokedexData
            })
        }

        fetDato()
        


    },[quantity] )
   
  
    return(
        <div>
            <section>
            
            <ul>
            <button type="submit" onClick={seeMore}>agregar 10</button>
            <br></br>
            <button type="submit" onClick={showLess}>quitar 10</button>
                {pokemon.pokemonDato.map((pokemon, index) =>{
                    return(
                        <div key={index}>
                           <li>
                        <Link to={`/${pokemon.name}`}>
                        <img src={pokemon.sprites.front_default} alt={`Pokemon ${pokemon.name}`} />                          
                        </Link>
                        <p>{pokemon.name}</p>
                        
                        </li>
                        
                        </div>
                    )
                })}
            </ul>
            
            </section>
            
        </div>
        

        
    )


}








export { PokemonData, PokedexApi, PokeApi}