import axios from "axios"

const repositoriesQuantity = 10
const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2/pokemon/`
})
//?limit=${repositoriesQuantity}

export { api, repositoriesQuantity }