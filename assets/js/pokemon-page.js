function pokemonPage(pokemon) {
    return `
    <div class="pokemonPage ${pokemon.type}">
        <div class="topContainer">
        <div class="backMenu">
            <a href="index.html"><img class="backButton" src="assets/img/left-arrow-svgrepo-com.svg" alt="back"></a>
            <input type="checkbox" class="checkbox" id="checkbox">
            <label for="checkbox" class="likeButton"></label>
        </div>
        <div class="header">
            <div>
                <h1 class="pokemonName">${pokemon.name}</h1>
                <ol class="pokemonTypes">
                ${pokemon.types.map(type => `<li class="pokemonType ${type}">${type}</li>`).join('')}
                </ol>
            </div>
            <span>#${pokemon.id}</span>
        </div>
        <img src=${pokemon.photo
        } alt="" class="pokemonPhoto">
        </div>
        <div class="detailContent">
            <nav class="nav">
                <ul class="navList">
                    <li class="navItem">About</li>
                    <li class="navItem">Basis Stats</li>
                    <li class="navItem">Evolution</li>
                    <li class="navItem">Moves</li>
                </ul>
            </nav>
            <p class="attributes">Species<span class="pokemonData">${pokemon.species}</span></p>
            <p class="attributes">Height<span class="pokemonData">${pokemon.height}</span></p>
            <p class="attributes">Weight<span class="pokemonData">${pokemon.weight}</span></p>
            <p class="attributes">Abilities<span class="pokemonData">${pokemon.abilities}</span></p>

        </div>

    </div>
    `
}