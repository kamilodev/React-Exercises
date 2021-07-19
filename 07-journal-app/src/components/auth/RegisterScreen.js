import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {useDispatch} from "react-redux";
import validator from 'validator'
import {removeError, setError} from "../../actions/ui";

export const RegisterScreen = () => {

	const dispatch = useDispatch()

	const [formValues, handleInputChange] = useForm({
		name: 'Andres',
		email: 'kamilo@gmail.com',
		password: '123456',
		password2: '123456',
	})

	const { name, email, password, password2 } = formValues

	const handleRegister = e => {
		e.preventDefault()

		if (isFormValid()) {
			console.log('Formulario Correcto')
		}
	}

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'))
			return false
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'))
			return false
		} else if (password !== password2 || password.length <= 5) {
			dispatch(setError('Password should be at least 6 characters'))
			return false
		}

		dispatch(removeError())
		return true
	}

	return (
		<div>
			<h3 className='auth__title'>Register</h3>

			<form onSubmit={handleRegister}>
				<div className='auth__alert-error'>Hola Mundo</div>

				<input
					className='auth__input'
					type='text'
					placeholder='Name'
					name='name'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='text'
					placeholder='Email'
					name='email'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Confirm Password'
					name='password2'
					autoComplete='off'
					value={password2}
					onChange={handleInputChange}
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
