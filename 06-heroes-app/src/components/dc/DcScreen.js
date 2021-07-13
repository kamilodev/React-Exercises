import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
	return (
		<>
			<h1>DC Screen</h1>
			<hr />
			<div>
				<HeroList publisher={'DC Comics'} />
			</div>
		</>
	)
}
