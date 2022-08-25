// Escreva uma função que receba um Array com 3 números e imprima eles em ordem
function num(order){
    var listaOrdenada = order.sort((a,b) => a-b)
    for (let numOrder of listaOrdenada) {
        console.log(numOrder)
    }
}

num([55,10,17])