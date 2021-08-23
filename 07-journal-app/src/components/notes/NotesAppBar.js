import React from 'react'
import { useDispatch } from 'react-redux'
import { startSaveNote } from '../../actions/notes'
import { useSelector } from 'react-redux'

export const NotesAppBar = () => {
	const dispatch = useDispatch()
	const { active } = useSelector(state => state.notes)

	const handleSave = () => {
		dispatch(startSaveNote(active))
	}

	return (
		<div className='notes__appbar'>
			<span>17 de Julio de 2021</span>
			<div>
				<button className='btn'>Picture</button>
				<button className='btn' onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	)
}
