import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
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
    
        &:hover {
            background-color: ${props => props.theme.hoverButton};
            box-shadow: inset rgb(255, 255, 255) 0px 0px 2px;
        }
        
        &:active {
            transform: scale(1.1);
        }
    }
`