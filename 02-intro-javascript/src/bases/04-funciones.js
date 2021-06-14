const saludar = function (nombre) {
	return `Hola ${nombre}`
}

console.log(saludar('Goku'))

const getUser = () => ({
	// Por si se quiere retornar un objeto sin la palabra return
	uid: '12345',
	username: 'kamilo923',
})

console.log(getUser())

const user = getUser()
console.log(user)

const getUsuarioActivo = (nombre) => ({
	uid: 'ABCDEF',
	username: nombre,
})

const usuarioActivo = getUsuarioActivo('Kamilo')
console.log(usuarioActivo)
