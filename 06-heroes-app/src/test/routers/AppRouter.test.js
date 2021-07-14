import React from 'react'
import { AppRouter } from '../../routers/AppRouter'
import { AuthContext } from '../../auth/AuthContext'
import { mount } from 'enzyme'

describe('Pruebas en <AppRouter />', () => {
	test('Debe de mostrar el login si no esta autenticado', () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: {
				logged: false,
			},
		}

		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>,
		)

		expect(wrapper).toMatchSnapshot()
	})

	test('Debe de mostrar el componente marvel si esta autenticado', () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: {
				logged: true,
				name: 'Andres',
			},
		}

		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>,
		)
		expect(wrapper.find('.navbar').exists()).toBe(true)
	})
})
