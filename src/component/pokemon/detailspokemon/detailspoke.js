import { useParams } from "react-router-dom";
import { PokedexApi } from "../PokemonList/pokemonlist";
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
      const  skillsDataUrl= resultData.abilities
      const  nameMove= resultData.moves.map((move) => move.move.name)
 

      const apiDeHabilidadesPromesas = await Promise.all(
        skillsDataUrl.map(async (datosGeneralesPokemon) => {
          const url = datosGeneralesPokemon.ability.url;
          const nombre = datosGeneralesPokemon.ability.name;
          const respuestaApi = await fetch(url);
          const respuestaApiJson = await respuestaApi.json();

          const habilidades = respuestaApiJson.effect_entries;
          const habilidadEn = habilidades.find(
            (habilidad) => habilidad.language.name === "en"
          );
          const caracteristica = habilidadEn.effect;

          return [nombre, caracteristica];
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
