import IconLinkedIn from "../../assets/icon-linkedin.svg"
import IconGitHub from "../../assets/icon-github.svg"
import IconEmail from "../../assets/icon-email.svg"

import { FooterContainer } from "./footer.style";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";


export const Footer = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <FooterContainer theme={theme}>
            <p>Developed by <span>Tiago Forward</span></p>
            <p>Ajude-me a melhorar este código para aprimorar meus conhecimentos, entre em contato comigo ou crie um Fork do meu repositório em sua máquina</p>
            <p>Help me improve this code and my knowledge, contact me or create a Fork of my repository on your machine</p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/tiago-lacerda-devfrontend/" target="_blank">
                        <img title="LinkedIn" src={IconLinkedIn} alt="Icon LinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/tiago-forward" target="_blank">
                        <img title="GitHub" src={IconGitHub} alt="Icon GitHub" />
                    </a>
                </li>
                <li>
                    <a href="mailto:devtiagoforward@gmail.com" target="_blank">
                        <img title="Email" src={IconEmail} alt="Icon Email" />
                    </a>
                </li>
            </ul>
        </FooterContainer>
    )
};