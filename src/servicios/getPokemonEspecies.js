import { POKE_ESPECIES_ENTREGA_POR_PAGINA } from "../utils/constantes"

export const getPokemonEspecies = async (offset = 0) => {
    try{
        const especies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=${POKE_ESPECIES_ENTREGA_POR_PAGINA}`);
        const jsonRespuesta = await especies.json();
        return jsonRespuesta;
    }catch(err){
        console.log(err);
    }
    
}