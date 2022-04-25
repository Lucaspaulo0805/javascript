function soma (n1, n2) {
    return n1 + n2
}

console.log(soma(7, 2))


function soma (n1=0, n2=0) { //Caso "n1" ou "n2" não receba valor será atribuido o "0"
    return n1 + n2
}

console.log(soma(7))