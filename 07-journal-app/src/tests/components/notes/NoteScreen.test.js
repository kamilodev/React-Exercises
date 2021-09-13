import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import '@testing-library/jest-dom'
import { NoteScreen } from '../../../components/notes/NoteScreen'
import { activeNote } from '../../../actions/notes'

jest.mock('../../../actions/notes', () => ({
	activeNote: jest.fn(),
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
	auth: {
		uid: '1',
		name: 'Kamilo',
	},
	ui: {
		loading: false,
		msgError: null,
	},
	notes: {
		active: {
			id: 1234,
			title: 'Holi',
			body: 'Mundillo',
			date: 0,
		},
		notes: [],
	},
}

let store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
	<Provider store={store}>
		<NoteScreen />
	</Provider>,
)

describe('Test in <NoteScreen /> component', () => {
	test('Should be display correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('Should dispatch activeNote', () => {
		wrapper.find('input[name="title"]').simulate('change', {
			target: {
				name: 'title',
				value: 'Hello Again',
			},
		})

		expect(activeNote).toHaveBeenLastCalledWith(1234, {
			body: 'Mundillo',
			title: 'Hello Again',
			id: 1234,
			date: 0,
		})
	})
})
