import styled from "styled-components"

export const CardContainer = styled.div`
    
    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid var(--white);
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background-color: ${props => props.theme.backgroundCard};

        &:hover {
            box-shadow: rgba(255, 255, 255, 0.24) 0px 0px 20px;
            background-color: ${props => props.theme.hoverCard};
        }

        img {
            border-bottom-left-radius: 2.0rem;
            border-bottom-right-radius: 2.0rem;
            border-top-left-radius: 1.0rem;
            border-top-right-radius: 1.0rem;
            width: 15rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 70px;
            margin: 0.5rem;
        }

        span {
            color: ${props => props.theme.colorNameTitle};
            font-weight: 700;
            text-transform: capitalize;
            margin-bottom: 1rem;
            margin-top: 1rem;
        }
    }
`