export const fetchPokemonList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const data = await response.json();
  
    return Promise.all(
      data.results.map(async (pokemon) => {
        const details = await fetch(pokemon.url).then((res) => res.json());
        return {
          id: details.id,
          name: details.name,
          sprite: details.sprites.front_default,
          types: details.types.map((t) => t.type.name),
        };
      })
    );
  };
  
  export const fetchTypes = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const data = await response.json();
    return data.results.map((type) => type.name);
  };
  