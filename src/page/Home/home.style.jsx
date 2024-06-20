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

export const SearchInputContainer = styled.div`
    display:  flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid;
    color: ${props => props.theme.colorNameTitle};
    margin-bottom: 1rem;

    h1 {
        font-weight: 500;
        font-size: 1.4rem;
        letter-spacing: 0.2rem;

        color: ${props => props.theme.colorNameTitle};

        padding-bottom: 1rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 0.2rem;
    }

    input {
        outline: none;
        border: none;

        padding-left: 0.4rem;
        padding-right: 0.4rem;

        font-size: 1rem;
        
        color: ${props => props.theme.colorNameTitle};
        background-color: inherit;

        &::-webkit-input-placeholder {
            color: ${props => props.theme.inputPlaceholder};
        }

        &:-moz-placeholder {
            color: ${props => props.theme.inputPlaceholder};
        }

        &::-moz-placeholder {
            color: ${props => props.theme.inputPlaceholder};
        }

        &:-ms-input-placeholder {
            color: ${props => props.theme.inputPlaceholder};
        }
        
    }
`
