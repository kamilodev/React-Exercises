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

	test('Debe de borrar un TODO', () => {
		const action = {
			type: 'delete',
			payload: 1,
		}

		const state = todoReducer(demoTodos, action)
		expect(state.length).toBe(1)
		expect(state).toEqual([demoTodos[1]])
	})

	test('Debe de cambiar el TOGGLE un TODO', () => {
		const action = {
			type: 'toggle',
			payload: 1,
		}

		const state = todoReducer(demoTodos, action)
		expect(state[0].done).toBe(true)
		expect(state[1]).toEqual(demoTodos[1])
	})
})
