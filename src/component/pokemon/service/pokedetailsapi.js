async function PokedexApi(pokeName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
    const result = await response.json()
    return result


} 


export { PokedexApi }