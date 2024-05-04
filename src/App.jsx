import "./App.css";
import ListPokemons from "./components/ListPokemons";
import FormPokemon from "./components/MyPokemons";
import logo from "../src/assets/Title.png";

function App() {
  return (
    <main>
      <header>
        <img src={logo} alt="Logo Pokedex" />
      </header>
      <div className="App-header">
        <FormPokemon />
        <ListPokemons />
      </div>
    </main>
  );
}

export default App;
