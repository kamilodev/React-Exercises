import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startNewNote } from '../../actions/notes'
import { db } from '../../firebase/firebase-config'
import { types } from '../../types/types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({
	auth: {
		uid: 'Testing',
	},
})

describe('Test with actions in notes', () => {
	test('Should create a new note in StartNewNote', async () => {
		await store.dispatch(startNewNote())

		const actions = store.getActions()

		console.log(actions)

		expect(actions[0]).toEqual({
			type: types.notesActive,
			payload: {
				id: expect.any(String),
				title: '',
				body: '',
				date: expect.any(Number),
			},
		})

		expect(actions[1]).toEqual({
			type: types.notesAddNew,
			payload: {
				id: expect.any(String),
				title: '',
				body: '',
				date: expect.any(Number),
			},
		})

		const docId = actions[0].payload.id
		await db.doc(`/Testing/journal/notes/${docId}`).delete()
	})
})
