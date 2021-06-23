import React from 'react'
import '../02-useEffect/effects.css'
import {useFetch} from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {

	const {loading, data} = useFetch('https://www.breakingbadapi.com/api/quotes/2')

	const {author, quote} = !!data && data[0]

	return (
		<div>
			<h1>Breaking Bad</h1>
			<hr />
			{
				loading
				?
					(
						<div className='alert alert-info text-center'>
							Loading...
						</div>
					)
				:
					(
						<blockquote className='blockquote text-right'>
							<p className='mb-0'> {quote} </p>
							<br />
							<footer className='blockquote-footer'> {author} </footer>
						</blockquote>
					)

			}
		</div>
	)
}
