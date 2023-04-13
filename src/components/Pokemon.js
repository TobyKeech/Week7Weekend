const Pokemon = ({pokemon, index}) => {
    
    const handleClick = (index) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return ( 
        <>
        <ol>
            <button type="button" onClick={() => 
                handleClick(index)}>{pokemon.name}
            </button>
            </ol>
        </>
     );
}
 
export default Pokemon;