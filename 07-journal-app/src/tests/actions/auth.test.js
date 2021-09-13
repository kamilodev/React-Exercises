import { login, logout } from '../../actions/auth'
import { types } from '../../types/types'

describe('Test in actions from auth', () => {
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
})
