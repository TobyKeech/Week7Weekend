const Pokemon = ({pokemon, setPokeData}) => {
    
    const handleClick = () => {
        fetch(`${pokemon.url}`)
        .then(res => res.json())
        .then(data => setPokeData(data))
    }
    console.log(pokemon);
    return ( 
        <>
        <ul>
            <button type="button" onClick={() => 
                handleClick()}>{pokemon.name}
            </button>
        </ul>
        </>
     );
}
 
export default Pokemon;