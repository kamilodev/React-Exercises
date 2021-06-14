import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = e => {
		setInputValue(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (inputValue.trim().length > 2) {
			setCategories(categ => [inputValue, ...categ])
			setInputValue('')
		} else {
			setInputValue('')
		}
	}

	return (
		<form className='form__group field' onSubmit={handleSubmit}>
			<br />
			<p>{inputValue}</p>
			<input
				className='form__field'
				name='name'
				id='name'
				type='text'
				value={inputValue}
				onChange={handleInputChange}
			/>
			<label htmlFor='name' className='form__label'>
				Type Here...
			</label>
		</form>
	)
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
}
