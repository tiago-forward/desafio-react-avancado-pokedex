import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    border: none;
    width: 2rem;
    height: 2rem;
    position: relative;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: ${props => props.theme.backgroundButton};
    color: ${props => props.theme.colorButton};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.8s;

    &:hover {
        background-color: ${props => props.theme.hoverButton};
        box-shadow: inset rgb(255, 255, 255) 0px 0px 2px;
    }

    .bi-sun, .bt-moon {
        position: absolute;
        width: 35%;
        height: 65%;
        top: 9px;
        left: 9px;
        transition: 0.8s;
        border-radius: 1rem;
    }
`
