import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas para el componente <GifExpertApp />', () => {
	test('Debe hacer un snapshoot y mostrarse correctamente', () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar una lista de categorias', () => {
		const categories = ['Coding', 'Dragon Ball GT'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GiftGrid').length).toBe(categories.length);
	});
});
