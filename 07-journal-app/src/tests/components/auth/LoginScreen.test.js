import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/auth/LoginScreen'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import '@testing-library/jest-dom'

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
			<LoginScreen />
		</MemoryRouter>
	</Provider>,
)

describe('Test in <LoginScreen />', () => {
	beforeEach(() => {
		store = mockStore(initState)
	})

	test('Should be display correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})
})
