import axios from "axios";
import { useEffect, useState } from "react";

export function AbilitiesPokemon({ ability, abilityUrl }) {
    const [abilityDescription, setAbilityDescription] = useState([]);

    useEffect(() => {
        async function fetchAbilityDescription() {
            try {
                const response = await axios.get(abilityUrl);
                const description = response.data.effect_entries;
                setAbilityDescription(description);
            } catch (error) {
                console.error(`Erro ao buscar descrição da habilidade: ${error}`);
            }
        }

        fetchAbilityDescription();
    }, []);
      
  return (
    <div>
      <span>{ability}</span>
      <br />
      <br />
        {abilityDescription && (
            <>
                {abilityDescription.map((item, itemIndex) => (
                    <p key={itemIndex}>{item.effect}</p>
                ))}
            </>
        )}
      <br />
    </div>
  );
}