import { createContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export const PokemonContext = createContext()

export const PokemonProvider = ({ children}) => {
    const [pokemonsList, setPokemonsList] = useState([])
    const [dataPokemons, setDataPokemons] = useState({
        names: [],
        urls: []
    })

    async function handlePokemonCount(count) {
        let countPokemons = count 
        return countPokemons //1302
    }

    // async function getDataPokemon() {
    //     const newDataPokemons = pokemonsList.map((pokemon) => ({
    //         name: pokemon.name,
    //         url: pokemon.url
    //     }))
    // }
    
    // getDataPokemon()
    
    useEffect(() => {
        async function getPokemonsList() {
            const response = await api.get(``)
            handlePokemonCount(response.data.count)
            setPokemonsList(response.data.results)
        
            setDataPokemons(prevState => ({
                ...prevState,
                names: response.data.results.map(pokemon => pokemon.name),
                urls: response.data.results.map(pokemon => pokemon.url)
            }))
        }

        getPokemonsList()
        console.log(dataPokemons)
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemonsList, dataPokemons }}>
            {children}
        </PokemonContext.Provider>
    )
}