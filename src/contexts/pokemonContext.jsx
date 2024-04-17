import { api } from "../services/api";

import { createContext } from "react";
import { useEffect, useState } from "react";

export const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
    const [dataPokemons, setDataPokemons] = useState({
        names: [],
        urls: []
    })
    const [visibleCount, setVisibleCount] = useState(10)

    useEffect(() => {
        async function getPokemonsList() {
            const responseApi = await api.get(`?limit=${visibleCount}`)
        
            setDataPokemons(prevState => ({
                ...prevState,
                names: responseApi.data.results.map(pokemon => pokemon.name),
                urls: responseApi.data.results.map(pokemon => pokemon.url)
            }))
        }

        getPokemonsList()
    }, [visibleCount]);

    return (
        <PokemonContext.Provider value={{ dataPokemons, visibleCount, setVisibleCount }}>
            {children}
        </PokemonContext.Provider>
    )
}