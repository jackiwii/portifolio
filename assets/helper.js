

// export function soma(primeiroNumero, segundoNumero) {
//     return primeiroNumero + segundoNumero
// };

export const soma = (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero;

export const users = ["jack", "ayrtu", "hoku", "akvile", "ralf"];



export const getData = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
};