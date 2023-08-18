import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokemonDetail } from "../detailspokemon/detailspoke"; 
import { PokemonData } from '../pokedex/pokedex'

const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PokemonData/>}/>
            <Route path="/:pokemonName" element={<PokemonDetail />} />
        </Routes>
    </BrowserRouter>
        )
}

export default AppRoutes