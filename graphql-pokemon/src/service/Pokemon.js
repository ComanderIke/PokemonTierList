import pokemons from '../pokemons/pokemons.json';

export async function getPokemons(args) {
  const { first, type } = args;
  let searchedPokemons = null;
  if (type) {
      searchedPokemons = getPokemonsByType(type);
      console.log(searchedPokemons);
  } else {
      searchedPokemons = pokemons.slice(0, first)
  }

  // const edges = searchedPokemons.map(pokemon => ({ node: pokemon }));

  return searchedPokemons || null;
}

export async function getPokemonsByType(pokemonTypeSearch) {
  const pokemonType = pokemonTypeSearch.toLowerCase().trim();

  const searchedPokemons = pokemons.filter(({types}) =>
    types.map( type => type.toLowerCase()).indexOf(pokemonType) > -1
  );

  console.log(searchedPokemons);
  return searchedPokemons || null;
}

export async function getPokemonById(pokemonId) {
  const pokemon = pokemons.filter(({ id }) =>
    parseInt(id, 10) === parseInt(pokemonId, 10)
  );

  return pokemon[0] || null;
}

export async function getPokemonByName(pokemonNameSearch) {
  const pokemonName = pokemonNameSearch.toLowerCase().trim();

  const pokemon = pokemons.filter(({ name }) =>
    name.toLowerCase() === pokemonName
  );

  if (pokemon) {
    return pokemon[0];
  }

  return pokemon[0] || null;
}

export async function getPokemonByEvolutions(evolutions) {
  if (!evolutions) {
    return null;
  }

  const pokemonNames = evolutions.map(evolution =>
    evolution.name.toLowerCase().trim()
  );

  const searchedPokemons = pokemons.filter(({ name }) =>
    pokemonNames.indexOf(name.toLowerCase()) !== -1
  );

  return searchedPokemons || null;
}
