import { types } from '../../types/types'

describe('Test in types', () => {
	test('Sould have the same original types', () => {
		const originalTypes = {
			login: '[Auth] Login',
			logout: '[Auth] Logout',

			uiSetError: '[UI] Set Error',
			uiRemoveError: '[UI] Remove Error',

			uiStartLoading: '[UI] Start Loading',
			uiFinishLoading: '[UI] Finish Loading',

			notesAddNew: '[Notes] New Note',
			notesActive: '[Notes] Active Note',
			notesLoad: '[Notes] Load Note',
			notesUpdated: '[Notes] Updated Note',
			notesFileUrl: '[Notes] image url',
			notesDelete: '[Notes] Delete Note',
			notesLogoutCleaning: '[Notes] Cleaning Note',
		}

		expect(originalTypes).toEqual(types)
	})
})
