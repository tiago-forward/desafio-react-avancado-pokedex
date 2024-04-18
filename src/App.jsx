import LogoPokemon from "./assets/logo-pokemon.png"

import { GlobalStyles } from "./styles/GlobalStyles"

import { PokemonProvider } from "./contexts/pokemonContext"
import { AppRoutes } from "./router/routes"

function App() {

  return (
    <>
      <GlobalStyles />
      <PokemonProvider>
        <header>
          <img width={"300px"} src={LogoPokemon} alt="Pokemon" />
        </header>
        <AppRoutes />
        <footer>
          
        </footer>
      </PokemonProvider>
    </>
  )
}

export default App