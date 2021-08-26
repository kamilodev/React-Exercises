import { types } from '../../types/types'
import { removeError, setError } from '../../actions/ui'
import { finishLoading, startLoading } from '../../actions/loading'

describe('Tests in actions', () => {
	test('All actions must work correctly', () => {
		const action = setError('Help!')

		expect(action).toEqual({
			type: types.uiSetError,
			payload: 'Help!',
		})

		const removeErrorAction = removeError()
		const startLoadingAction = startLoading()
		const finishLoadingAction = finishLoading()

		expect(removeErrorAction).toEqual({
			type: types.uiRemoveError,
		})
		expect(startLoadingAction).toEqual({
			type: types.uiStartLoading,
		})
		expect(finishLoadingAction).toEqual({
			type: types.uiFinishLoading,
		})
	})
})
