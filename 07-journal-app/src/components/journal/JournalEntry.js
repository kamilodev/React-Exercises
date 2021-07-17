import React from 'react'

export const JournalEntry = () => {
	return (
		<div className='journal__entry pointer'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://amuraworld.com/images/articles/133-botswana/01-full/132-leon-africano.jpg)',
				}}></div>
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>Un nuevo día</p>
				<p className='journal__entry-content'>
					Duis elit incididunt amet enim ullamco occaecat enim aliquip
					do.
				</p>
			</div>
			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	)
}
