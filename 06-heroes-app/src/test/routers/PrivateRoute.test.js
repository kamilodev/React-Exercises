import React from 'react'
import { PrivateRoute } from '../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import { DashboardRoutes } from '../../routers/DashboardRoutes'

describe('Pruebas en <PrivateRoute />', () => {
	const props = {
		location: {
			pathname: '/marvel',
		},
	}

	test('Debe de mostrar el componente si esta autenticado y guarda el localStorage', () => {
		Storage.prototype.setItem = jest.fn()

		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute
					isAutenticated={true}
					component={() => <span>Holi!</span>}
					{...props}
				/>
			</MemoryRouter>,
		)

		expect(wrapper.find('span').exists()).toBe(true)
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
	})

	test('Debe de bloquear el componente si no esta bloqueado', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute
					isAutenticated={false}
					component={() => <span>Holi!</span>}
					{...props}
				/>
			</MemoryRouter>,
		)

		expect(wrapper.find('span').exists()).toBe(false)
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
	})
})
