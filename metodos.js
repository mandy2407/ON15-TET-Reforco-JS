const frutas =  ["maça", "banana", "banana"]

//console.log(frutas.length)

/*exemplo de uso function anonima como callback
const encontrarPrimeiro = frutas.find(function(elemento) {
    return elemento == "banana"

})*/

const buscarPrimeiro = frutas.find((elemento) => elemento == "banana")

//console.log(encontrarPrimeiro)

consol.log(buscarPrimeiro)

const filtrarPor = frutas.filter((elemento) => elemento == 'banana')

console.log(filtrarPor) // {2 bananas}
 
const executarTodosComRetorno = frutas.map(elemento => elemento = "maça")

console.log(executarTodosComRetorno) // retornar so com maça

const executarTodosSemRetorno = frutas.forEach (elemento => elemento => {
    console.log(elemento = "maça")
    return elemento = "maça"
})
    


const nomes = ["Amanda", "Aline", "dayane","Lilit"]

const alterarNomes = nomes.map((elemento) => elemento.toLocaleUpperCase())

console.log(alterarNomes)