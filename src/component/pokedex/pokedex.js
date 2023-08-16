import React, { useState, useEffect } from 'react'


async function PokeApi(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=3')
    const responseApi = await response.json()
    return responseApi.results
        
}

async function PokedexApi(pokeName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
    return response.json()
}


const PokemonData = () =>{

    const [ pokemon, setPokemon ] =useState({
        pokemonDato:[]
    })


    useEffect(() =>{
        const fetDato = async () =>{
            const pokeDato = await PokeApi()
            const pokedexData = await Promise.all(pokeDato.map(async result =>{
                const resultPoke = await PokedexApi(result.name)
                return resultPoke
            }))


            setPokemon({
                pokemonDato: pokedexData
            })
        }

        fetDato()

    }, [])




    return(
        <section>
            <ul>
                {pokemon.pokemonDato.map((pokemon, index) =>{
                    return(
                        <li key={index}>
                        <img src={pokemon.sprites.front_default} alt={`Pokemooon ${pokemon.name}`} />
                        </li>
                    )
                })}
            </ul>



        </section>
    )


}








export default PokemonData