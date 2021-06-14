import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
	test('getUser debe retornar un objeto', () => {
		const userTest = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		}

		const user = getUser()

		expect(user).toEqual(userTest)
	})

	// getUser activo debe retornar un objeto

	test('getUsuarioActivo debe retornar un objeto', () => {
		const nombre = 'Camilo'
		const user = getUsuarioActivo(nombre)
		//console.log(getUsuarioActivo(nombre))
		expect(user).toEqual({
			uid: 'ABC567',
			username: nombre,
		})
	})
})
