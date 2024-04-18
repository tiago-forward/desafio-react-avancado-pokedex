import "bootstrap-icons/font/bootstrap-icons.css";

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
                        <i title="LinkdIn" class="bi bi-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/tiago-forward" target="_blank">
                        <i title="GitHub" class="bi bi-github"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:devtiagoforward@gmail.com" target="_blank">
                        <i title="Email" class="bi bi-envelope"></i>
                    </a>
                </li>
            </ul>
        </FooterContainer>
    )
};