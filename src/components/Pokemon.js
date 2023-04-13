const Pokemon = ({pokemon, onPokemonClicked}) => {
    const handleClick = function () {
        onPokemonClicked(pokemon)

    }
    return ( 
        <>
            <li onClick={handleClick}>{pokemon["name"]}</li>
        </>
     );
}
 
export default Pokemon;