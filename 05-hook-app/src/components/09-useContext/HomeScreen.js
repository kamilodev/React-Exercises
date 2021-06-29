import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
	const userContext = useContext(UserContext)
	console.log(userContext)

	return (
		<>
			<h1>Home Screen</h1>
			<hr />
		</>
	)
}
