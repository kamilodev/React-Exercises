import React from 'react';
import { GiftGrid } from '../../components/GiftGrid';
import { shallow } from 'enzyme';
import { useFetchGifts } from '../../hooks/useFetchGifts';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifts');

describe('Tests for GiftGrid component', () => {
	const category = 'Goku';
	// const wrapper = shallow(<GifGrid category={category}/>);

	test('should show the correct component and match with the snapshot', () => {
		useFetchGifts.mockReturnValue({
			data: [],
			loading: true,
		});
		const wrapper = shallow(<GiftGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should change the snapshot when useFetchGifs is executed', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://google.com',
				title: 'ABC Title',
			},
			{
				id: '123',
				url: 'https://google.com',
				title: 'ABC Title',
			},
		];

		useFetchGifts.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GiftGrid category={category} />);
		// expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GiftGridItem').length).toBe(gifs.length);
	});
});
