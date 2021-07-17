import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					className='notes__title-input'
					autoComplete='off'
				/>
				<textarea
					placeholder='Some to remaind today?'
					className='notes__textarea'></textarea>
				<div className='notes__image'>
					<img
						src='http://unsplash.it/g/300?random&gravity=center'
						alt='some kitties'
					/>
				</div>
			</div>
		</div>
	)
}
