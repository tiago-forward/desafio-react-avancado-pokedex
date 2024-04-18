import styled from "styled-components"

export const AbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-weight: 700;
        margin-top: 1rem;
        text-transform: capitalize;
        font-size: 1.2rem;
        color: ${props => props.theme.colorNameTag};
    }

    .description {
        margin-top: 1rem;
        text-align: justify;
        line-height: 1.4rem;
        text-indent: 1rem;
        color: ${props => props.theme.colorNameTag};
    }
`