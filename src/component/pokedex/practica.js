import React, { useEffect, useState } from 'react';

async function InfPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=3');
    const poke = await response.json();
    return poke.results;
}

async function Pokeondet(pokeName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`);
    return await response.json();
}



const Pokemon1 = () =>{
    const [poke, setPoke] = useState({
        pokedex:[]
    });


    useEffect(() =>{
        const fetchData = async () =>{
            const pokeResult = await InfPokemon()
            const pokeDetails = await Promise.all(pokeResult.map(async result =>{
                const detail = await Pokeondet(result.name)
                return detail
            }));

            setPoke({
                pokedex : pokeDetail
            })
        }

        fetchData()
    },[])

    return(
        <section>
            <ul>
                {poke.pokedex.map((namePokemon, index) =>{
                    return(

                        <li key={index}>
                        <img src={namePokemon.sprites.front_default} alt={`Pokemooon ${namePokemon.name}`} />

                    </li>
                        )
                })}
                
            </ul>
        </section>
    )




}



export default Pokemon1;