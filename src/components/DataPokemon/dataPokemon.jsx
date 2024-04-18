import { Container } from "./dataPokemon.style";

import { api } from "../../services/api"
import { AbilitiesPokemon } from "./components/abilitiesPokemon";
import { TitleDataPokemon } from "./components/titleDataPokemon"

import { useState, useEffect } from "react"

import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export function DataPokemon() {
    const { theme } = useContext(ThemeContext)

    const location = useLocation();
    const index = new URLSearchParams(location.search).get('index');

    const [loadingStateApi, setLoadingStateApi] = useState(false)

    const [dataPokemon, setDataPokemon] = useState({
        id: '',
        name: '',
        typesAttribute: [],
        abilities: [],
        abilitiesDescriptionUrl: [],
        moves: []
    })

    useEffect(() => {
        async function getPokemonsDetails() {
            try {
                const response = await api.get(`${index}`)
                setDataPokemon(() => ({
                    id: response.data.id,
                    name: response.data.name,
                    typesAttribute: response.data.types.map((item) => item.type.name),
                    abilities: response.data.abilities.map((item) => item.ability.name),
                    abilitiesDescriptionUrl: response.data.abilities.map((item) => item.ability.url),
                    moves: response.data.moves.map((item) => item.move.name)
                }))
                setLoadingStateApi(true)
            } catch (error) {
                console.error(`Erro ao buscar os dados da API: ${error}`);
                setLoadingStateApi(false)
            }
        }

        getPokemonsDetails()
    }, []);

    return (
        <Container theme={theme}>
            {loadingStateApi
                ? (
                    <>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'end'}}>
                            <Link style={{margin: '1rem'}} to={"/"}>
                                <i style={{fontSize: '2rem'}} title="Return to home" class="bi bi-x-circle icon-closed"></i>
                            </Link>
                        </div>
                        <div className="header">
                            <h1 className="name-pokemon">{dataPokemon.name}</h1>
                            <div className="attribute-type-container">
                                {dataPokemon.typesAttribute.map((attribute, index) => (
                                    <span className="attribute-type" key={index}>{attribute}</span>
                                ))}
                            </div>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`} width={"200px"} alt="" />
                        </div>
                        <div className="description-container">
                            <TitleDataPokemon className="title" name="Abilities" />
                            <div className="abilities-description">
                                {dataPokemon.abilities.map((item, index) => (
                                    <AbilitiesPokemon key={index} ability={item} abilityUrl={dataPokemon.abilitiesDescriptionUrl[index]} />
                                ))}
                            </div>
                            <TitleDataPokemon className="title" name="Moves" />
                            <div className="moves-description">
                                {dataPokemon.moves.map((value, index) => (
                                    <span className="moves" key={index}>{index + 1}. {value}</span>
                                ))}
                            </div>
                        </div>
                    </>
                )
                : <p>Loading data...</p>
            }
        </Container>
    )
}