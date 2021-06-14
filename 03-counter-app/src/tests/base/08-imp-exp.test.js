import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Pruebas en Funciones Heroes', () => {
	test('Debe retornar un heroe por ID', () => {
		const id = 1
		const heroe = getHeroeById(id)

		const heroeData = heroes.find((h) => h.id === id)

		expect(heroe).toEqual(heroeData)
	})

	test('Debe retornar undefined si no existe heroe por ID', () => {
		const id = 10
		const heroe = getHeroeById(id)

		expect(heroe).toBe(undefined)
	})

	test('Debe retornar un arreglo por owner', () => {
		const owner = 'Marvel'
		const heroe = getHeroesByOwner(owner)
		// console.log('aqui heroe', heroe)

		const ownerData = heroes.filter((h) => h.owner === owner)
		//console.log('aqui owner', ownerData)

		expect(heroe).toEqual(ownerData)
	})

	test('Debe retornar un arreglo por heroes', () => {
		const owner = 'Marvel'
		const heroe = getHeroesByOwner(owner)

		expect(heroe.length).toBe(2)
	})
})
