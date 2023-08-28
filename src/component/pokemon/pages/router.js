import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { PokemonDetail } from "../detailspokemon/DetailsPokemon";
import { PokemonData } from "../PokemonListPage/PokemonData.js";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PokemonData/>} />
        <Route path="/:pokemonName" element={<PokemonDetail />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
