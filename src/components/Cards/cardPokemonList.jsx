import { CardContainer } from "./cardPokemonList.style"

import { useContext } from "react"
import { PokemonContext } from "../../contexts/pokemonContext";

import { Link } from "react-router-dom";

export function CardPokemonList() {
    const { dataPokemons, datailsPokemon } = useContext(PokemonContext)

    return (
        <CardContainer>
            <div>
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
            </div>
        </CardContainer>
    )
}