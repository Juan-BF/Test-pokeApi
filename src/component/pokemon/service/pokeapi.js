async function PokeApi(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=5')
    const responseApi = await response.json()
    return responseApi.results
}

export { PokeApi } 