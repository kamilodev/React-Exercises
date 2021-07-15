import React from 'react'
import {SearchScreen} from "../../../components/search/SearchScreen";
import {mount} from "enzyme"
import {MemoryRouter, Route} from "react-router-dom";

describe('Pruebas en <SearchScreen />', () => {

    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <Route path="/search" component={SearchScreen} />
        </MemoryRouter>
    )

    test('Debe de mostrarse correctamente con los valores por defecto', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero')
    })

    test('Debe de mostrar a Batman y el input con el valor de query string', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )

        expect(wrapper.find('input').prop('value')).toBe('batman')
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar el error si no se encuentra el Hero', () => {

        const hero = 'batman111'

        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )

        expect(wrapper.find('.alert-danger').text().trim()).toBe(`There is not a hero with ${hero} name`)
        expect(wrapper).toMatchSnapshot()
    })
    
    test('Debe de llamar el push del history', () => {

        const hero = 'batman'
        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
                <Route path="/search" component={() => <SearchScreen history={history} />} />
            </MemoryRouter>
        )
        
        wrapper.find('input').simulate('change'), {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        }
        
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })
        
        expect(history.push).toHaveBeenCalledWith('?q=batman')
    })
})