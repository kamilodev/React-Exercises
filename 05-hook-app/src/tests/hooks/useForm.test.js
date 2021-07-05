import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('Pruebas en useForm', () => {
	const initialForm = {
		name: 'Camilo Vanegas',
		email: 'kamilo_vanegas@hotmail.com',
	}

	test('Debe regresar un formulario por defecto', () => {
		const { result } = renderHook(() => useForm(initialForm))
		const [values, handleInputChange, reset] = result.current

		expect(values).toEqual(initialForm)
		expect(typeof handleInputChange).toBe('function')
		expect(typeof reset).toBe('function')
	})

	test('Debe cambiar el valor del formulario', () => {
		const { result } = renderHook(() => useForm(initialForm))
		const [, handleInputChange] = result.current

		act(() => {
			handleInputChange({
				target: {
					name: 'name',
					value: 'Kamilo Vanegas',
				},
			})
		})

		const [values] = result.current
		expect(values).toEqual({ ...initialForm, name: 'Kamilo Vanegas' })
		// expect(values).not.toEqual(initialForm)
	})

	test('Debe reestablecer el formulario cuando se llame al reset', () => {
		const { result } = renderHook(() => useForm(initialForm))
		const [, handleInputChange, reset] = result.current

		act(() => {
			handleInputChange({
				target: {
					name: 'name',
					value: 'Kamilo Vanegas',
				},
			})
			reset()
		})

		const [values] = result.current
		expect(values).toEqual(initialForm)
	})
})
