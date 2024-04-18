import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    width: 7rem;
    height: 2rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: ${props => props.theme.backgroundButton};
    font-weight: 600;
    color: ${props => props.theme.colorButton};

    &:hover {
        background-color: ${props => props.theme.hoverButton};
        box-shadow: inset rgb(255, 255, 255) 0px 0px 2px;
    }
`