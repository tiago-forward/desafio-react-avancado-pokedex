import { api } from "../services/api";

import { createContext } from "react";
import { useEffect, useState } from "react";

export const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
    const [dataPokemons, setDataPokemons] = useState({
        names: []
    })
    const [cardCount, setCardCount] = useState(10)

    useEffect(() => {
        async function getPokemonsList() {
            try {
                const responseApi = await api.get(`?limit=${cardCount}`)

                setDataPokemons(prevState => ({
                    ...prevState,
                    names: responseApi.data.results.map(pokemon => pokemon.name)
                }))
            } catch (error) {
                console.error(`Erro ao buscar a API: ${error}`);
            }
        }

        getPokemonsList()
    }, [cardCount]);

    return (
        <PokemonContext.Provider value={{ dataPokemons, cardCount, setCardCount }}>
            {children}
        </PokemonContext.Provider>
    )
}