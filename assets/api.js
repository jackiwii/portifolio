
// Arrow function

export const data = {
    nome: "jack",
    profissao: "programador",
};

export const getPokemon = async (name) => {
        const response = await fetch(
            'https://pokeapi.co/api/v2/pokemon/${name}}'
        );

    if (!responde.ok) {
        throw new Error("Pokemon not found!");
    };
    const data = await response.json();
    return data;
};

export const getData = async () => {

    let result;

    return setTimeout(() => {
        result = data;
        console.log(result);
    }, 2000);
};