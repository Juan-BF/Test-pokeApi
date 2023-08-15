import { useEffect, useState } from 'react'



async function InfPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=30')
    const poke = await response.json()
    console.log(poke)
    console.log(poke.results)
}


const Pokemeon = () =>{
    
    InfPokemon()
}

export default Pokemeon