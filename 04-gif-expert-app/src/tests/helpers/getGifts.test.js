import { getGifts } from '../../helpers/getGifts'

describe('Pruebas en componente <getGifts />', () => {
	test('Debe traer 10 elementos', async () => {
		const gifts = await getGifts('Goku')
		expect(gifts.length).toBe(20)
	})

	test('Debe tener array vacio sin categoria', async () => {
		const gifts = await getGifts('')
		expect(gifts.length).toBe(0)
	})
})
