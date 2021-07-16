import React from 'react'

export const LoginScreen = () => {
	return (
		<div>
			<h3>Login</h3>

			<form action=''>
				<input type='text' placeholder='email' name='email' />
				<input type='password' placeholder='Password' name='password' />
				<button type='submit'>Login</button>
				<hr />
				Google
			</form>
		</div>
	)
}
