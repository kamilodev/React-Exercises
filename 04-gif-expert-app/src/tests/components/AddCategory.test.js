import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('pruebas en <AddCategory />', () => {
	const setCategories = jest.fn()
	let wrapper = shallow(<AddCategory setCategories={setCategories} />)

	beforeEach(() => {
		jest.clearAllMocks()
		wrapper = shallow(<AddCategory setCategories={setCategories} />)
	})

	test('Debe mostrar <AddCategory /> correctamente', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('Debe de cambiar la caja de texto', () => {
		const input = wrapper.find('input')
		const value = 'Hola mundo'

		input.simulate('change', { target: { value } })
		expect(wrapper.find('p').text().trim()).toBe(value)
	})

	test('No debe postear la informacion On Submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} })
		expect(setCategories).not.toHaveBeenCalled()
	})

	test('Debe limpiar el testCategories y limpiar la caja de texto', () => {
		const value = 'Hello World'

		wrapper.find('input').simulate('change', { target: { value } })
		wrapper.find('form').simulate('submit', { preventDefault() {} })

		// expect(setCategories).toHaveBeenCalled()
		// expect(setCategories).toHaveBeenCalledWith( expect.any(Function)) // Evalua que sea una funcion lo que se llama
		expect(setCategories).toHaveBeenCalledTimes(1)
		expect(wrapper.find('input').prop('value')).toBe('')
	})
})
