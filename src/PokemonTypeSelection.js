// import React, { useState } from 'react';

function PokemonTypeSelection({ pokemonArray, selectedType, selectType }) {
  const types = { 'none': true }
  pokemonArray.forEach(pokemon => {
    pokemon.types.forEach(type => types[type] = true)
  })

  // debugger

  return (
    <select
      value={selectedType === null ? 'none' : selectedType}
      onChange={e => {
        selectType(e.target.value)
      }}
    >
      {
        Object.keys(types).map(
          t =>
            <option key={t}>
              {t}
            </option>
        )
      }
    </select>
  );
}

export default PokemonTypeSelection;
