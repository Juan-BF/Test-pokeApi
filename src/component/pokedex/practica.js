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
                        <img src={pokemon.sprites.front_default} alt={`Pokemon ${pokemon.name}`} />
                        <p>{pokemon.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Pokemeon;