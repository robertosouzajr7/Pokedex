import { createContext, useState, useEffect } from "react";
import api from "../services/api";
export const PokemonContext = createContext({});

function PokemonProvider({ children }) {
  const [listPokemons, setListPokemons] = useState([]);
  const [filtred, setFiltred] = useState([]);
  const [newPokemon, setNewPokemon] = useState([
    {
      name: "",
      url: "",
    },
  ]);

  useEffect(() => {
    api
      .get(`pokemon/?offset=170&limit=55`)
      .then((response) => setListPokemons(response.data.results));
  }, []);

  function RemovePokemon(pokemon) {
    const removedItem = listPokemons.filter((item) => {
      return item.name !== pokemon.name;
    });
    setListPokemons([...removedItem]);
  }

  function RemoveMyPokemon(pokemon) {
    console.log(pokemon);
    const removedItem = newPokemon.filter((item) => {
      return item.name !== pokemon.name;
    });
    setNewPokemon([...removedItem]);
  }

  function FilterPokemon() {
    const findPokemon = listPokemons.find((item) => {
      return item.name.includes(filtred);
    });

    setListPokemons([findPokemon]);
  }
  return (
    <PokemonContext.Provider
      value={{
        listPokemons,
        setListPokemons,
        filtred,
        setFiltred,
        RemovePokemon,
        RemoveMyPokemon,
        FilterPokemon,
        setNewPokemon,
        newPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
