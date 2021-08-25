import { authReducer } from '../../reducers/authReducer'
import { types } from '../../types/types'

describe('Test in authReducer', () => {
	test('Should makes the login', () => {
		const initState = {}
		const action = {
			type: types.login,
			payload: {
				uid: 'abc',
				displayName: 'Kamilo',
			},
		}

		const state = authReducer(initState, action)

		expect(state).toEqual({
			uid: 'abc',
			name: 'Kamilo',
		})
	})

	test('Should makes logout', () => {
		const initState = {
			uid: 'abc',
			displayName: 'Kamilo',
		}

		const action = {
			type: types.logout,
		}

		const state = authReducer(initState, action)

		expect(state).toEqual({})
	})

	test('Do not make changes in initState', () => {
		const initState = {
			uid: 'abc',
			displayName: 'Kamilo',
		}

		const action = {
			type: 'lksjdfj',
		}

		const state = authReducer(initState, action)

		expect(state).toEqual(initState)
	})
})
