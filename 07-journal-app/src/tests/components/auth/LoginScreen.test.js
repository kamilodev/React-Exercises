import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/auth/LoginScreen'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import {
	startGoogleLogin,
	startLoginEmailPassword,
} from '../../../actions/auth'

import '@testing-library/jest-dom'

jest.mock('../../../actions/auth', () => ({
	startGoogleLogin: jest.fn(),
	startLoginEmailPassword: jest.fn(),
}))

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

store.dispatch = jest.fn()

const wrapper = mount(
	<Provider store={store}>
		<MemoryRouter>
			<LoginScreen />
		</MemoryRouter>
	</Provider>,
)

describe('Test in <LoginScreen />', () => {
	beforeEach(() => {
		store = mockStore(initState)
		jest.clearAllMocks()
	})

	test('Should be display correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('Should dispatch startGoogleLogin action', () => {
		wrapper.find('.google-btn').prop('onClick')()

		expect(startGoogleLogin).toHaveBeenCalled()
	})

	test('Should dispatch startLogin with respective arguments', () => {
		const email = 'kamilo923@me.com'
		const password = 'KavDev923'

		wrapper.find('input[name="email"]').simulate('change', {
			target: {
				name: 'email',
				value: email,
			},
		})
		wrapper.find('input[name="password"]').simulate('change', {
			target: {
				name: 'password',
				value: password,
			},
		})

		wrapper.find('form').prop('onSubmit')({ preventDefault() {} })

		expect(startLoginEmailPassword).toHaveBeenCalledWith(email, password)
	})
})
