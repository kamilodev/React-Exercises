import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas en el Hook useCounter', () => {
	test('Debe retornar valores por defecto', () => {
		const { result } = renderHook(() => useCounter())
		expect(result.current.counter).toBe(10)
		expect(typeof result.current.increment).toBe('function')
		expect(typeof result.current.decrement).toBe('function')
		expect(typeof result.current.reset).toBe('function')
	})

	test('Debe tener el counter en 100', () => {
		const { result } = renderHook(() => useCounter(100))
		expect(result.current.counter).toBe(100)
	})

	test('Debe incrementar el counter en 1', () => {
		const { result } = renderHook(() => useCounter(100))
		const { increment } = result.current

		act(() => {
			increment()
		})

		const { counter } = result.current
		expect(counter).toBe(101)
	})

	test('Debe decrementar el counter en 1', () => {
		const { result } = renderHook(() => useCounter(100))
		const { decrement } = result.current

		act(() => {
			decrement()
		})

		const { counter } = result.current
		expect(counter).toBe(99)
	})

	test('Debe hacer un reset del counter y dejarlo en 10', () => {
		const { result } = renderHook(() => useCounter())
		const { reset } = result.current

		act(() => {
			reset()
		})

		const { counter } = result.current
		expect(counter).toBe(10)
	})
})
