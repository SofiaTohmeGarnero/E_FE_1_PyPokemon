export const getPokemonTypes = async () => {
    try{
        const types = await fetch('https://pokeapi.co/api/v2/type/');
        const jsonRespuesta = await types.json();
        return jsonRespuesta;
    }catch(err){
        console.log(err);
    }
    
}