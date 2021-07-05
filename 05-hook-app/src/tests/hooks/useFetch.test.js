import { useFetch } from '../../hooks/useFetch'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en useFetch', () => {
	test('Debe retornar la informacion por defecto', () => {
		const { result } = renderHook(() =>
			useFetch('https://www.breakingbadapi.com/api/quotes/'),
		)

		const { data, loading, error } = result.current

		expect(data).toBe(null)
		expect(loading).toBe(true)
		expect(error).toBe(null)
	})

	test('Debe tener informacion deseada, loading false, error false', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch('https://www.breakingbadapi.com/api/quotes/1'),
		)
		await waitForNextUpdate({ timeout: 5000 })
		const { data, loading, error } = result.current
		expect(loading).toBe(false)
		expect(error).toBe(null)
		expect(data.length).toBe(1)
	})

	test('Debe manejar el error', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch('https://reqres.in/api2324/users?page=2'),
		)
		await waitForNextUpdate({ timeout: 2000 })
		const { data, loading, error } = result.current
		expect(loading).toBe(false)
		expect(error).toBe('No se pudo cargar la info')
		expect(data).toBe(null)
	})
})
