import React from 'react'
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef'
import { shallow } from 'enzyme'

describe('Pruebas en <RealExampleRef />', () => {
	const wrapper = shallow(<RealExampleRef />)

	test('Debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
	})

	test('Debe mostrar el componente <MultipleCustomHooks />', () => {
		wrapper.find('button').simulate('click')
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
	})
})
