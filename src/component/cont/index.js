// import React from "react";
// import { PokeApi } from "../pokedex/pokedex";
// import { PokedexApi } from "../pokedex/pokedex";
// import { PokemonData } from "../pokedex/pokedex";
// import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'

// const Home = () => {

//     const [ pokemon, setPokemon ] =useState({
//         pokemonDato:[],
        
//     })
    

//     useEffect(() =>{
//         const fetDato = async () =>{
//             const pokeDato = await PokeApi()
//             const pokedexData = await Promise.all(pokeDato.map(async result =>{
//                 const resultPoke = await PokedexApi(result.name)
//                 // console.log(resultPoke.moves)
//                 return resultPoke
//             }))
        

//             setPokemon({
//                 pokemonDato: pokedexData
//             })
//         }

//         fetDato()

//     }, [])



//   return (
//     <section>
//       <ul>
//                 {pokemon.pokemonDato.map((pokemon, index) =>{
//                     return(
//                         <div>

//                         <li key={index}>
//                         <Link to={`/`}>
//                         <img src={pokemon.sprites.front_default} alt={`Pokemooon ${pokemon.name}`} />                          
//                         </Link>
//                         <p>{pokemon.name}</p>
//                         </li>
//                         </div>
//                     )
//                 })}
//             </ul>
//       <div>
//       <Link to={`/`}>
//       <h1> ----ir a inicio</h1>
//          </Link>
         


//       </div>
      
//     </section>
//   );
// };

// export { Home }
