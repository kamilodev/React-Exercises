import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { JournalEntry } from '../../../components/journal/JournalEntry'
import '@testing-library/jest-dom'
import { activeNote } from '../../../actions/notes'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState)
store.dispatch = jest.fn()

const note = {
	id: 10,
	date: 0,
	title: 'Hello',
	body: 'Kav',
	url: 'https://devkav.dev/skin.jpg',
}

const wrapper = mount(
	<Provider store={store}>
		<JournalEntry {...note} />
	</Provider>,
)

describe('Test in <JournalEntry /> component', () => {
	test('Should display correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('Should active note', () => {
		wrapper.find('.journal__entry').prop('onClick')()

		expect(store.dispatch).toHaveBeenCalledWith(
			activeNote(note.id, { ...note }),
		)
	})
})
