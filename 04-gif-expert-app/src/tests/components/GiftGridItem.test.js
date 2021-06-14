import React from 'react'
import GiftGridItem from '../../components/GiftGridItem'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'

describe('Pruebas en <GiftGridItem />', () => {
	const title = 'Mi titulo'
	const url = 'https://localhost/algo.jpg'
	const wrapper = shallow(<GiftGridItem title={title} url={url} />)
	// beforeEach(() => {
	// 	wrapper = shallow(<GiftGridItem />)
	// })

	test('Debe mostrar <GiftGridItem /> correctamente', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('Debe tener un parrafo con el Title', () => {
		const p = wrapper.find('p')
		expect(p.text().trim()).toBe(title)
	})

	test('Debe tener la imagen igual al url y alt de los props', () => {
		const img = wrapper.find('img')
		expect(img.prop('alt')).toBe(title)
		expect(img.prop('src')).toBe(url)
	})

	test('Debe tener la clase animate__fadeIn', () => {
		const div = wrapper.find('div')
		const clase = div.prop('className')
		expect(clase.includes('animate__fadeIn')).toBe(true)
	})
})
