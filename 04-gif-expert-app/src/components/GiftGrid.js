import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import GiftGridItem from './GiftGridItem';

export const GiftGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifts(category);

	return (
		<>
			<h3 className=" animate__animated animate__fadeIn"> {category} </h3>
			{loading && <p className=" animate__animated animate__flash">Loading</p>}
			<br />
			<div className="card-grid">
				{images.map((img) => (
					<GiftGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
