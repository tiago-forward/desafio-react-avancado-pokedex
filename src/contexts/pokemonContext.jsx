import { createContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
    const [pokemonsList, setPokemonsList] = useState([])
    const [dataPokemons, setDataPokemons] = useState({
        names: [],
        urls: []
    })
    const [visibleCount, setVisibleCount] = useState(10)

    async function handlePokemonCount(count) {
        let countPokemons = count 
        return countPokemons //1302
    }

    useEffect(() => {
        async function getPokemonsList() {
            const responseApi = await api.get(`?limit=${visibleCount}`)


            handlePokemonCount(responseApi.data.count)
            setPokemonsList(responseApi.data.results)
        
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