const pokeApi = {}



convertPokeApiDetailToPokemon = (pokeDetail) => {
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.id = pokeDetail.id

    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
    const [type] = types
    
    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.species = pokeDetail.species.name
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight
    pokemon.abilities = pokeDetail.abilities.map(abilitySlot => abilitySlot.ability.name).join(', ')

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())
        .then( convertPokeApiDetailToPokemon)
}

const detalhesPokemons = pokeApi.getPokemon = (offset, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then(resposta => resposta.json())
        .then(body => body.results)
        .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
        .then(detailRequests => Promise.all(detailRequests))
        //.then(pokemonDetails => pokemonDetails)
        .catch(error => console.error(error))

}
