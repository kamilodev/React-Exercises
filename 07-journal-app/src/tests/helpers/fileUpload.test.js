import { fileUpload } from '../../helpers/fileUpload'

describe('Test in fileUpload', () => {
	test('Should attach a file and return URL', async () => {
		const resp = await fetch(
			'https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-1024.png',
		)
		const blob = await resp.blob()

		const file = new File([blob], 'foto.png')
		const url = await fileUpload(file)

		expect(typeof url).toBe('string')
	})

	test('Should return an error', async () => {
		const file = new File([], 'foto.png')
		const url = await fileUpload(file)

		expect(url).toBe(null)
	})
})
