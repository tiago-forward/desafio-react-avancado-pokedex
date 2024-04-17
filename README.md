# Desafio React Avançado - Teste Técnico (DevQuest) | Projeto Pokédex

## Tabela do Conteudo

<ul>
<li><a href="#introdução">Introdução</a></li>
<li><a href="#objetivo">Objetivo</a></li>
<li><a href="#status">Status</a></li>
<!-- <li><a href="#curiosidade">Curiosidade</a></li> -->
<li><a href="#tecnologias-utilizadas">Tecnologias</a></li>
<li><a href="#instalando-e-executando-o-projeto">Instalação</a></li>
</ul>

## Introdução

#### Esse desafio faz parte do curso DevQuest, ele serve para nos desafiarmos e nos preparar para futuros testes técnicos no mercado de trabalho. Desenvolvi este projeto através dos conteúdos ensinados no curso e as documentações.

## Objetivo

#### Criar uma página inicial de listagem de alguns pokemons, utilizando a api [https://pokeapi.co/](https://pokeapi.co/) e criar uma página interna de detalhes do pokemon.

<li>Neste projeto contém as seguintes informações:<br><br>

    1. A home apresenta uma listagem com 10 pokemons iniciais; ✅

    2. Na home, contém a baixo da lista, um botão "Carregar mais" que quando clicado, busca mais 10 pokemons e adiciona a listagem atual; ✅

    3. Essas listagens mostra a imagem e nome de cada pokemon; ✅

    4. Na listagem, ao clicar em cada pokemon, vai exibir um container de informações detalhadas sobre o pokemon, como: ✅
        - Tipo do pokemon (type). ✅
        - Lista de movimentos do pokemon (moves); ✅
        - Lista de habilidades do pokemon (abilities); ✅
        - Na lista de habilidades apresenta o nome e o texto
    descritivo da habilidade. ❌


<li>Foram aplicados os seguintes requistos técnicos:<br><br>

    1. Single Page Application (SPA); ✅

    Exibindo todo o conteúdo que o usuário deseja em uma única página, sem recarregar.

    2. React.js; ✅
    
    Desenvolvimento prático, flexível e dinâmico da aplicação.
    
    3. Context API; ❌
    
    Criação do Theme Toggler, para alternar entre os tema claro e escuro de forma global.

    4. Styled Components; ✅
    
    Para melhor estilização dos componentes e de fácil manutenção.
    
    5. React Router Dom. ✅
    
    Para uma melhor navegação entre as páginas de modo SPA.


## Status

Projeto iniciado. 🥰

<!-- ### Layout Desktop / Mobile
<img src="./src/gif/projeto-funcionando.gif" alt="Gif do desafio funcionando em ambas as telas"> -->

<!-- ## Curiosidade

Este desafio me proporcionou muita satisfação ao concluí-lo. Além disso, pude observar a qualidade da estrutura e organização do código, que são ensinadas pelos professores do curso DevQuest no módulo de JavaScript. Consegui compreender todas as explicações sobre a construção do código e pude concluir as 3 solicitações, mantendo a estrutura original do código. -->

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- React
- Context API
- Styled Components
- React Router Dom
- GIT

<!-- - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->


axios

## Instalando e executando o projeto

1º Clone o repositório do projeto em HTTPS ou SSH com sua SSH key
```bash
HTTPS
  git clone https://github.com/tiago-forward/desafio-react-avancado-pokedex.git

SSH
  git clone git@github.com:Igor-progm/app-pokedex-quest-react-avancado.git
```
Em sua máquina, crie uma nova pasta e execute o git, e em seguida cole um dos links acima.
<br>
<br>

2º Entre no diretório do projeto na qual foi clonado

```bash
  cd desafio-react-avancado-pokedex
```
<br>

3º Execute o comando abaixo para instalar todas as dependências utilizadas

```bash
  npm install
```
<br>

4º Inicialize a aplicação para ver o código funcionando na web

```bash
  npm run dev
```

<!-- ## Contribuições

Contribua com esse projeto e me ajuda a aprender melhores soluções de código e novas funcionalidades -->