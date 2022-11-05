const root = document.getElementById('root')
root.innerHTML = init()
const ol = document.getElementById('pokemons')
const previousButton = document.getElementById('previousButton')
const nextButton = document.getElementById('nextButton')


const maxRecords = 151
const limit = 10
let offset = 0

const convertPokemonToHTML = (pokemon) => {

    return `
        <li id="link${pokemon.id}" class="pokemon ${pokemon.type}">
            <span class="number ${pokemon.type}">#${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <img src=${pokemon.photo
        }>
                <ol class="types">
                    ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                    
                </ol>                    
            </div>
        </li>                
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemon(offset, limit).then(pokemons => {
        const newHTML = pokemons.map((pokemon) => convertPokemonToHTML(pokemon)).join('')
        ol.innerHTML = newHTML
        
        const links = pokemons.map(pokemon =>  "#link" + pokemon.id)
        
        for(i = 0; i < links.length; i++){
            const linkButton = document.querySelector(links[i])
            const id = i

            if (linkButton != null){
                linkButton.addEventListener('click', () => {
                   clickedPokemon = pokemons[id]
                   console.log(clickedPokemon)
                    const pokemonHTML = pokemonPage(clickedPokemon)
                    
                   root.innerHTML = pokemonHTML
                })
            }
            
        }

        
            
        

        

            
    })
        

            
       
}
loadPokemonItens(offset, limit)
previousButton.style.display = "none"

nextButton.addEventListener('click', () => {
    offset += limit
    if (maxRecords - offset > limit) {
        loadPokemonItens(offset, limit)
        previousButton.style.display = "block"
    } else {
        const lastLimit = maxRecords - offset
        loadPokemonItens(offset, lastLimit)
        nextButton.style.display = "none"
    }
})

previousButton.addEventListener('click', () => {
    offset -= limit
    loadPokemonItens(offset, limit)
    nextButton.style.display = "block"
    if (offset == 0) {
        previousButton.style.display = "none"
    }
})


