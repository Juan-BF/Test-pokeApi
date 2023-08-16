import React,  { useEffect, useState } from "react"


async function PokemonApi(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=3')
    const poke = await response.json()
    return poke.results
}
async function PokemonNameApi(pokeName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
    return await response.json()
}

const PokemonData = () =>{

    const [ PokeInf, setPokeInf ] = useState({
        namePokemon:[]
    })
    // console.log(namepokemon)

    useEffect(() =>{
        const fetData = async () =>{
            const pokemonDataApi = await PokemonApi()
            console.log(pokemonDataApi)
            const pokemonDetailApi = await Promise.all(pokemonDataApi.map(async result =>{
                const details = await PokemonNameApi(result.name)
                console.log(details)
            }))
            setPokeInf({
                namePokemon: pokemonDetailApi
            })
        }
        fetData()
    }, [])


}


export default PokemonData