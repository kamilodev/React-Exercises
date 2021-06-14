import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string.js', () => {
	test('getSaludo debe retornar Hola Fernando', () => {
		const nombre = 'Fernando'

		const saludo = getSaludo(nombre)

		expect(saludo).toBe('Hola ' + nombre)
	})

	// Test que retorna Hola Camilo si no se envia un argumento

	test('getSaludo debe retornar Hola Camilo', () => {
		const saludo = getSaludo()
		expect(saludo).toBe('Hola Camilo')
	})
})
