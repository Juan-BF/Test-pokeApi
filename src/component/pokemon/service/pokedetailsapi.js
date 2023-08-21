async function PokedexApi(pokeName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
    return response.json()
} 



export { PokedexApi }