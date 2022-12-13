const fetchPokemon = name => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
    if (!res.ok) {
      return Promise.reject(
        new Error(`We don't have pokemon with name is "${name}"`)
      );
    }
    return res.json();
  });
};

const api = {
  fetchPokemon,
};

export default api;
