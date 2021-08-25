import cloudinary from 'cloudinary'
import { fileUpload } from '../../helpers/fileUpload'

cloudinary.config({
	cloud_name: 'dhhb62ndg',
	api_key: '847331653647886',
	api_secret: 'a0B0HaF2M0YJ66m2dofWjLNTgSE',
	secure: true,
})

describe('Test in fileUpload', () => {
	test('Should attach a file and return URL', async () => {
		const resp = await fetch(
			'https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-1024.png',
		)
		const blob = await resp.blob()

		const file = new File([blob], 'foto.png')
		const url = await fileUpload(file)

		expect(typeof url).toBe('string')

		const segments = url.split('/')
		const imageId = segments[segments.length - 1].replace('.png', '')

		await cloudinary.v2.api.delete_resources(
			`${imageId}`,
			{},
			(error, result) => {
				// console.log(error, result)
			},
		)
	})

	test('Should return an error', async () => {
		const file = new File([], 'foto.png')
		const url = await fileUpload(file)

		expect(url).toBe(null)
	})
})
