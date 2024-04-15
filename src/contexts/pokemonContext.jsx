import { createContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export const PokemonContext = createContext()

export const PokemonProvider = ({ children}) => {
    const [pokemonsList, setPokemonsList] = useState([])

    async function handlePokemonCount(count) {
        let countPokemons = count //1302
        return countPokemons
    }

    useEffect(() => {
        async function getPokemons() {
            const response = await api.get(``)
            handlePokemonCount(response.data.count)
            setPokemonsList(response.data.results)
            console.log(response)
        }

        getPokemons()
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemonsList }}>
            {children}
        </PokemonContext.Provider>
    )
}