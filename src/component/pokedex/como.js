import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


async function InfPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=30');
    const poke = await response.json();
    return poke.results;
}

async function Pokeondet(pokeId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
    return await response.json();
}

const Pokemeon = () => {

    const [pokemons, setPokemons] = useState([]); // Use a more descriptive name

    useEffect(() => {
        const fetchData = async () => {
            const pokeResults = await InfPokemon();
            const pokemonDetails = await Promise.all(pokeResults.map(async result => {
                const detail = await Pokeondet(result.name);
                return detail;
            }));

            setPokemons(pokemonDetails);
        };

        fetchData();
    }, []);

    return (
        <section>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <img src={pokemon.sprites.front_default} alt={`Pokemon ${index}`} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Pokemeon;



--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------






import React, { useEffect, useState } from 'react';

async function InfPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=30');
    const poke = await response.json();
    return poke.results;
}

async function Pokeondet(pokeName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`);
    return await response.json();
}

const Pokemeon = () => {
    const [idpoke, setPoke] = useState({
        pokede: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const pokeResults = await InfPokemon();
            const pokemonDetails = await Promise.all(pokeResults.map(async result => {
                const detail = await Pokeondet(result.name);
                return detail;
            }));

            setPoke({
                pokede: pokemonDetails
            });
        };

        fetchData();
    }, []);

    return (
        <section>
            <ul>
                {idpoke.pokede.map((pokemon, index) => (
                    <li key={index}>
                        <img src={pokemon.sprites.front_default} alt={`Pokemon ${index}`} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Pokemeon;
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
import { useEffect, useState } from 'react'



async function InfPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=30')
    const poke = await response.json()
    return poke.results
}

async function Pokeondet(pokeId){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
    return await response.json()
}



const Pokemeon = () =>{
    
    const [idpoke, setPoke] = useState({
        pokede: []
    })

    useEffect(() =>{
        const fetchData = async () =>{
            const pokeId = await InfPokemon()
            const data = await Pokeondet(pokeId)
            
            setPoke({
                pokede: data.pokede
            
             })
        }
        fetchData()


    })


    return(
     

        <section>
            <ul>
                {
                   idpoke.pokede.map((idpoke, index) =>{
                    return(
                        <li key={index}>
                            <img src={idpoke.sprites.front_default} alt={"imagem"}/>
                        </li>
                    )
                   })
                }
            </ul>
        </section>
    )



}

export default Pokemeon