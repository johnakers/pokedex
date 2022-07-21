import { useState } from 'react';
import PokemonRow from './PokemonRow';
import PokemonTypeSelection from './PokemonTypeSelection';

function PokemonTable(props) {
  const { pokemonArray } = props;
  const [selectedType, setSelectedType] = useState('none');

  const filteredPokemonByType = pokemonArray.filter(pokemon => pokemon.types.includes(selectedType))
  const selectedPokemon = selectedType === 'none' ? pokemonArray : filteredPokemonByType

  return (
    <div className="PokemonTable">
      <PokemonTypeSelection
        pokemonArray={pokemonArray}
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      <hr />

      { selectedPokemon.map(pokemon => <PokemonRow pokemon={pokemon} key={pokemon.id} />) }
    </div>
  );
}

export default PokemonTable;
