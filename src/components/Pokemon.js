const Pokemon = ({ pokemon, setPokeData }) => {

    const handleClick = () => {
        fetch(`${pokemon.url}`)
            .then(res => res.json())
            .then(data => setPokeData(data))
    }
    console.log(pokemon);
    return (
        <>
            <ul>
            <div className="Pokemons">
                <button type="button" onClick={() =>
                    handleClick()}>{pokemon.name}
                </button>
                </div>
            </ul>
        </>
    );
}

export default Pokemon;