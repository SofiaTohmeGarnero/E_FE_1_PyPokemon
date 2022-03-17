export const postNewPokemon = async (newPokemon) => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPokemon)
        });
        return await response.json();
    }catch(err){
        console.log(err);
    }
}