import { GlobalStyles } from "./styles/GlobalStyles"

import { useContext } from "react"
import { PokemonProvider } from "./contexts/pokemonContext"
import { ThemeContext } from "./contexts/themeContext"

import { AppRoutes } from "./router/routes"

import { Header } from "./components/Header/header"
import { Footer } from "./components/Footer/footer"

export function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div style={{backgroundColor: theme.backgroundPage, padding: '0 15px'}}>
      <GlobalStyles />
      <PokemonProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </PokemonProvider>
    </div>
  )
}
