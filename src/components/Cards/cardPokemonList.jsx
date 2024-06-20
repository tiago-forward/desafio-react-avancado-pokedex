import { api } from "../../services/api";

import { CardContainer } from "./cardPokemonList.style"

import { useContext, useEffect, useState } from "react"
import { PokemonContext } from "../../contexts/pokemonContext";

import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/themeContext";

export function CardPokemonList({ filter }) {
    const { dataPokemons } = useContext(PokemonContext)
    const { theme } = useContext(ThemeContext)
    const [filteredPokemons, setFilteredPokemons] = useState([])
    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            try {
                const responseApi = await api.get(`?limit=1000`);
                const allPokemonsData = responseApi.data.results.map((pokemon, index) => ({
                    name: pokemon.name,
                    index: index + 1,
                }));
                setAllPokemons(allPokemonsData);
            } catch (error) {
                console.error(`Erro ao buscar a API: ${error}`);
            }
        };

        if (filter) {
            if (allPokemons.length === 0) {
                fetchAllPokemons();
            } else {
                const filtered = allPokemons.filter((pokemon) =>
                    pokemon.name.toLowerCase().includes(filter.toLowerCase())
                );
                setFilteredPokemons(filtered);
            }
        } else {
            const initialFiltered = dataPokemons.names.map((name, index) => ({
                name,
                index: index + 1,
            }));
            setFilteredPokemons(initialFiltered);
        }
    }, [filter, dataPokemons])

    return (
        <CardContainer theme={theme}>
            <ul>
                {filteredPokemons.map((pokemon) => {
                    return (
                        <Link to={`pokemon-description?index=${pokemon.index}`} key={pokemon.index}>
                            <li>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`} alt={`Pokemon ${pokemon.name}`} />
                                <span>{pokemon.name}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </CardContainer>
    )
}
