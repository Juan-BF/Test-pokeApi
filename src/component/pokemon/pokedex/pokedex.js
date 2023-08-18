import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PokeApi } from '../service/pokeapi'
import { PokedexApi } from '../service/pokedetailsapi'

// PokeApi()


// async function PokeApi(){
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=3')
//     const responseApi = await response.json()
//     return responseApi.results
        
// }

// async function PokedexApi(pokeName){
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
//     return response.json()
// }




const PokemonData = () =>{

    const [ pokemon, setPokemon ] =useState({
        pokemonDato:[],
        
    })
    

    useEffect(() =>{
        const fetDato = async () =>{
            const pokeDato = await PokeApi()
            const pokedexData = await Promise.all(pokeDato.map(async result =>{
                const resultPoke = await PokedexApi(result.name)
                // console.log(resultPoke.url)
                return resultPoke
            }))
        

            setPokemon({
                pokemonDato: pokedexData
            })
        }

        fetDato()

    }, [])



    return(
        <div>
            <section>
            <ul>
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