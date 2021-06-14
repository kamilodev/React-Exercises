import React from 'react'
// import { render } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'

describe('Pruebas en <PrimeraApp />', () => {
	// test('Debe mostrar el mensaje "Hola soy Camilo"', () => {
	// 	const saludo = 'Hola soy Andres'
	// 	const { getByText } = render(<PrimeraApp saludo={saludo} />)
	// 	expect(getByText(saludo)).toBeInTheDocument()
	// })

	test('Debe mostrar <PrimeraApp /> correctamente', () => {
		const saludo = 'Hola soy Andres'
		const wrapper = shallow(<PrimeraApp saludo={saludo} />)

		expect(wrapper).toMatchSnapshot()
	})

	test('Debe mostrar el subtitulo enviado por props', () => {
		const saludo = 'Hola soy Camilo'
		const subTitulo = 'Soy un subtitulillo'

		const wrapper = shallow(<PrimeraApp saludo={saludo} />)

		const textoParrafo = wrapper.find('p').text()
		console.log(textoParrafo)

		expect(textoParrafo).toBe(subTitulo)
	})
})
