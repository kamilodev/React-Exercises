import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'

import {
	login,
	logout,
	startLoginEmailPassword,
	startLogout,
} from '../../actions/auth'
import { types } from '../../types/types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState)

describe('Test in actions from auth', () => {
	beforeEach(() => {
		store = mockStore(initState)
	})

	test('Login and Logout should be create respective actions', () => {
		const uid = 'ABC123'
		const displayName = 'Kamilo'

		const loginAction = login(uid, displayName)
		const logoutAction = logout()

		expect(loginAction).toEqual({
			type: types.login,
			payload: {
				uid,
				displayName,
			},
		})

		expect(logoutAction).toEqual({
			type: types.logout,
		})
	})

	test('startLogout should be done', async () => {
		await store.dispatch(startLogout())

		const actions = store.getActions()

		expect(actions[0]).toEqual({
			type: types.logout,
		})

		expect(actions[1]).toEqual({
			type: types.notesLogoutCleaning,
		})
	})

	test('Should init startLoginEmailPassword', async () => {
		await store.dispatch(
			startLoginEmailPassword('test@testing.com', '12345678'),
		)

		const actions = store.getActions()

		expect(actions[1]).toEqual({
			type: types.login,
			payload: {
				uid: 'Fu0IequHgnTV15MkarsUu0XekEh2',
				displayName: null,
			},
		})
	})
})
