function fazerLogin (email, senha) {
return {login: email,
        password: senha}
}

function calcularMedia(n1, n2) {
    let soma = n1 + n2
    let media = soma / 2
    return media 
}

console.log(fazerLogin("mandy24@gmail.com", 123456))
console.log(calcularMedia (9, 7))

