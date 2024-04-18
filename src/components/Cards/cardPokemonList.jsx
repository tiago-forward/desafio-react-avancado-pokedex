import { CardContainer } from "./cardPokemonList.style"

import { useContext } from "react"
import { PokemonContext } from "../../contexts/pokemonContext";

import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/themeContext";

export function CardPokemonList() {
    const { dataPokemons } = useContext(PokemonContext)
    const { theme } = useContext(ThemeContext)

    return (
        <CardContainer theme={theme}>
            <ul>
                {dataPokemons.names.map((name, index) => {
                    return (
                        <Link to={`pokemon-description?index=${index + 1}`} key={index}>
                            <li>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="Um pokemon" />
                                <span>{name}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </CardContainer>
    )
}