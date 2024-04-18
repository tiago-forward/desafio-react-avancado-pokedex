import LogoPokemon from "./assets/logo-pokemon.png"

import { GlobalStyles } from "./styles/GlobalStyles"

import { useContext } from "react"
import { PokemonProvider } from "./contexts/pokemonContext"
import { ThemeContext } from "./contexts/themeContext"

import { AppRoutes } from "./router/routes"

import { ThemeTogglerButton } from "./components/ThemeTogglerButton/themeTogglerButton"
import { Footer } from "./components/Footer/footer"

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{backgroundColor: theme.backgroundPage, padding: '0 15px'}}>
      <GlobalStyles />
      <PokemonProvider>
        <header>
          <img width={"300px"} src={LogoPokemon} alt="Pokemon" />
          <ThemeTogglerButton />
        </header>
        <AppRoutes />
        <Footer />
      </PokemonProvider>
    </div>
  )
}

export default App