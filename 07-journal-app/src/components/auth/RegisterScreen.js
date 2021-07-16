import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
	return (
		<div>
			<h3 className='auth__title'>Register</h3>

			<form action=''>
				<input
					className='auth__input'
					type='text'
					placeholder='Name'
					name='name'
					autoComplete='off'
				/>
				<input
					className='auth__input'
					type='text'
					placeholder='Email'
					name='email'
					autoComplete='off'
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					autoComplete='off'
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Confirm Password'
					name='password2'
					autoComplete='off'
				/>
				<button
					type='submit'
					className='btn btn-primary btn-block mt-5 mb-1'>
					Login
				</button>
				<Link to='/auth/login' className='link'>
					Already Registered?
				</Link>
			</form>
		</div>
	)
}
