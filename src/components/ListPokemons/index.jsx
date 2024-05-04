import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { BsTrash } from "react-icons/bs";
import { DivMeusPokemons } from "./style";

function ListPokemons() {
  const { listPokemons, RemovePokemon } = useContext(PokemonContext);

  return (
    <DivMeusPokemons>
      <ul>
        <h2>Meus Pokemons</h2>
        {listPokemons.map((pokemon) =>
          pokemon.length < 0 ? (
            <li key={pokemon.name}></li>
          ) : (
            <li key={pokemon.name}>
              <h2>{pokemon.name}</h2>
              <BsTrash onClick={() => RemovePokemon(pokemon)} />
            </li>
          )
        )}
      </ul>
    </DivMeusPokemons>
  );
}

export default ListPokemons;
