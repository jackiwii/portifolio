import { soma, users } from './helper.js';
import greeter from './greeter.js'; 
import { getPokemon, data } from './api.js';

const resultado = soma(35, 20);

console.log("O resultado eh esse oh", resultado);

greeter();


// async function main() {
//     try {
//         console.log("Searching for Pokemoon...");

//         const pokemon = await getPokemon("charmander")

//         console.log("Pokemon:", pokemon.name);
//         console.log("Height:", pokemon.hight);
//         console.log("Weight:", pokemon.weight);
//     } catch (error) {
//         console.error("Something went wrong:", error.message);
//     }
    
// }

// main();

// const gringos = users.map(u => u == "akvile" || uu == "ralf");

// Desconstructing !!

// const { nome } = data;

// console.log("nomin??", nome);

// const [a, b, c] = users

// console.log("o que eh isso?", a, b, c);

const usersCopyPlusJuliana = [...users, "Juliana"];

console.log("new thingy", usersCopyPlusJuliana);


const player = {
    score: 500
    name: "jonny",
    stars: 4,
    favChamp: "maokai",
};

const copyPlayerChamgeName = {
    ...player,
    name: "juliana",
    stars: 10,
};


// Foreach or loops !!

const users = ["jack", "ayrtu", "hoku", "akvile", "ralf"];

users.forEach((s) => {
    console.log(s)
})