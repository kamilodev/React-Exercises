import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
	const user = {
		id: 55240,
		name: 'Camilo',
		email: 'kamilo_vanegas@hotmail.com',
	}

	return (
		<UserContext.Provider value={user}>
			<AppRouter />
		</UserContext.Provider>
	)
}
