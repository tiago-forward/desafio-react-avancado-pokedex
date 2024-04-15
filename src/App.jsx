import { PokemonProvider } from "./contexts/pokemonContext"
import { Home } from "./page/home"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {

  return (
    <>
      <GlobalStyles />
      <PokemonProvider>
        <Home />
      </PokemonProvider>
    </>
  )
}

export default App