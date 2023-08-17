import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from '../component/post'
import PokemonDetail from "../component/cont/pdetail"; // Componente de detalles de Pokémon
import { Home } from '../component/cont/index';

const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Posts/>}/>
            <Route exact path='/' element={<Posts/>}/>
            <Route path="/:pokemonName" element={<PokemonDetail />} />
        </Routes>
    </BrowserRouter>
        )
}

export default AppRoutes