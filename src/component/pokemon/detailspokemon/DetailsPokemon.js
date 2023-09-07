import { useParams } from "react-router-dom";
import GetPokemonData from "../service/GetPokemonData";
import { useState, useEffect, useRef } from "react";
// import {DivChange} from "../PokemonListPage/PokemonListStyled";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import "../detailspokemon/style.css";
import { DivBig, DivPrim, DivInf, MovInf,CustomLink } from "./DetailsPokemonStyled";


const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [PokemonDato, setPokemonDato] = useState({
    idpokemon: 1,
    imageUrl: "",
    typesDato: [],
    abilitisData: [],
    pokemonMoveName: [],
    pokemonNameUp: "",
    imgdefault: "",
  });
  console.log("gol");
  useEffect(() => {
    const fetchPokemon = async () => {
      const resultData = await GetPokemonData(pokemonName);
      const { abilities, sprites, moves, types, name, id } = resultData;
      const imagePokemon = sprites.other.dream_world.front_default;
      const imagepokemondefault = sprites.front_default;
      const sedimg = sprites.other.dream_world.front_default;
      console.log(sedimg);
      const Types = types.map((type) => type.type.name);

      const movesName = moves.map((move) => move.move.name);
      const detailsAbilites = await Promise.all(
        abilities.map(async ({ ability }) => {
          const { name, url } = ability;
          const fetchPokemonAbility = await fetch(url);
          const answer = await fetchPokemonAbility.json();
          const descrition = answer.effect_entries.find(
            (effect) => effect.language.name === "en"
          ).effect;
          return [name, descrition];
        })
      );

      setPokemonDato({
        idpokemon: id,
        imageUrl: imagePokemon,
        typesDato: Types,
        abilitisData: detailsAbilites,
        pokemonMoveName: movesName,
        pokemonNameUp: name,
        imgdefault: imagepokemondefault,
      });
    };
    fetchPokemon();
  }, [pokemonName]);

  console.log(PokemonDato.idpokemon);

  const linkRef = useRef(null);
  const [numeroPokemon, setNumeroPokemon] = useState(Number(pokemonName));

  const handleSumaClick = () => {
    setNumeroPokemon((prevNumero) => (prevNumero >= 700 ? 1 : prevNumero + 1));
    linkRef.current.click();
  };

  const handleRestaClick = () => {
    setNumeroPokemon((prevNumero) => (prevNumero <= 1 ? 700 : prevNumero - 1));
    linkRef.current.click();
  };

  useEffect(() => {
    linkRef.current.click();
  }, [numeroPokemon]);

  return (
    <DivBig>
      
      <DivPrim>
        {
          <img
            src={
              PokemonDato.imageUrl
                ? PokemonDato.imageUrl
                : PokemonDato.imgdefault
            }
            alt={"imagen de " + PokemonDato.pokemonNameUp}
          />
        }
        <DivInf>
          <h2>Detalles de {PokemonDato.pokemonNameUp}</h2>
          <ul>
            {PokemonDato.abilitisData.map(([name, description], index) => (
              <li key={index}>
                <p>Ability {name}:</p> <span>{description}</span>
              </li>
            ))}
          </ul>
        </DivInf>
      </DivPrim>

      {/* <div> */}
      <MovInf>
        <h2>{"Movimientos de" + PokemonDato.pokemonNameUp}</h2>
        <ul>
          {PokemonDato.pokemonMoveName.map((inf, index) => {
            return (
              <div key={index}>
                <li>{inf}</li>
              </div>
            );
          })}
        </ul>
      </MovInf>

      <Link ref={linkRef} to={`/${numeroPokemon}`}></Link>
     
        <CustomLink to={`/`}> Regresar</CustomLink>
    
      <Button
        nameBtnMore="Siguente"
        nameBtnLess="Anterior"
        seeMore={handleSumaClick}
        showLess={handleRestaClick}
      />
      {/* </div> */}
    </DivBig>
  );
};

export { PokemonDetail };
