import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../page/Home/home";
import { PokemonDescription } from "../page/PokemonDescription/pokemonDescription";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon-description" element={<PokemonDescription />} />
            </Routes>
        </BrowserRouter>
    )
}