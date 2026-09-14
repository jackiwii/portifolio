
// funcoes 

//isso eh a definicao da funcao, nao ela sendo ativada
function greeting() {
    console.log("hello from script")
}

//funcoes podem ter parametros/argumentos
function greetingPersonal(name) {
    console.log("hello", name)

}
//funcao mais complexa
function canIBuyThisShit(money, price) {
    if (price <= money) {
        console.log("yeah take ma money");
    } else {
        console.log("sad life");
    }
}
//funcao de retorno (?)
function howMuchLeft(money, price){
    const result = money - price;
    return result;
}
const result = howMuchLeft (10000, 5000);


//aq eh a funcao sendo chamada/ativada

greeting();
greeting();

greetingPersonal("jack")

canIBuyThisShit(1000, 2000);

console.log(result);
