import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    width: 10rem;
    height: 3rem;
    border-radius: 0.5rem;
    margin-top: 2rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: ${props => props.theme.backgroundButton};
    font-weight: 600;
    color: ${props => props.theme.colorButton};
`