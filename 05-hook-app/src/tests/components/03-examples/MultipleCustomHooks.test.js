import React from 'react'
import { shallow } from 'enzyme'
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {
	beforeEach(() => {
		useCounter.mockReturnValue({
			counter: 10,
			increment: () => {},
		})
	})

	test('Debe mostrarse correctamente', () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		})

		const wrapper = shallow(<MultipleCustomHooks />)

		expect(wrapper).toMatchSnapshot()
	})

	test('Debe mostrar la informacion', () => {
		useFetch.mockReturnValue({
			data: [
				{
					author: 'Camilo',
					quote: 'Hola Dev',
				},
			],
			loading: false,
			error: null,
		})

		const wrapper = shallow(<MultipleCustomHooks />)

		expect(wrapper.find('.alert').exists()).toBe(false)
		expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Dev')
		expect(wrapper.find('footer').text().trim()).toBe('Camilo')
	})
})
