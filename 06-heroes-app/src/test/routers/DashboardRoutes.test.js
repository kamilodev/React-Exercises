import React from 'react'
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en <DashboardRoutes />', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			logged: true,
			name: 'Andres',
		},
	}

	test('Debe mostrarse correctamente', () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>,
		)
		expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('.text-info').text().trim()).toBe('Andres')
	})
})
