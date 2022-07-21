import logo from './logo.svg';
import './App.css';

import PokemonTable from './PokemonTable'

const pokemonArray = [
  {
    id: '001',
    name: "Bulbasaur",
    types: ["grass"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
  },
  {
    id: '004',
    name: 'Charmander',
    types: ['fire'],
    sprite: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
  },
  {
    id: '007',
    name: 'Squirtle',
    types: ['water'],
    sprite: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
  },
  {
    id: '131',
    name: 'Lapras',
    types: ['water', 'ice'],
    sprite: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png'
  }
]

function App() {
  return (
    <div className="App">
      <PokemonTable pokemonArray={pokemonArray} />
    </div>
  );
}

export default App;
