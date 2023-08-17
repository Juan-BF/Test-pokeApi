import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { pokemonName } = useParams();
    
  // Aquí puedes usar el nombre del Pokémon para cargar y mostrar su información

  return (
    <div>
      <h2>Detalles de {pokemonName}</h2>
      {/* Mostrar más información del Pokémon aquí */}
    </div>
  );
}

export default PokemonDetail;