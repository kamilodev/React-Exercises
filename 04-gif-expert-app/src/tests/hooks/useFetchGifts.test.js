import { useFetchGifts } from '../../hooks/useFetchGifts';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifts', () => {
	/* const { data, loading } = useFetchGifts('Dragon Ball GT'); */

	test('Debe retornar el estado inicial', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifts('Dragon Ball GT'));

		const { data, loading } = result.current;
		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test('Debe retornar el arreglo de imagenes y el loading en false', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifts('Dragon Ball GT'));

		await waitForNextUpdate();
		const { data, loading } = result.current;

		expect(data.length).toBe(20);
		expect(loading).toBe(false);
	});
});
