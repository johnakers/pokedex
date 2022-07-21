// props ------
// id: 1,
// name: "Bulbasaur",
// types: ["grass"],
// sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"

function PokemonRow(props) {
  const { pokemon } = props;
  const emojis = {
    'grass': '🍃',
    'fire': '🔥',
    'water': '💧',
    'ice': '❄️'
  };

  return (
    <div className="PokemonRow">
      <span><img width="40px" src={pokemon.sprite} alt={pokemon.name}/></span>
      <span>{pokemon.name}</span>{" "}
      <span>{pokemon.types.map(t => emojis[t])}</span>
    </div>
  );
}

export default PokemonRow;
