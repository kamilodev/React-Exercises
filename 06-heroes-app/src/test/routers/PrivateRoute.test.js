import React from 'react'
import { PrivateRoute } from '../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'

describe('Pruebas en <PrivateRoute />', () => {
	test('Debe de mostrar el componente si esta autenticado y guarda el localStorage', () => {
		const props = {
			location: {
				pathname: '/marvel',
			},
		}

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
	})
})
