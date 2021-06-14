const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman',
}

//const { nombre, edad, clave } = persona

//console.log(nombre, edad, clave)

const myContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
	//console.log(nombre, edad, rango)
	return {
		nombreClave: clave,
		anios: edad,
		latLng: {
			lat: 3435,
			long: 2974,
		},
	}
}

const {
	nombreClave,
	anios,
	latLng: { lat, long },
} = myContext(persona)

console.log(nombreClave, anios)
console.log(lat, long)
