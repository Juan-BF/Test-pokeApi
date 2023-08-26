async function PokedexApi(pokeName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
    return response.json()
} 

async function Pokk(pokeName){
    const response = await fetch(`https://pokeapi.co/api/v2/type/${pokeName}/`)
    return response.json()
} 


export { PokedexApi, Pokk }