import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'

import { firebase } from '../../firebase/firebase-config'

import { login } from '../../actions/auth'
import { AppRouter } from '../../routers/AppRouter'
import { act } from '@testing-library/react'

import Swal from 'sweetalert2'

jest.mock('sweetalert2', () => ({
	fire: jest.fn(),
}))

jest.mock('../../actions/auth', () => ({
	login: jest.fn(),
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
	auth: {},
	ui: {
		loading: false,
		msgError: null,
	},
	notes: {
		active: {
			id: 'ABC',
		},
		notes: [],
	},
}

let store = mockStore(initState)
store.dispatch = jest.fn()

describe('Test in <AppRouter /> component', () => {
	test('Should call login if user is authenticated', async () => {
		let user

		await act(async () => {
			const userCred = await firebase
				.auth()
				.signInWithEmailAndPassword('test@testing.com', '12345678')

			user = userCred.user

			const wrapper = mount(
				<Provider store={store}>
					<MemoryRouter>
						<AppRouter />
					</MemoryRouter>
				</Provider>,
			)
		})

		expect(login).toHaveBeenCalledWith('Fu0IequHgnTV15MkarsUu0XekEh2', null)
	})
})
