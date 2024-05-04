import { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { PokemonContext } from "../../contexts/PokemonContext";
import { CaixaInput, ContainerGlobal, DivMeusPokemons } from "./style";

function FormPokemon() {
  const {
    listPokemons,
    setListPokemons,
    newPokemon,
    setNewPokemon,
    RemoveMyPokemon,
    filtred,
    setFiltred,
    FilterPokemon,
  } = useContext(PokemonContext);
  const [data, setData] = useState({
    name: newPokemon.nome,
    url: newPokemon.url,
  });

  const HandleInput = () => {
    setNewPokemon([...newPokemon, data]);
  };
  return (
    <ContainerGlobal>
      <CaixaInput>
        <h2>Pesquisar Pokemon</h2>
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={(event) => setFiltred(event.target.value)}
        />
        <button
          onClick={() => {
            setListPokemons([listPokemons]);
            FilterPokemon();
          }}
        >
          Pesquisar
        </button>
        <h2>Criar Pokemon</h2>
        <input
          type="text"
          placeholder="nome do pokemon"
          onChange={(event) => setData({ name: event.target.value, url: "" })}
        />
        <button onClick={HandleInput} type="submit">
          Adcionar
        </button>
      </CaixaInput>
      <DivMeusPokemons>
        <ul>
          <h2>Meu time de Pokemons</h2>
          {newPokemon.map((pokemon, index) => (
            <li key={index}>
              <h2>{pokemon.name}</h2>
              <BsTrash onClick={() => RemoveMyPokemon(pokemon)} />
            </li>
          ))}
        </ul>
      </DivMeusPokemons>
    </ContainerGlobal>
  );
}

export default FormPokemon;
