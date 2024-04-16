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
        margin-bottom: 2rem;
        margin-top: 2rem;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
    
        &:hover {
            background-color: #f3f3f383;
        }
        
        &:active {
            transform: scale(1.1);
        }
    }
`