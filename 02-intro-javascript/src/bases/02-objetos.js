const persona = {
	nombre: 'Tony',
	apellido: 'Stark',
	edad: 45,
	direccion: {
		ciudad: 'New York',
		zip: 29874,
		lat: 873486,
		long: 873486,
	},
}

const persona2 = { ...persona }
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)
