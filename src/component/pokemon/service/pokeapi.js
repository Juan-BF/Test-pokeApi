


async function PokeApi(quantity){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${quantity}`)
    const responseApi = await response.json()
    return responseApi.results
}





export { PokeApi } 