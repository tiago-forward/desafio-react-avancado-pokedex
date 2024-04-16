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
    
    const photoPokemon = dataPokemons.urls.map((url) => {
        photo: `url`
    })

    useEffect(() => {
        async function getPokemonsList() {
            const responseApi = await api.get(``)


            handlePokemonCount(responseApi.data.count)
            setPokemonsList(responseApi.data.results)
        
            setDataPokemons(prevState => ({
                ...prevState,
                names: responseApi.data.results.map(pokemon => pokemon.name),
                urls: responseApi.data.results.map(pokemon => pokemon.url)
            }))
        }

        getPokemonsList()
        console.log(`https://pokeapi.co/api/v2/pokemon/1/`)
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemonsList, dataPokemons }}>
            {children}
        </PokemonContext.Provider>
    )
}