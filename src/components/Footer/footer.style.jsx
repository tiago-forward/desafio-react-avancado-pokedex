import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;

    p, span {
        line-height: 1.4rem;
        text-align: center;
        color: ${props => props.theme.paragraph};
    }

    span {
        font-weight: 700;
    }

    ul {
        display: flex;
        gap: 2rem;
        margin-bottom: 2rem;

        img {
            width: 2rem;
        }

    }
`