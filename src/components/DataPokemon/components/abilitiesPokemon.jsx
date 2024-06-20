import { AbilitiesContainer } from "./abilitiesPokemon.style";

import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { ThemeContext } from "../../../contexts/themeContext";

export function AbilitiesPokemon({ ability, abilityUrl }) {
    const { theme } = useContext(ThemeContext)

    const [abilityDescription, setAbilityDescription] = useState([]);

    useEffect(() => {
        async function fetchAbilityDescription() {
            try {
                const response = await axios.get(abilityUrl);
                const description = response.data.effect_entries;
                setAbilityDescription(description);
            } catch (error) {
                console.error(`Erro ao buscar a descrição da habilidade na API: ${error}`);
            }
        }

        fetchAbilityDescription();
    }, []);
      
  return (
    <AbilitiesContainer theme={theme}>
      <span className="title">{ability}</span>
        {abilityDescription
            ? (
                <>
                    {abilityDescription.map((description, index) => (
                        <p className="description" key={index}>{description.effect}</p>
                    ))}
                </>
            )
            : <p className="description">Loading description...</p>
        }
    </AbilitiesContainer>
  )
}
