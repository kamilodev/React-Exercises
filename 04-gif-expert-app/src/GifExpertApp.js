import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
	const [categories, setCategories] = useState(defaultCategories);
	/* const [categories, setCategories] = useState(['Coding']) */

	return (
		<>
			<h2>Gift Expert App</h2>
			<h3>Input text for search</h3>
			<br />
			<AddCategory setCategories={setCategories} />
			<br />
			{categories.map((category) => (
				<GiftGrid key={category} category={category} />
			))}
		</>
	);
};

export default GifExpertApp;
