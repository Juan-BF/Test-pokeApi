import { useParams } from "react-router-dom";
import { PokedexApi } from "../PokemonListPage/PokemonData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




const PokemonDetail = () => {
  const { pokemonName } = useParams();

  const [pokemonInf, setpokemonInf] = useState({
    pokemonImg: "",
    pokemonMoves: [],
    nombreCaracteristica: [],
  });
  useEffect(() =>{

  },[])




  useEffect(() => {
    const fetchPokemon = async () => {

      const resultData = await PokedexApi(pokemonName);
      console.log(resultData)
      const  types= resultData.types.map((tipo) => tipo.type.name)
      const  imageUrl= resultData.sprites.front_default
      // const  imageUrl2= resultData.sprites.front_shiny
      const  skillsDataName= resultData.abilities.map((skill) => skill.ability.name)
      const  nameMove= resultData.moves.map((move) => move.move.name)


      const apiDeHabilidadesPromesas = await Promise.all(
        resultData.abilities.map(async ({ ability }) => {
          const { url, name } = ability
          const respuestaApi = await fetch(url);
          const respuestaApiJson = await respuestaApi.json();

          const habilidades = respuestaApiJson.effect_entries;
          const habilidadEn = habilidades.find(
            (habilidad) => habilidad.language.name === "en"
          );
          const caracteristica = habilidadEn.effect;
          return [name, caracteristica];
        })
      );

  

      setpokemonInf({
        pokemonImg: imageUrl,
        pokemonMoves: nameMove,
        nombreCaracteristica: apiDeHabilidadesPromesas,
      });
    };
    fetchPokemon();
  }, [pokemonName]);


  return (
    <div>
      <div>
        <ul>
          {pokemonInf.nombreCaracteristica.map(
            ([nombre, caracteristica], index) => (
              <li key={index}>
                <p>{nombre}:</p> <span>{caracteristica}</span>
              </li>
            )
          )}
        </ul>
      </div>

      {<img 
      src={pokemonInf.pokemonImg}
      alt={"imagen de " + {pokemonName} }
      />}
      <h2>Detalles de {pokemonName}</h2>
      <Link to={`/`}> Regresar </Link>
      <section>
        <ul>
          <h2>Movimientos de {pokemonName}</h2>
          {pokemonInf.pokemonMoves.map((inf, index) => {
            return (
              <div key={index}>
                <li>{inf}</li>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export { PokemonDetail };
