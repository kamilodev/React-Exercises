import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from 'enzyme'
import { RegisterScreen } from '../../../components/auth/RegisterScreen'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import '@testing-library/jest-dom'
import { types } from '../../../types/types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
	auth: {},
	ui: {
		loading: false,
		msgError: null,
	},
}

let store = mockStore(initState)

const wrapper = mount(
	<Provider store={store}>
		<MemoryRouter>
			<RegisterScreen />
		</MemoryRouter>
	</Provider>,
)

describe('Test in <RegisterScreen /> component', () => {
	test('Sould display <RegisterScreen /> correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('Should dispatch respect action', () => {
		const emailField = wrapper.find('input[name="email"]')

		emailField.simulate('change', {
			target: {
				value: '',
				name: 'email',
			},
		})

		wrapper.find('form').simulate('submit', {
			preventDefault() {},
		})

		const actions = store.getActions()

		expect(actions[0]).toEqual({
			type: types.uiSetError,
			payload: 'Name is required',
		})
	})

	test('Should display div box with error', () => {
		const initState = {
			auth: {},
			ui: {
				loading: false,
				msgError: 'Email is not valid',
			},
		}

		let store = mockStore(initState)

		const wrapper = mount(
			<Provider store={store}>
				<MemoryRouter>
					<RegisterScreen />
				</MemoryRouter>
			</Provider>,
		)

		expect(wrapper.find('.auth__alert-error').exists()).toBe(true)
		expect(wrapper.find('.auth__alert-error').text().trim()).toBe(
			initState.ui.msgError,
		)
	})
})
