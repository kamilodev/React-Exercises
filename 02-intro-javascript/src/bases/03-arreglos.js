// const arreglo = new Array()
// const objeto = new Object()

// console.log(arreglo)
// console.log(objeto)

const arreglo = [1, 2, 3, 4]

let arreglo2 = arreglo

arreglo2.push(5)

console.log(arreglo)
console.log(arreglo2)

const arreglo3 = [1, 2, 3, 4]

let arreglo4 = [...arreglo3, 5]

console.log(arreglo3)
console.log(arreglo4)

const arreglo5 = arreglo4.map(function (numero) {
	return numero * 2
})

console.log(arreglo5)
