import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
	const { setUser } = useContext(UserContext)

	const username = {
		id: 55240,
		name: 'Camilo Andres Vanegas',
	}
	return (
		<>
			<h1>Login Screen</h1>
			<hr />
			<button
				className='btn btn-primary'
				onClick={() => setUser(username)}>
				Login
			</button>
		</>
	)
}
