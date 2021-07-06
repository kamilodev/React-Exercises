import { todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas en todoReducer', () => {
	test('Debe de retornar el estado por defecto', () => {
		const state = todoReducer(demoTodos, {})

		expect(state).toEqual(demoTodos)
	})

	test('Agregar un nuevo todo', () => {
		const newTodo = {
			id: 3,
			todo: 'Comprar Express',
			done: false,
		}

		const action = {
			type: 'add',
			payload: newTodo,
		}

		const state = todoReducer(demoTodos, action)
		expect(state.length).toEqual(3)
		expect(state).toEqual([...demoTodos, newTodo])
	})
})
